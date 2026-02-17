// Yo'l Xavfsizligi Indeksi - MVP
// Ballar: Yomon=20%, O'rtacha=50%, Yaxshi=100%

const SECTIONS = [
    { id: 'road-surface', title: 'Yo\'l qoplamasi', maxScore: 40 },
    { id: 'road-markings', title: 'Yo\'l chiziqlari', maxScore: 15 },
    { id: 'visibility', title: 'Ko\'rinish masofasi', maxScore: 15 },
    { id: 'road-signs', title: 'Yo\'l belgilari sifati', maxScore: 10 },
    { id: 'lighting', title: 'Yo\'l yoritilishi', maxScore: 10 },
    { id: 'other-criteria', title: 'Boshqa mezonlar', maxScore: 10 }
];

const SCORE_MAP = {
    'yomon': 0.2,
    'ortacha': 0.5,
    'yaxshi': 1
};

const RESULT_RANGES = [
    { min: 0, max: 40, label: 'Yo\'l holati o\'ta xavfli / Ta\'mirtalab', color: 'red', bg: 'bg-red-500', text: 'text-red-700', border: 'border-red-500' },
    { min: 41, max: 79, label: 'Yo\'l holati qoniqarli / Ehtiyot bo\'ling', color: 'yellow', bg: 'bg-amber-400', text: 'text-amber-800', border: 'border-amber-500' },
    { min: 80, max: 100, label: 'Yo\'l holati a\'lo / Xavfsiz yo\'l', color: 'green', bg: 'bg-emerald-500', text: 'text-emerald-800', border: 'border-emerald-500' }
];

let currentStep = 0;
let answers = {};

// DOM elementlar
const homeScreen = document.getElementById('home-screen');
const assessmentScreen = document.getElementById('assessment-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const stepsContainer = document.getElementById('steps-container');
const progressBar = document.getElementById('progress-bar');

// Boshlash
startBtn.addEventListener('click', () => {
    homeScreen.classList.add('hidden');
    assessmentScreen.classList.remove('hidden');
    initAssessment();
});

// Stepper va bo'limlarni yaratish
function initAssessment() {
    currentStep = 0;
    answers = {};
    
    // Stepper
    const stepperContainer = document.getElementById('stepper-container');
    stepperContainer.innerHTML = '';
    
    SECTIONS.forEach((section, i) => {
        const step = document.createElement('div');
        step.className = 'step-indicator flex flex-col items-center flex-shrink-0 min-w-[36px] sm:min-w-0';
        step.innerHTML = `
            <div class="step-circle w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium border-2 transition-colors ${i === 0 ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 text-slate-500'}">${i + 1}</div>
            <span class="step-label text-[10px] sm:text-xs mt-1 text-center hidden sm:inline max-w-[60px] sm:max-w-[70px] leading-tight">${section.title}</span>
        `;
        stepperContainer.appendChild(step);
    });
    
    // Bo'limlar
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
    
    const options = [
        { value: 'yomon', label: 'Yomon', icon: '⚠️', desc: 'Jiddiy muammolar mavjud' },
        { value: 'ortacha', label: 'O\'rtacha', icon: '➖', desc: 'Qoniqarli, lekin yaxshilash kerak' },
        { value: 'yaxshi', label: 'Yaxshi', icon: '✅', desc: 'Yaxshi holatda' }
    ];
    
    const maxScores = {
        yomon: Math.round(section.maxScore * 0.2),
        ortacha: Math.round(section.maxScore * 0.5),
        yaxshi: section.maxScore
    };
    
    div.innerHTML = `
        <div class="bg-white rounded-2xl shadow-sm p-4 sm:p-6 md:p-8">
            <h3 class="text-lg sm:text-xl font-semibold text-slate-800 mb-1 sm:mb-2">${section.title}</h3>
            <p class="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">Maksimal ${section.maxScore} ball</p>
            <div class="space-y-3 sm:space-y-4">
                ${options.map(opt => `
                    <div class="option-card cursor-pointer min-h-[56px] sm:min-h-[64px] p-3 sm:p-4 rounded-xl border-2 border-slate-200 hover:border-emerald-400 active:border-emerald-500 ${answers[section.id] === opt.value ? 'selected border-emerald-500 bg-emerald-50' : 'bg-white'}" 
                         data-value="${opt.value}" data-section="${section.id}" data-score="${maxScores[opt.value]}">
                        <div class="flex items-center gap-3 sm:gap-4">
                            <span class="text-xl sm:text-2xl flex-shrink-0">${opt.icon}</span>
                            <div class="flex-1 min-w-0">
                                <div class="font-medium text-slate-800 text-sm sm:text-base">${opt.label}</div>
                                <div class="text-xs sm:text-sm text-slate-500 truncate sm:whitespace-normal">${opt.desc} • ${maxScores[opt.value]} ball</div>
                            </div>
                            <span class="current-score text-emerald-600 font-semibold flex-shrink-0 text-sm sm:text-base">${answers[section.id] === opt.value ? maxScores[opt.value] : ''}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="mt-4 sm:mt-6 p-3 bg-slate-50 rounded-lg text-sm sm:text-base">
                <span class="text-slate-600">Joriy ball: </span>
                <span class="section-score font-bold text-emerald-600">${getSectionScore(section.id)}</span>
                <span class="text-slate-500"> / ${section.maxScore}</span>
            </div>
        </div>
    `;
    
    // Option click handlers
    div.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('click', () => {
            const value = card.dataset.value;
            const sectionId = card.dataset.section;
            answers[sectionId] = value;
            updateStepScores(sectionId);
            updateOptionCards(sectionId);
        });
    });
    
    return div;
}

function getSectionScore(sectionId) {
    const section = SECTIONS.find(s => s.id === sectionId);
    if (!section || !answers[sectionId]) return 0;
    const multiplier = SCORE_MAP[answers[sectionId]];
    return Math.round(section.maxScore * multiplier);
}

function updateStepScores(sectionId) {
    const score = getSectionScore(sectionId);
    const stepEl = stepsContainer.querySelector(`[data-step="${SECTIONS.findIndex(s => s.id === sectionId)}"]`);
    if (stepEl) {
        const scoreEl = stepEl.querySelector('.section-score');
        if (scoreEl) scoreEl.textContent = score;
    }
}

function updateOptionCards(sectionId) {
    const stepIndex = SECTIONS.findIndex(s => s.id === sectionId);
    const stepEl = stepsContainer.querySelector(`[data-step="${stepIndex}"]`);
    if (!stepEl) return;
    
    const section = SECTIONS.find(s => s.id === sectionId);
    const maxScores = { yomon: Math.round(section.maxScore * 0.2), ortacha: Math.round(section.maxScore * 0.5), yaxshi: section.maxScore };
    
    stepEl.querySelectorAll('.option-card').forEach(card => {
        const isSelected = answers[sectionId] === card.dataset.value;
        card.classList.toggle('selected', isSelected);
        card.classList.toggle('border-emerald-500', isSelected);
        card.classList.toggle('bg-emerald-50', isSelected);
        const scoreSpan = card.querySelector('.current-score');
        scoreSpan.textContent = isSelected ? maxScores[card.dataset.value] : '';
    });
}

function showStep(index) {
    currentStep = index;
    
    // Step content
    stepsContainer.querySelectorAll('.step-content').forEach((el, i) => {
        el.classList.toggle('hidden', i !== index);
    });
    
    // Stepper indicators
    const indicators = document.getElementById('stepper-container').querySelectorAll('.step-indicator');
    indicators.forEach((ind, i) => {
        const circle = ind.querySelector('.step-circle');
        circle.className = 'step-circle w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors ';
        if (i < index) {
            circle.classList.add('bg-emerald-600', 'border-emerald-600', 'text-white');
            circle.textContent = '✓';
        } else if (i === index) {
            circle.classList.add('bg-emerald-600', 'border-emerald-600', 'text-white');
            circle.textContent = i + 1;
        } else {
            circle.classList.add('border-slate-300', 'text-slate-500', 'bg-white');
            circle.textContent = i + 1;
        }
    });
    
    // Progress
    progressBar.style.width = `${((index + 1) / SECTIONS.length) * 100}%`;
    
    updateNavigation();
}

function updateNavigation() {
    prevBtn.classList.toggle('hidden', currentStep === 0);
    nextBtn.classList.toggle('hidden', currentStep === SECTIONS.length - 1);
    submitBtn.classList.toggle('hidden', currentStep !== SECTIONS.length - 1);
}

prevBtn.addEventListener('click', () => {
    if (currentStep > 0) showStep(currentStep - 1);
});

nextBtn.addEventListener('click', () => {
    if (currentStep < SECTIONS.length - 1) showStep(currentStep + 1);
});

submitBtn.addEventListener('click', () => {
    showResults();
});

function getTotalScore() {
    return SECTIONS.reduce((sum, s) => sum + getSectionScore(s.id), 0);
}

function showResults() {
    const totalScore = getTotalScore();
    const result = RESULT_RANGES.find(r => totalScore >= r.min && totalScore <= r.max) || RESULT_RANGES[0];
    
    assessmentScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    // Score display
    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.className = `text-center p-8 rounded-2xl mb-8 ${result.bg} bg-opacity-20 border-2 ${result.border}`;
    
    document.getElementById('total-score').textContent = totalScore;
    document.getElementById('total-score').className = `text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 ${result.text}`;
    document.getElementById('score-label').textContent = result.label;
    document.getElementById('score-label').className = `text-base sm:text-xl font-semibold break-words ${result.text}`;
    document.getElementById('score-description').textContent = totalScore === 100 ? "Ajoyib! Yo'l juda xavfsiz." : totalScore >= 80 ? "Yo'l yaxshi holatda." : totalScore >= 41 ? "Qo'shimcha ehtiyot talab qilinadi." : "Jiddiy ta\'mir talab qilinadi.";
    
    // Breakdown
    const breakdownList = document.getElementById('breakdown-list');
    breakdownList.innerHTML = SECTIONS.map(s => {
        const score = getSectionScore(s.id);
        const pct = Math.round((score / s.maxScore) * 100);
        return `
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-3 border-b border-slate-100 last:border-0">
                <span class="text-slate-700 text-sm sm:text-base flex-1 min-w-0">${s.title}</span>
                <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    <div class="flex-1 sm:flex-initial w-16 sm:w-24 h-2 bg-slate-200 rounded-full overflow-hidden min-w-[64px]">
                        <div class="h-full bg-emerald-500 rounded-full transition-all" style="width: ${pct}%"></div>
                    </div>
                    <span class="font-semibold text-slate-800 w-14 sm:w-12 text-right text-sm sm:text-base">${score}/${s.maxScore}</span>
                </div>
            </div>
        `;
    }).join('');
}

// LocalStorage saqlash
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
    const saved = JSON.parse(localStorage.getItem('roadSafetyResults') || '[]');
    saved.push(data);
    localStorage.setItem('roadSafetyResults', JSON.stringify(saved));
    alert('Natija muvaffaqiyatli saqlandi!');
});

// PDF chiqarish (print)
document.getElementById('pdf-btn').addEventListener('click', () => {
    window.print();
});

// Yangi baholash
document.getElementById('new-assessment-btn').addEventListener('click', () => {
    resultsScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
});
