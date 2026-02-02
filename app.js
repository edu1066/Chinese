// i18n translations
const translations = {
    'zh-tw': {
        title: 'DSE Flashcards',
        subtitle: '文言文12篇',
        back: '返回',
        previous: '上一張',
        next: '下一張',
        go: '前往',
        jumpTo: '……',
        flipHint: ' ',
        of: '/',
        versionLog: '版本日誌'
    },
    'en': {
        title: 'DSE Flashcards',
        subtitle: 'For the 12 Classical Chinese Texts',
        back: 'Back',
        previous: 'Previous',
        next: 'Next',
        go: 'Go',
        jumpTo: '...',
        flipHint: ' ',
        of: '/',
        versionLog: 'Version Log'
    }
};

const csvData = `
10.3 《青玉案·元夕》：字詞|4|'東風'夜放花千樹|春風
10.3 《青玉案·元夕》：字詞|4|東風夜'放'花千樹|吹開
10.3 《青玉案·元夕》：字詞|7|東風夜放'花千樹'|千萬棵樹上盛放的花
10.3 《青玉案·元夕》：字詞|4|'更'吹落、星如雨|又/再
10.3 《青玉案·元夕》：字詞|7|更吹落、'星'如雨|花燈
10.3 《青玉案·元夕》：字詞|1|'寶'馬雕車香滿路|名貴的
10.3 《青玉案·元夕》：字詞|1|寶馬'雕'車香滿路|雕飾華美的
10.3 《青玉案·元夕》：字詞|1|寶馬雕車香'滿'路|滿溢
10.3 《青玉案·元夕》：字詞|1|鳳簫聲動，玉壺光轉|月光如水般流轉
10.3 《青玉案·元夕》：字詞|1|一夜魚龍舞|月光如水般流轉
`;

const versionData = `
1.0.0|2026-02-02|初版，含《青玉案·元夕》：字詞
`;

// Global state
let currentLanguage = 'zh-tw';
let flashcards = [];
let chapters = [];
let currentChapterIndex = -1;
let currentCardIndex = 0;
let currentChapterCards = [];
let chapterDifficulties = {}; // Map of chapter -> Set of difficulties
let selectedDifficulties = {}; // Map of chapter -> Set of selected difficulties

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    setupLanguageButtons();
    loadFlashcards();
    setupEventListeners();
    updateLanguage();
    setVersionButtonText();
});

// Language Management
function setupLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLanguage) {
                currentLanguage = lang;
                updateLanguage();
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    });
    
    // Set default language button as active
    document.querySelector(`[data-lang="zh-tw"]`).classList.add('active');
}

function updateLanguage() {
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
        const key = el.dataset.i18n;
        el.textContent = translations[currentLanguage][key] || key;
    });

    const i18nPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');
    i18nPlaceholders.forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        el.placeholder = translations[currentLanguage][key] || key;
    });
}

// Load Flashcards from embedded CSV data
function loadFlashcards() {
    try {
        parseFlashcards(csvData);
        renderChapterList();
    } catch (error) {
        console.error('Error parsing flashcards:', error);
        alert('Failed to parse flashcard data: ' + error.message);
    }
}

function parseFlashcards(csvText) {
    const lines = csvText.trim().split('\n');
    flashcards = [];
    chapters = [];
    chapterDifficulties = {};
    const chapterMap = {};

    lines.forEach(line => {
        const parts = line.split('|');
        if (parts.length >= 4) {
            const chapter = parts[0].trim();
            const difficulty = parseInt(parts[1].trim()) || 1;
            const front = parts[2].trim();
            const back = parts[3].trim();

            if (!chapterMap[chapter]) {
                chapterMap[chapter] = [];
                chapters.push(chapter);
                chapterDifficulties[chapter] = new Set();
            }

            chapterDifficulties[chapter].add(difficulty);

            chapterMap[chapter].push({
                chapter,
                difficulty,
                front: parseMarkdown(front),
                back: parseMarkdown(back),
                rawFront: front,
                rawBack: back
            });
        }
    });

    // Initialize selected difficulties to all difficulties for each chapter
    chapters.forEach(chapter => {
        selectedDifficulties[chapter] = new Set(chapterDifficulties[chapter]);
    });

    // Flatten into flashcards array with chapter info
    chapters.forEach(chapter => {
        flashcards.push(...chapterMap[chapter].map(card => ({
            ...card,
            chapterIndex: chapters.indexOf(chapter)
        })));
    });
}

function parseMarkdown(text) {
    // Replace 'text' with <strong>text</strong>
    return text.replace(/'(.+?)'/g, '<strong>$1</strong>');
}

// Render Chapter List
function renderChapterList() {
    const chapterList = document.getElementById('chapterList');
    chapterList.innerHTML = '';

    chapters.forEach((chapter, index) => {
        const count = flashcards.filter(card => card.chapter === chapter).length;
        const difficulties = Array.from(chapterDifficulties[chapter]).sort((a, b) => a - b);
        
        const chapterItemDiv = document.createElement('div');
        chapterItemDiv.className = 'chapter-item';
        
        const btnContainer = document.createElement('div');
        btnContainer.className = 'chapter-btn-container';
        
        const btn = document.createElement('button');
        btn.className = 'chapter-btn';
        btn.innerHTML = `
            <span class="chapter-name">${chapter}</span>
            <span class="chapter-count">${count} ${translations[currentLanguage].of} ${count}</span>
        `;
        btn.addEventListener('click', () => startChapter(index));
        btnContainer.appendChild(btn);
        
        const difficultyContainer = document.createElement('div');
        difficultyContainer.className = 'difficulty-checkboxes';
        
        difficulties.forEach(difficulty => {
            const label = document.createElement('label');
            label.className = 'difficulty-label';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'difficulty-checkbox';
            checkbox.value = difficulty;
            checkbox.checked = selectedDifficulties[chapter].has(difficulty);
            checkbox.dataset.chapter = chapter;
            checkbox.dataset.difficulty = difficulty;
            
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    selectedDifficulties[chapter].add(difficulty);
                } else {
                    selectedDifficulties[chapter].delete(difficulty);
                }
            });
            
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` Lv.${difficulty}`));
            difficultyContainer.appendChild(label);
        });
        
        chapterItemDiv.appendChild(btnContainer);
        chapterItemDiv.appendChild(difficultyContainer);
        chapterList.appendChild(chapterItemDiv);
    });
}

// Start Chapter
function startChapter(index) {
    currentChapterIndex = index;
    currentCardIndex = 0;
    const chapter = chapters[index];
    const selectedDifficultiesArray = Array.from(selectedDifficulties[chapter]);
    currentChapterCards = flashcards.filter(card => 
        card.chapter === chapter && selectedDifficultiesArray.includes(card.difficulty)
    );

    if (currentChapterCards.length === 0) return;

    showFlashcardPage();
    updateFlashcard();
    updateProgress();
}

// Setup Event Listeners
function setupEventListeners() {
    // Back button
    document.getElementById('backBtn').addEventListener('click', () => {
        currentChapterIndex = -1;
        showChapterPage();
    });

    // Previous button
    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            updateFlashcard();
        }
    });

    // Next button
    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentCardIndex < currentChapterCards.length - 1) {
            currentCardIndex++;
            updateFlashcard();
        }
    });

    // Jump to card
    document.getElementById('jumpBtn').addEventListener('click', () => {
        jumpToCard();
    });

    document.getElementById('jumpInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            jumpToCard();
        }
    });

    // Flip card on click
    document.getElementById('flashcard').addEventListener('click', (e) => {
        const flashcard = document.getElementById('flashcard');
        flashcard.classList.toggle('flipped');
    });

    // Version button
    document.getElementById('versionBtn').addEventListener('click', () => {
        showVersionModal();
    });

    document.getElementById('versionCloseBtn').addEventListener('click', () => {
        closeVersionModal();
    });

    document.getElementById('versionModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('versionModal')) {
            closeVersionModal();
        }
    });
}

function jumpToCard() {
    const input = document.getElementById('jumpInput');
    const num = parseInt(input.value);
    
    if (num >= 1 && num <= currentChapterCards.length) {
        currentCardIndex = num - 1;
        updateFlashcard();
        input.value = '';
    } else {
        alert(`${translations[currentLanguage].jumpTo}1-${currentChapterCards.length}`);
    }
}

// Update Flashcard Display
function updateFlashcard() {
    if (currentCardIndex < 0 || currentCardIndex >= currentChapterCards.length) return;

    const card = currentChapterCards[currentCardIndex];
    document.getElementById('flashcardFront').innerHTML = card.front;
    document.getElementById('flashcardBack').innerHTML = card.back;

    // Reset flip state
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.remove('flipped');

    // Update button states
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === currentChapterCards.length - 1;

    updateProgress();
}

function updateProgress() {
    const chapter = chapters[currentChapterIndex];
    document.getElementById('chapterTitle').textContent = chapter;
    document.getElementById('progressText').textContent = 
        `${currentCardIndex + 1} ${translations[currentLanguage].of} ${currentChapterCards.length}`;
}

// Page Navigation
function showChapterPage() {
    document.getElementById('chapterPage').classList.add('active');
    document.getElementById('flashcardPage').classList.remove('active');
}

function showFlashcardPage() {
    document.getElementById('chapterPage').classList.remove('active');
    document.getElementById('flashcardPage').classList.add('active');
}

// Version Log Functions
function showVersionModal() {
    const versionLogContent = document.getElementById('versionLogContent');
    versionLogContent.innerHTML = '';
    
    const versions = versionData.trim().split('\n');
    versions.forEach(version => {
        const parts = version.split('|');
        if (parts.length >= 3) {
            const versionNum = parts[0].trim();
            const date = parts[1].trim();
            const content = parts[2].trim();
            
            const entry = document.createElement('div');
            entry.className = 'version-entry';
            entry.innerHTML = `
                <div class="version-header">
                    <span class="version-number">v${versionNum}</span>
                    <span class="version-date">${date}</span>
                </div>
                <div class="version-content">${content}</div>
            `;
            versionLogContent.appendChild(entry);
        }
    });
    
    document.getElementById('versionModal').classList.add('active');
}

function closeVersionModal() {
    document.getElementById('versionModal').classList.remove('active');
}

function setVersionButtonText() {
    const firstVersion = versionData.trim().split('\n')[0];
    const parts = firstVersion.split('|');
    if (parts.length > 0) {
        const version = parts[0].trim();
        document.getElementById('versionBtn').textContent = `v${version}`;
    }
}