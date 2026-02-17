// Yo'l Salomatlik Indeksi - Nurlanaliyev Aqjol
// Aniq ballar presentatsiya bo'yicha

// Rang klasslari — tanlangan (active) holat va natija progress bar uchun
const COLOR_CLASSES = {
    blue:   { border: 'border-blue-900',   bg: 'bg-blue-100',   bar: 'bg-blue-400',   ring: 'ring-2 ring-blue-400',   hover: 'hover:border-blue-400',   text: 'text-blue-600',   left: 'border-blue-900' },
    teal:   { border: 'border-teal-900',   bg: 'bg-teal-100',   bar: 'bg-teal-400',   ring: 'ring-2 ring-teal-400',   hover: 'hover:border-teal-400',   text: 'text-teal-600',   left: 'border-teal-900' },
    cyan:   { border: 'border-cyan-900',   bg: 'bg-cyan-100',   bar: 'bg-cyan-400',   ring: 'ring-2 ring-cyan-400',   hover: 'hover:border-cyan-400',   text: 'text-cyan-600',   left: 'border-cyan-900' },
    sky:    { border: 'border-sky-900',    bg: 'bg-sky-100',    bar: 'bg-sky-400',    ring: 'ring-2 ring-sky-400',    hover: 'hover:border-sky-400',    text: 'text-sky-600',   left: 'border-sky-900' },
    amber:  { border: 'border-amber-900',  bg: 'bg-amber-100',  bar: 'bg-amber-400',  ring: 'ring-2 ring-amber-400',  hover: 'hover:border-amber-400',  text: 'text-amber-600',  left: 'border-amber-900' },
    orange: { border: 'border-orange-900', bg: 'bg-orange-100', bar: 'bg-orange-400', ring: 'ring-2 ring-orange-400', hover: 'hover:border-orange-400', text: 'text-orange-600', left: 'border-orange-900' },
    yellow: { border: 'border-yellow-900', bg: 'bg-yellow-100', bar: 'bg-yellow-400', ring: 'ring-2 ring-yellow-400', hover: 'hover:border-yellow-400', text: 'text-yellow-600', left: 'border-yellow-900' },
    lime:   { border: 'border-lime-900',   bg: 'bg-lime-100',   bar: 'bg-lime-400',   ring: 'ring-2 ring-lime-400',   hover: 'hover:border-lime-400',   text: 'text-lime-600',   left: 'border-lime-900' },
    emerald:{ border: 'border-emerald-900',bg: 'bg-emerald-100',bar: 'bg-emerald-400',ring: 'ring-2 ring-emerald-400',hover: 'hover:border-emerald-400',text: 'text-emerald-600',left: 'border-emerald-900' },
    green:  { border: 'border-green-900',  bg: 'bg-green-100',  bar: 'bg-green-400',  ring: 'ring-2 ring-green-400',  hover: 'hover:border-green-400',   text: 'text-green-600',  left: 'border-green-900' },
    indigo: { border: 'border-indigo-900', bg: 'bg-indigo-100', bar: 'bg-indigo-400', ring: 'ring-2 ring-indigo-400', hover: 'hover:border-indigo-400',  text: 'text-indigo-600', left: 'border-indigo-900' },
    violet: { border: 'border-violet-900', bg: 'bg-violet-100', bar: 'bg-violet-400', ring: 'ring-2 ring-violet-400', hover: 'hover:border-violet-400',  text: 'text-violet-600', left: 'border-violet-900' },
    purple: { border: 'border-purple-900',bg: 'bg-purple-100', bar: 'bg-purple-400', ring: 'ring-2 ring-purple-400', hover: 'hover:border-purple-400',  text: 'text-purple-600', left: 'border-purple-900' }
};

const SECTIONS = [
    {
        id: 'classification',
        title: "Yo'lning umumiy tasnifi",
        maxScore: 25,
        type: 'simple',
        color: 'blue',
        options: [
            { value: 'yaxshi', label: 'Yaxshi', score: 25 },
            { value: 'ortacha', label: "O'rtacha", score: 15 },
            { value: 'yomon', label: 'Yomon', score: 5 }
        ]
    },
    {
        id: 'pavement',
        title: "Yo'l qoplamasi holati",
        maxScore: 40,
        type: 'criteria',
        subColors: ['teal', 'cyan', 'sky'],
        criteria: [
            { id: 'yoriqlar', label: 'Yoriqlar', options: [
                { value: 'yaxshi', label: 'Yaxshi', score: 15 },
                { value: 'ortacha', label: "O'rtacha", score: 10 },
                { value: 'kam', label: 'Kam', score: 5 }
            ]},
            { id: 'deformatsiya', label: 'Deformatsiya', options: [
                { value: 'under10', label: '<10 mm', score: 15 },
                { value: '10-20', label: '10-20 mm', score: 10 },
                { value: '20-40', label: '20-40 mm', score: 5 }
            ]},
            { id: 'chuqurlik', label: 'Chuqurliklar', options: [
                { value: 'yaxshi', label: 'Yaxshi', score: 10 },
                { value: 'ortacha', label: "O'rtacha", score: 7 },
                { value: 'yomon', label: 'Yomon', score: 3 }
            ]}
        ]
    },
    {
        id: 'safety',
        title: 'Xavfsizlik elementlari',
        maxScore: 10,
        type: 'criteria',
        subColors: ['amber', 'orange', 'yellow', 'lime', 'emerald'],
        criteria: [
            { id: 'belgilar', label: "Yo'l belgilari", options: [
                { value: 'yaxshi', label: 'Yaxshi ko\'rinadi', score: 2 },
                { value: 'qisman', label: 'Bazilari yo\'q', score: 1 },
                { value: 'yoq', label: "Yo'q", score: 0 }
            ]},
            { id: 'chiziqlar', label: "Yo'l chiziqlari", options: [
                { value: 'yangi', label: 'Yangi chizilgan', score: 2 },
                { value: 'oqartirilgan', label: 'Oqartirilgan', score: 1 },
                { value: 'yoq', label: "Korinmaydi", score: 0 }
            ]},
            { id: 'yoritish', label: 'Yoritish', options: [
                { value: 'xavfsiz', label: 'Kechasi xavfsiz', score: 2 },
                { value: 'qisman', label: 'Bazi joylar qorongu', score: 1 },
                { value: 'yoq', label: "Yoritilmagan", score: 0 }
            ]},
            { id: 'tosiq', label: "Himoya to'siqlari", options: [
                { value: 'butun', label: 'Butun', score: 2 },
                { value: 'qisman', label: 'Qisman', score: 1 },
                { value: 'yoq', label: "Ishlamaydi", score: 0 }
            ]},
            { id: 'piyoda', label: "Piyodalar o'tish joyi", options: [
                { value: 'belgilangan', label: 'Belgilangan', score: 2 },
                { value: 'xira', label: 'Xira', score: 1 },
                { value: 'yoq', label: "Belgilanmagan", score: 0 }
            ]}
        ]
    },
    {
        id: 'drainage',
        title: "Suv o'tkazish va drenaj holati",
        maxScore: 15,
        type: 'criteria',
        subColors: ['sky', 'blue', 'indigo', 'violet', 'purple'],
        criteria: [
            { id: 'ariq', label: 'Ariq holati', options: [
                { value: 'yaxshi', label: 'Toza ishlaydi', score: 3 },
                { value: 'qoniqarli', label: 'Qisman tiqilgan', score: 2 },
                { value: 'yomon', label: "Ishlamaydi", score: 0 }
            ]},
            { id: 'suv_toplanishi', label: 'Suv toplanishi', options: [
                { value: 'yaxshi', label: 'Suv turmaydi', score: 3 },
                { value: 'qoniqarli', label: 'Yomgirdan keyin qoladi', score: 1 },
                { value: 'yomon', label: 'Suv toplanadi', score: 0 }
            ]},
            { id: 'drenaj', label: 'Drenaj quvurlari', options: [
                { value: 'yaxshi', label: 'Ochiq ishlayapti', score: 3 },
                { value: 'qoniqarli', label: 'Tiqilish bor', score: 1 },
                { value: 'yomon', label: 'Buzilgan', score: 0 }
            ]},
            { id: 'nishab', label: "Yo'l nishabligi", options: [
                { value: 'yaxshi', label: 'Suv oqadi', score: 3 },
                { value: 'qoniqarli', label: 'Sekin oqadi', score: 1 },
                { value: 'yomon', label: 'Suv turadi', score: 0 }
            ]},
            { id: 'chiqish', label: 'Suv chiqish tezligi', options: [
                { value: 'yaxshi', label: '5-10 min', score: 3 },
                { value: 'qoniqarli', label: '10-30 min', score: 1 },
                { value: 'yomon', label: '>30 min', score: 0 }
            ]}
        ]
    },
    {
        id: 'profile',
        title: "Yo'l profili va tekisligi",
        maxScore: 10,
        type: 'criteria',
        subColors: ['emerald', 'green', 'teal', 'cyan'],
        criteria: [
            { id: 'tekislik', label: "Yo'l tekisligi", options: [
                { value: 'yaxshi', label: 'Tebranish yo\'q', score: 4 },
                { value: 'ortacha', label: 'Sezilarli', score: 2 },
                { value: 'xavfli', label: 'Noqulay yoki sakraydi', score: 0 }
            ]},
            { id: 'nishab', label: "Yo'n nishabliklar", options: [
                { value: 'yaxshi', label: 'Barqaror', score: 2 },
                { value: 'ortacha', label: 'Eroziya bor', score: 1 },
                { value: 'xavfli', label: 'Opirilgan', score: 0 }
            ]},
            { id: 'chetlar', label: "Yo'l chetlari", options: [
                { value: 'yaxshi', label: 'Mustahkam', score: 2 },
                { value: 'ortacha', label: 'Qisman buzilgan', score: 1 },
                { value: 'xavfli', label: 'Opirilgan', score: 0 }
            ]},
            { id: 'tutashuv', label: 'Qoplama tutashuvi', options: [
                { value: 'yaxshi', label: 'Farq yo\'q', score: 2 },
                { value: 'ortacha', label: 'Balandlik farqi bor', score: 1 },
                { value: 'xavfli', label: 'Keskin uzilish', score: 0 }
            ]}
        ]
    }
];

// Yakuniy xulosa: 80-100 Yaxshi, 60-80 Qoniqarli, 40-60 Ta'mir talab, <40 Shoshilinch ta'mir
const RESULT_RANGES = [
    { min: 0, max: 39, label: 'Shoshilinch ta\'mir talab qilinadi', color: 'red', bg: 'bg-red-500', text: 'text-red-700', border: 'border-red-500' },
    { min: 40, max: 59, label: 'Ta\'mir talab qilinadi', color: 'orange', bg: 'bg-orange-400', text: 'text-orange-800', border: 'border-orange-500' },
    { min: 60, max: 79, label: 'Qoniqarli', color: 'yellow', bg: 'bg-amber-400', text: 'text-amber-800', border: 'border-amber-500' },
    { min: 80, max: 100, label: 'Yaxshi — Yo\'l sog\'lom, harakat xavfsiz', color: 'green', bg: 'bg-emerald-500', text: 'text-emerald-800', border: 'border-emerald-500' }
];

let currentStep = 0;
let answers = {};

const assessmentScreen = document.getElementById('assessment-screen');
const resultsScreen = document.getElementById('results-screen');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const stepsContainer = document.getElementById('steps-container');
const progressBar = document.getElementById('progress-bar');

if (assessmentScreen) {
    document.addEventListener('DOMContentLoaded', () => initAssessment());
}

function initAssessment() {
    currentStep = 0;
    answers = {};
    
    const stepperContainer = document.getElementById('stepper-container');
    stepperContainer.innerHTML = '';
    
    SECTIONS.forEach((section, i) => {
        const step = document.createElement('div');
        step.className = 'step-indicator flex flex-col items-center flex-shrink-0 min-w-[36px] sm:min-w-0';
        step.innerHTML = `
            <div class="step-circle w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium border-2 transition-colors ${i === 0 ? 'bg-primary-600 border-primary-600 text-white' : 'border-slate-300 text-slate-500'}">${i + 1}</div>
            <span class="step-label text-[10px] sm:text-xs mt-1 text-center hidden sm:inline max-w-[70px] leading-tight">${section.title}</span>
        `;
        stepperContainer.appendChild(step);
    });
    
    stepsContainer.innerHTML = '';
    SECTIONS.forEach((section, i) => {
        const stepEl = createStepElement(section, i);
        stepsContainer.appendChild(stepEl);
    });
    
    showStep(0);
    updateNavigation();
}

function createStepElement(section, index) {
    const div = document.createElement('div');
    div.className = `step-content ${index !== 0 ? 'hidden' : ''}`;
    div.dataset.step = index;
    
    if (section.type === 'simple') {
        div.innerHTML = createSimpleSectionHTML(section);
    } else {
        div.innerHTML = createCriteriaSectionHTML(section);
    }
    
    div.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('click', () => {
            const sectionId = card.dataset.section;
            const criterionId = card.dataset.criterion || '';
            const value = card.dataset.value;
            const score = parseInt(card.dataset.score);
            
            if (!answers[sectionId]) answers[sectionId] = {};
            answers[sectionId][criterionId || 'main'] = { value, score };
            
            updateStepScores(section.id);
            updateOptionCards(div, section, criterionId || 'main', value);
        });
    });
    
    return div;
}

function createSimpleSectionHTML(section) {
    const cc = COLOR_CLASSES[section.color] || COLOR_CLASSES.blue;
    return `
        <div class="bg-white rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 border-l-4 ${cc.left}">
            <h3 class="text-lg sm:text-xl font-semibold text-slate-800 mb-1 sm:mb-2">${section.title}</h3>
            <p class="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">Maksimal ${section.maxScore} ball</p>
            <div class="space-y-3 sm:space-y-4">
                ${section.options.map(opt => `
                    <div class="option-card cursor-pointer min-h-[56px] p-3 sm:p-4 rounded-xl border-2 ${getSelectedClass(section.id, 'main', opt.value, section.color)}" 
                         data-section="${section.id}" data-criterion="main" data-value="${opt.value}" data-score="${opt.score}">
                        <div class="flex items-center justify-between">
                            <span class="font-medium text-slate-800">${opt.label}</span>
                            <span class="font-semibold ${cc.text}">${opt.score} ball</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="mt-4 sm:mt-6 p-3 ${cc.bg} rounded-lg text-sm sm:text-base">
                <span class="text-slate-600">Joriy ball: </span>
                <span class="section-score font-bold ${cc.text}">${getSectionScore(section.id)}</span>
                <span class="text-slate-500"> / ${section.maxScore}</span>
            </div>
        </div>
    `;
}

function createCriteriaSectionHTML(section) {
    const subColors = section.subColors || ['teal', 'cyan', 'sky'];
    const subBgClasses = { teal: 'bg-teal-50/40', cyan: 'bg-cyan-50/40', sky: 'bg-sky-50/40', amber: 'bg-amber-50/40', orange: 'bg-orange-50/40', yellow: 'bg-yellow-50/40', lime: 'bg-lime-50/40', emerald: 'bg-emerald-50/40', green: 'bg-green-50/40', indigo: 'bg-indigo-50/40', violet: 'bg-violet-50/40', blue: 'bg-blue-50/40', purple: 'bg-purple-50/40' };
    const subTitleClasses = { teal: 'text-teal-800', cyan: 'text-cyan-800', sky: 'text-sky-800', amber: 'text-amber-800', orange: 'text-orange-800', yellow: 'text-yellow-800', lime: 'text-lime-800', emerald: 'text-emerald-800', green: 'text-green-800', indigo: 'text-indigo-800', violet: 'text-violet-800', blue: 'text-blue-800', purple: 'text-purple-800' };
    return `
        <div class="bg-white rounded-2xl shadow-sm p-4 sm:p-6 md:p-8">
            <h3 class="text-lg sm:text-xl font-semibold text-slate-800 mb-1 sm:mb-2">${section.title}</h3>
            <p class="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">Maksimal ${section.maxScore} ball</p>
            <div class="space-y-6">
                ${section.criteria.map((crit, idx) => {
                    const subC = subColors[idx] || 'teal';
                    const cc = COLOR_CLASSES[subC] || COLOR_CLASSES.teal;
                    const subBg = subBgClasses[subC] || 'bg-teal-50/40';
                    const subTitle = subTitleClasses[subC] || 'text-teal-800';
                    return `
                    <div class="border-l-4 ${cc.left} pl-4 py-2 rounded-r-lg ${subBg}">
                        <h4 class="font-medium ${subTitle} mb-3 text-sm sm:text-base">${crit.label}</h4>
                        <div class="flex flex-wrap gap-2">
                            ${crit.options.map(opt => `
                                <div class="option-card cursor-pointer px-3 py-2 rounded-lg border-2 text-sm ${getSelectedClass(section.id, crit.id, opt.value, subC)}" 
                                     data-section="${section.id}" data-criterion="${crit.id}" data-value="${opt.value}" data-score="${opt.score}">
                                    <span class="font-medium">${opt.label}</span>
                                    <span class="font-semibold ml-1 ${cc.text}">${opt.score}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `}).join('')}
            </div>
            <div class="mt-4 sm:mt-6 p-3 bg-slate-50 rounded-lg text-sm sm:text-base">
                <span class="text-slate-600">Joriy ball: </span>
                <span class="section-score font-bold text-primary-600">${getSectionScore(section.id)}</span>
                <span class="text-slate-500"> / ${section.maxScore}</span>
            </div>
        </div>
    `;
}

function getSelectedClass(sectionId, criterionId, value, colorName) {
    const key = criterionId === 'main' ? 'main' : criterionId;
    const sectionAnswers = answers[sectionId];
    const cc = COLOR_CLASSES[colorName] || COLOR_CLASSES.blue;
    if (!sectionAnswers || !sectionAnswers[key]) return 'border-slate-200 bg-white ' + cc.hover;
    const selected = sectionAnswers[key].value === value;
    return selected ? cc.border + ' ' + cc.bg + ' ' + cc.ring + ' shadow-md selected font-semibold' : 'border-slate-200 bg-white ' + cc.hover;
}

function getSectionScore(sectionId) {
    const section = SECTIONS.find(s => s.id === sectionId);
    if (!section) return 0;
    
    if (section.type === 'simple') {
        const a = answers[sectionId]?.main;
        return a ? a.score : 0;
    }
    
    let total = 0;
    section.criteria.forEach(crit => {
        const a = answers[sectionId]?.[crit.id];
        if (a) total += a.score;
    });
    return total;
}

function updateStepScores(sectionId) {
    const stepIndex = SECTIONS.findIndex(s => s.id === sectionId);
    const stepEl = stepsContainer.querySelector(`[data-step="${stepIndex}"]`);
    if (stepEl) {
        const scoreEl = stepEl.querySelector('.section-score');
        if (scoreEl) scoreEl.textContent = getSectionScore(sectionId);
    }
}

function updateOptionCards(stepEl, section, criterionId, selectedValue) {
    const colorName = section.type === 'simple' ? section.color : (section.subColors || [])[section.criteria?.findIndex(c => c.id === criterionId)] || 'teal';
    const cc = COLOR_CLASSES[colorName] || COLOR_CLASSES.blue;
    const ringClasses = cc.ring.split(' ');
    // Barcha rang klasslarini olib tashlash uchun (COLOR_CLASSES dagi border/bg/ring)
    const allColorClasses = Object.values(COLOR_CLASSES).flatMap(cc => [
        cc.border, cc.bg, cc.ring?.split(' ') || []
    ]).flat().filter(Boolean);
    allColorClasses.push('shadow-md', 'ring-2', 'selected', 'font-semibold');
    
    // Faqat ushbu kriteriyadagi kartochkalarni olish
    const criterionCards = [...stepEl.querySelectorAll('.option-card')].filter(card => {
        const cardCriterion = card.dataset.criterion;
        return (criterionId === 'main' && cardCriterion === 'main') || (cardCriterion === criterionId);
    });
    
    // 1-bosqich: barchasini tanlanmagan holatga o'tkazish (har bir kriteriyada faqat bitta tanlangan bo'lishi uchun)
    criterionCards.forEach(card => {
        allColorClasses.forEach(c => card.classList.remove(c));
        card.classList.add('border-slate-200', 'bg-white');
        card.classList.remove('selected', 'font-semibold');
    });
    
    // 2-bosqich: faqat tanlangan variantni active qilish
    const selectedCard = criterionCards.find(card => card.dataset.value === selectedValue);
    if (selectedCard) {
        selectedCard.classList.add(cc.border, cc.bg, ...ringClasses, 'shadow-md', 'selected', 'font-semibold');
    }
}

function refreshStepSelection(stepEl, section) {
    if (!stepEl || !section) return;
    if (section.type === 'simple') {
        const val = answers[section.id]?.main?.value;
        if (val) updateOptionCards(stepEl, section, 'main', val);
    } else {
        (section.criteria || []).forEach(crit => {
            const val = answers[section.id]?.[crit.id]?.value;
            if (val) updateOptionCards(stepEl, section, crit.id, val);
        });
    }
}

function showStep(index) {
    currentStep = index;
    
    stepsContainer.querySelectorAll('.step-content').forEach((el, i) => {
        el.classList.toggle('hidden', i !== index);
        if (i === index) refreshStepSelection(el, SECTIONS[i]);
    });
    
    const indicators = document.getElementById('stepper-container')?.querySelectorAll('.step-indicator');
    indicators?.forEach((ind, i) => {
        const circle = ind.querySelector('.step-circle');
        circle.className = 'step-circle w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium border-2 transition-colors ';
        if (i < index) {
            circle.classList.add('bg-primary-600', 'border-primary-600', 'text-white');
        } else if (i === index) {
            circle.classList.add('bg-primary-600', 'border-primary-600', 'text-white');
            circle.textContent = i + 1;
        } else {
            circle.classList.add('border-slate-300', 'text-slate-500', 'bg-white');
            circle.textContent = i + 1;
        }
    });
    
    progressBar.style.width = `${((index + 1) / SECTIONS.length) * 100}%`;
    updateNavigation();
}

function updateNavigation() {
    prevBtn.classList.toggle('hidden', currentStep === 0);
    nextBtn.classList.toggle('hidden', currentStep === SECTIONS.length - 1);
    submitBtn.classList.toggle('hidden', currentStep !== SECTIONS.length - 1);
}

prevBtn.addEventListener('click', () => currentStep > 0 && showStep(currentStep - 1));
nextBtn.addEventListener('click', () => currentStep < SECTIONS.length - 1 && showStep(currentStep + 1));
submitBtn.addEventListener('click', () => showResults());

function getTotalScore() {
    return SECTIONS.reduce((sum, s) => sum + getSectionScore(s.id), 0);
}

function showResults() {
    const totalScore = getTotalScore();
    const result = RESULT_RANGES.find(r => totalScore >= r.min && totalScore <= r.max) || RESULT_RANGES[0];
    
    assessmentScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.className = `text-center p-8 rounded-2xl mb-8 ${result.bg} bg-opacity-20 border-2 ${result.border}`;
    
    document.getElementById('total-score').textContent = totalScore;
    document.getElementById('total-score').className = `text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 ${result.text}`;
    document.getElementById('score-label').textContent = result.label;
    document.getElementById('score-label').className = `text-base sm:text-xl font-semibold break-words ${result.text}`;
    document.getElementById('score-description').textContent = totalScore >= 80 ? "Yo'l sog'lom, harakat xavfsiz!" : totalScore >= 60 ? "Yo'l qoniqarli holatda." : totalScore >= 40 ? "Ta'mir talab qilinadi." : "Shoshilinch ta'mir kerak.";
    
    const breakdownColors = ['blue', 'teal', 'amber', 'sky', 'emerald'];
    const breakdownList = document.getElementById('breakdown-list');
    breakdownList.innerHTML = SECTIONS.map((s, i) => {
        const score = getSectionScore(s.id);
        const pct = s.maxScore ? Math.round((score / s.maxScore) * 100) : 0;
        const barColor = s.color || (s.subColors && s.subColors[0]) || breakdownColors[i] || 'blue';
        const cc = COLOR_CLASSES[barColor] || COLOR_CLASSES.blue;
        return `
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-3 border-b border-slate-100 last:border-0">
                <span class="text-slate-700 text-sm sm:text-base flex-1 min-w-0 flex items-center gap-2">
                    <span class="w-1.5 h-6 rounded-full ${cc.bar}"></span>
                    ${s.title}
                </span>
                <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    <div class="flex-1 sm:flex-initial w-16 sm:w-24 h-2 bg-slate-200 rounded-full overflow-hidden min-w-[64px]">
                        <div class="h-full rounded-full transition-all ${cc.bar}" style="width: ${pct}%"></div>
                    </div>
                    <span class="font-semibold text-slate-800 w-14 sm:w-12 text-right text-sm sm:text-base">${score}/${s.maxScore}</span>
                </div>
            </div>
        `;
    }).join('');
}

document.getElementById('save-btn').addEventListener('click', () => {
    const totalScore = getTotalScore();
    const result = RESULT_RANGES.find(r => totalScore >= r.min && totalScore <= r.max);
    const data = {
        date: new Date().toISOString(),
        totalScore,
        label: result?.label || '',
        answers: { ...answers },
        breakdown: SECTIONS.map(s => ({ title: s.title, score: getSectionScore(s.id), max: s.maxScore }))
    };
    const saved = JSON.parse(localStorage.getItem('roadHealthResults') || '[]');
    saved.push(data);
    localStorage.setItem('roadHealthResults', JSON.stringify(saved));
    alert('Natija muvaffaqiyatli saqlandi!');
});

document.getElementById('pdf-btn').addEventListener('click', async () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile && navigator.share) {
        const totalScore = getTotalScore();
        const result = RESULT_RANGES.find(r => totalScore >= r.min && totalScore <= r.max);
        const shareText = `Yo'l Salomatlik Indeksi\n\nUmumiy ball: ${totalScore}/100\n${result?.label || ''}\n\n${SECTIONS.map(s => `${s.title}: ${getSectionScore(s.id)}/${s.maxScore}`).join('\n')}`;
        
        try {
            await navigator.share({
                title: 'Yo\'l Salomatlik Indeksi - Yakuniy xulosa',
                text: shareText
            });
        } catch (err) {
            setTimeout(() => window.print(), 100);
        }
    } else {
        setTimeout(() => window.print(), 50);
    }
});

document.getElementById('new-assessment-btn')?.addEventListener('click', () => {
    resultsScreen.classList.add('hidden');
    assessmentScreen.classList.remove('hidden');
    initAssessment();
});
