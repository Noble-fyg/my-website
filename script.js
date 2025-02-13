// 定义问题和选项，为每个维度设计足够的题目
const questions = [
    // 外向(E) - 内向(I)维度
    {
        question: "在一群人聚会时，你会",
        options: [
            { label: "主动与很多人交流互动，成为聚会焦点", value: "E" },
            { label: "安静地坐在一旁，只和熟悉的人交流", value: "I" }
        ]
    },
    {
        question: "当你有一个新想法时，你更可能",
        options: [
            { label: "马上和身边的人分享讨论", value: "E" },
            { label: "先自己思考一段时间，再决定是否分享", value: "I" }
        ]
    },
    {
        question: "空闲时间，你更喜欢",
        options: [
            { label: "参加社交活动，如派对、聚会等", value: "E" },
            { label: "在家安静地看书、看电影", value: "I" }
        ]
    },
    {
        question: "面对新环境，你会",
        options: [
            { label: "很快适应并主动探索新事物", value: "E" },
            { label: "需要一些时间来适应，比较谨慎", value: "I" }
        ]
    },
    {
        question: "和朋友聊天时，你",
        options: [
            { label: "经常主动开启新话题", value: "E" },
            { label: "等对方开启话题，再进行回应", value: "I" }
        ]
    },
    // 感觉(S) - 直觉(N)维度
    {
        question: "看到一幅画，你首先关注",
        options: [
            { label: "画面中的具体细节，如颜色、线条等", value: "S" },
            { label: "画所传达的整体意境和情感", value: "N" }
        ]
    },
    {
        question: "做决策时，你更依靠",
        options: [
            { label: "过往的经验和实际情况", value: "S" },
            { label: "自己的直觉和灵感", value: "N" }
        ]
    },
    {
        question: "学习新知识时，你更喜欢",
        options: [
            { label: "通过具体的实例和案例来学习", value: "S" },
            { label: "了解抽象的概念和理论", value: "N" }
        ]
    },
    {
        question: "描述一件事情时，你",
        options: [
            { label: "会详细描述具体的事实和过程", value: "S" },
            { label: "更注重表达事情的意义和影响", value: "N" }
        ]
    },
    {
        question: "对于未来，你",
        options: [
            { label: "更关注实际的规划和目标", value: "S" },
            { label: "充满幻想和期待未知的可能性", value: "N" }
        ]
    },
    // 思考(T) - 情感(F)维度
    {
        question: "当朋友遇到困难向你倾诉时，你会",
        options: [
            { label: "理性地帮朋友分析问题并提供解决方案", value: "T" },
            { label: "先给予情感上的安慰和支持", value: "F" }
        ]
    },
    {
        question: "在团队合作中，你更看重",
        options: [
            { label: "任务的完成效率和质量", value: "T" },
            { label: "团队成员之间的和谐氛围", value: "F" }
        ]
    },
    {
        question: "面对批评，你",
        options: [
            { label: "冷静分析批评是否合理，从中吸取教训", value: "T" },
            { label: "容易感到受伤，需要时间恢复情绪", value: "F" }
        ]
    },
    {
        question: "做决策时，你更倾向于",
        options: [
            { label: "依据客观的逻辑和事实", value: "T" },
            { label: "考虑他人的感受和关系", value: "F" }
        ]
    },
    {
        question: "评价一个人时，你更注重",
        options: [
            { label: "对方的能力和成就", value: "T" },
            { label: "对方的品德和性格", value: "F" }
        ]
    },
    // 判断(J) - 感知(P)维度
    {
        question: "做事情前，你通常",
        options: [
            { label: "会制定详细的计划并严格执行", value: "J" },
            { label: "边做边看，随机应变", value: "P" }
        ]
    },
    {
        question: "面对截止日期，你",
        options: [
            { label: "会提前完成任务，避免拖延", value: "J" },
            { label: "可能会在截止日期前赶工", value: "P" }
        ]
    },
    {
        question: "整理房间时，你",
        options: [
            { label: "会把物品分类整理得井井有条", value: "J" },
            { label: "不太在意物品的摆放，比较随意", value: "P" }
        ]
    },
    {
        question: "在旅行前，你",
        options: [
            { label: "会提前规划好行程和景点", value: "J" },
            { label: "喜欢到了当地再做安排", value: "P" }
        ]
    },
    {
        question: "面对多个选择时，你",
        options: [
            { label: "会尽快做出决定", value: "J" },
            { label: "会犹豫很久，想了解更多信息", value: "P" }
        ]
    }
];

const questionContainer = document.getElementById('question-container');
const nextBtn = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');

let currentQuestionIndex = 0;
const answers = [];

// 不同 MBTI 类型的描述和特点信息
const mbtiDescriptions = {
    "ENTJ": {
        description: "ENTJ（指挥官型）通常具有强大的领导能力和决策能力。他们自信且有远见，能够清晰地规划未来方向，带领团队朝着目标前进。在面对复杂问题时，他们善于分析和解决，凭借敏锐的洞察力和逻辑思维，迅速找到关键所在。他们注重效率，追求卓越，对自己和他人都有较高的要求。在社交中，他们表现得热情且有感染力，能够激发他人的积极性。",
        characteristics: "特性：领导能力强、决策果断、有远见、注重效率"
    },
    "INTJ": {
        description: "INTJ（建筑师型）是富有创造性和战略性思维的个体。他们善于独立思考，对复杂的理论和概念有深入的理解。他们不满足于表面的现象，喜欢探索事物的本质和内在规律。在工作中，他们目标明确，能够制定出详细且可行的计划。他们冷静理智，面对困难和挑战时，能保持镇定，有条不紊地解决问题。",
        characteristics: "特性：独立思考、富有创造力、战略思维、冷静理智"
    },
    "ENTP": {
        description: "ENTP（辩论家型）充满好奇心和创新精神。他们思维敏捷，口才出众，喜欢与人辩论和探讨各种观点。他们不喜欢遵循传统的规则和模式，热衷于挑战权威和常规。在社交场合中，他们风趣幽默，能够吸引他人的注意力。他们善于发现问题的不同方面，提出新颖的解决方案。",
        characteristics: "特性：好奇心强、创新精神、思维敏捷、口才出众"
    },
    "INTP": {
        description: "INTP（逻辑学家型）对知识有着强烈的渴望，喜欢深入研究各种领域。他们擅长分析和推理，能够构建复杂的理论模型。他们追求真理，不轻易接受现成的结论，而是通过自己的思考和验证来判断。他们性格内向，喜欢独处，在自己的世界里探索知识的奥秘。",
        characteristics: "特性：热爱知识、分析推理能力强、追求真理、性格内向"
    },
    "ENFJ": {
        description: "ENFJ（主人公型）具有强大的人际交往能力和同理心。他们善于理解他人的需求和感受，能够有效地激励和引导他人。他们有着明确的价值观和目标，致力于为他人和社会做出贡献。在团队中，他们是优秀的组织者和协调者，能够营造积极和谐的氛围。",
        characteristics: "特性：人际交往能力强、同理心强、有领导力、有社会责任感"
    },
    "INFJ": {
        description: "INFJ（提倡者型）富有洞察力和同情心。他们能够深刻理解他人的内心世界，善于发现他人潜在的需求。他们有着自己独特的价值观和信仰，并且会坚定地追求。他们不喜欢张扬，更喜欢在幕后默默地为他人付出。他们具有创造力，能够提出富有建设性的想法。",
        characteristics: "特性：洞察力强、同情心强、有创造力、有坚定信仰"
    },
    "ENFP": {
        description: "ENFP（竞选者型）是热情洋溢、充满活力的人。他们对生活充满热爱，喜欢尝试新的事物和体验。他们具有丰富的想象力和创造力，能够给周围的人带来惊喜和启发。他们善于与人交往，能够建立广泛的人际关系。他们乐观积极，面对困难时总能保持乐观的态度。",
        characteristics: "特性：热情洋溢、充满活力、想象力丰富、乐观积极"
    },
    "INFP": {
        description: "INFP（调停者型）内心世界丰富而敏感。他们善良、有同情心，对他人的痛苦感同身受。他们追求内心的和谐与美好，有着自己独特的审美和价值观。他们富有创造力，喜欢通过艺术、文学等方式表达自己的情感。他们不喜欢冲突，更愿意通过和平的方式解决问题。",
        characteristics: "特性：内心丰富、善良有同情心、富有创造力、爱好和平"
    },
    "ESTJ": {
        description: "ESTJ（总经理型）注重实际和秩序。他们有很强的组织能力和管理能力，能够有效地安排工作和资源。他们尊重传统和规则，认为遵守规则是保证效率和质量的关键。在团队中，他们是可靠的领导者，能够带领团队完成任务。他们直言不讳，对事情有着明确的判断和看法。",
        characteristics: "特性：注重实际、组织能力强、尊重规则、直言不讳"
    },
    "ISTJ": {
        description: "ISTJ（物流师型）是严谨、负责的人。他们做事认真细致，注重细节，能够确保任务的准确完成。他们遵守承诺，值得信赖，是团队中的稳定力量。他们喜欢按照既定的计划和流程工作，不喜欢变化和不确定性。他们对自己和他人都有严格的要求，追求完美。",
        characteristics: "特性：严谨负责、注重细节、遵守承诺、追求完美"
    },
    "ESTP": {
        description: "ESTP（企业家型）是行动派和冒险家。他们喜欢挑战和刺激，勇于尝试新的事物。他们具有很强的适应能力，能够在不同的环境中迅速找到机会。他们善于与人沟通和合作，能够在社交场合中如鱼得水。他们注重实际效果，不喜欢空谈理论。",
        characteristics: "特性：行动派、冒险家、适应能力强、注重实际"
    },
    "ISTP": {
        description: "ISTP（鉴赏家型）冷静、理智，对机械和技术有着浓厚的兴趣。他们动手能力强，能够快速掌握新的技能和知识。他们喜欢探索和解决实际问题，通过实践来验证自己的想法。他们性格独立，不喜欢依赖他人，更愿意自己去尝试和探索。",
        characteristics: "特性：冷静理智、动手能力强、喜欢探索、性格独立"
    },
    "ESFJ": {
        description: "ESFJ（执政官型）是热情好客、乐于助人的人。他们非常重视人际关系，善于照顾他人的感受。他们喜欢组织社交活动，能够让周围的人感到温暖和舒适。他们有很强的责任心，对家庭和工作都尽职尽责。他们注重传统和社会规范，希望自己的行为符合大众的期望。",
        characteristics: "特性：热情好客、乐于助人、有责任心、注重传统"
    },
    "ISFJ": {
        description: "ISFJ（守卫者型）是温柔、体贴的人。他们善良、有耐心，总是默默地为他人付出。他们注重细节，能够关注到他人的需求和感受。他们喜欢稳定和安全的生活，对家庭和朋友非常忠诚。他们遵守规则，是社会秩序的维护者。",
        characteristics: "特性：温柔体贴、善良有耐心、注重细节、忠诚可靠"
    },
    "ESFP": {
        description: "ESFP（表演者型）是天生的表演者和社交达人。他们喜欢成为众人关注的焦点，享受舞台上的感觉。他们热情开朗，能够带动周围的气氛。他们对生活充满热情，喜欢体验各种新鲜事物。他们善于表达自己的情感，能够与他人建立深厚的关系。",
        characteristics: "特性：热情开朗、善于社交、喜欢表演、情感丰富"
    },
    "ISFP": {
        description: "ISFP（探险家型）是富有艺术气息和创造力的人。他们对美有着敏锐的感知，喜欢通过艺术和自然来表达自己的情感。他们性格温和，不喜欢与人发生冲突。他们注重个人体验，追求自由和独立。他们喜欢探索新的地方和文化，丰富自己的人生阅历。",
        characteristics: "特性：富有艺术气息、创造力强、性格温和、追求自由"
    },

};

// 渲染当前问题
function renderCurrentQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = '';

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `<p>${currentQuestionIndex + 1}. ${currentQuestion.question}</p>`;

    currentQuestion.options.forEach(option => {
        const optionLabel = document.createElement('label');
        optionLabel.classList.add('option');
        optionLabel.innerHTML = `
            <input type="radio" name="question" value="${option.value}">
            ${option.label}
        `;
        questionDiv.appendChild(optionLabel);
    });

    questionContainer.appendChild(questionDiv);
    nextBtn.disabled = true;
}

// 检查是否选择了答案
function checkAnswerSelected() {
    const selectedRadio = document.querySelector('input[type="radio"]:checked');
    return selectedRadio !== null;
}

// 监听选项选择事件
questionContainer.addEventListener('change', () => {
    if (checkAnswerSelected()) {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
});

// 处理“确定”按钮点击事件
nextBtn.addEventListener('click', () => {
    const selectedRadio = document.querySelector('input[type="radio"]:checked');
    answers.push(selectedRadio.value);

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        renderCurrentQuestion();
    } else {
        // 计算MBTI类型
        let ECount = 0, ICount = 0, SCount = 0, NCount = 0, TCount = 0, FCount = 0, JCount = 0, PCount = 0;
        answers.forEach(answer => {
            if (answer === 'E') ECount++;
            if (answer === 'I') ICount++;
            if (answer === 'S') SCount++;
            if (answer === 'N') NCount++;
            if (answer === 'T') TCount++;
            if (answer === 'F') FCount++;
            if (answer === 'J') JCount++;
            if (answer === 'P') PCount++;
        });

        const firstLetter = ECount > ICount ? 'E' : 'I';
        const secondLetter = SCount > NCount ? 'S' : 'N';
        const thirdLetter = TCount > FCount ? 'T' : 'F';
        const fourthLetter = JCount > PCount ? 'J' : 'P';

        const mbtiType = `${firstLetter}${secondLetter}${thirdLetter}${fourthLetter}`;

        // 显示结果
        const mbtiInfo = mbtiDescriptions[mbtiType];
        resultText.innerHTML = `${mbtiType}（${mbtiInfo? mbtiInfo.description : '暂无描述'}）<br>${mbtiInfo? mbtiInfo.characteristics : '暂无特点信息'}`;
        resultContainer.style.display = 'block';
        nextBtn.style.display = 'none';
        questionContainer.style.display = 'none';
    }
});

// 初始化页面
renderCurrentQuestion();