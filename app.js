// i18n translations
const translations = {
    'zh-tw': {
        title: 'DSE Flashcards',
        subtitle: ' ',
        back: '返回',
        previous: '上一張',
        next: '下一張',
        go: '前往',
        jumpTo: '跳轉至',
        flipHint: ' ',
        of: '/',
        versionLog: '版本日誌',
        subject: '科目',
        allSubjects: '所有科目',
        unspecified: '未分類'
    },
    'en': {
        title: 'DSE Flashcards',
        subtitle: ' ',
        back: 'Back',
        previous: 'Previous',
        next: 'Next',
        go: 'Go',
        jumpTo: 'Jump to ',
        flipHint: ' ',
        of: '/',
        versionLog: 'Version Log',
        subject: 'Subject',
        allSubjects: 'All Subjects',
        unspecified: 'Unspecified'
    }
};

const csvData = `中國語文|10.3 《青玉案·元夕》：字詞|4|青玉案'·元夕|詞牌；青玉所製的用來放置食物的短足托盤
中國語文|10.3 《青玉案·元夕》：字詞||東風'夜放花千樹|春風
中國語文|10.3 《青玉案·元夕》：字詞|7|更吹落、'星如雨'|煙火/花燈如雨般落下
中國語文|10.3 《青玉案·元夕》：字詞||寶馬'雕車香滿路|名貴的駿馬
中國語文|10.3 《青玉案·元夕》：字詞||寶馬'雕車'香滿路|裝飾華麗的車
中國語文|10.3 《青玉案·元夕》：字詞|7|鳳簫聲'動，玉壺光轉|樂聲四處繚繞
中國語文|10.3 《青玉案·元夕》：字詞|7|鳳簫聲動，'玉壺'光轉|喻明月
中國語文|10.3 《青玉案·元夕》：字詞|7|鳳簫聲動，玉壺'光轉'|（月光）照射的位置轉變，意指時間推移
中國語文|10.3 《青玉案·元夕》：字詞||一夜'魚龍舞'|舞動魚形龍形的彩燈
中國語文|10.3 《青玉案·元夕》：字詞||蛾兒雪柳黃金縷|描寫路上的女子穿戴着各種頭飾；縷：泛指線狀物
中國語文|10.3 《青玉案·元夕》：字詞||笑語'盈盈暗香去|有説有笑
中國語文|10.3 《青玉案·元夕》：字詞|4|笑語'盈盈'暗香去|儀態美好的樣子
中國語文|10.3 《青玉案·元夕》：字詞|4|眾裏尋他千百'度'|次/回
中國語文|10.3 《青玉案·元夕》：字詞||驀然'回首|突然
中國語文|10.3 《青玉案·元夕》：字詞||那人卻在、燈火'闌珊'處|暗淡/稀疏
中國語文|11 《逍遙遊》：字詞||*惠子*謂莊子曰|惠施，「名家」的重要人物，主張「泛愛萬物，天地一體」
中國語文|11 《逍遙遊》：字詞||魏王*貽*我大瓠之種，<br>我樹之成而實五石|贈送
中國語文|11 《逍遙遊》：字詞||魏王貽我大*瓠*之種，<br>我樹之成而實五石|葫蘆
中國語文|11 《逍遙遊》：字詞||魏王貽我大瓠之*種*，<br>我樹之成而實五石|種子
中國語文|11 《逍遙遊》：字詞|4|以盛水漿，<br>其*堅*不能自舉也|硬度
中國語文|11 《逍遙遊》：字詞|7|以盛水漿，<br>其堅不能自*舉*也|拿起
中國語文|11 《逍遙遊》：字詞||*剖*之以為瓢|破開
中國語文|11 《逍遙遊》：字詞||剖之以為*瓢*|用以舀水或盛酒的器具
中國語文|11 《逍遙遊》：字詞|7|則*瓠落*無所容|大而空廓的樣子
中國語文|11 《逍遙遊》：字詞|7|非不*呺然*大也|虛空而巨大的樣子
中國語文|11 《逍遙遊》：字詞|4|吾為其無用而*掊*之|擊破
中國語文|11 《逍遙遊》：字詞||莊子曰：「夫子固*拙於*用大矣！|不善於
中國語文|11 《逍遙遊》：字詞||宋人有善為不*龜手*之藥者|皮膚受凍裂開
中國語文|11 《逍遙遊》：字詞||世世以*洴澼*絖為事|漂洗
中國語文|11 《逍遙遊》：字詞||世世以洴澼*絖*為事|棉絮
中國語文|11 《逍遙遊》：字詞||客聞之，請買其方百金。<br>聚族而謀曰：<br>『我世世為洴澼絖，不過數金；<br>今一朝而*鬻*技百金，請與之。』|賣
中國語文|11 《逍遙遊》：字詞||客得之，<br>以*説*吳王|遊説
中國語文|11 《逍遙遊》：字詞||*越有難*，<br>吳王使之將|越國入侵
中國語文|11 《逍遙遊》：字詞|7|越有難，<br>吳王使之*將*|領兵
中國語文|11 《逍遙遊》：字詞||冬與越人水戰，<br>大敗越人，<br>*裂地*而封之|割出一塊土地
中國語文|11 《逍遙遊》：字詞||能不龜手*一*也；<br>或以封，<br>或不免於洴澼絖，<br>則所用之異也|同樣、同一
中國語文|11 《逍遙遊》：字詞||今子有五石之瓠，<br>何不慮以為大*樽*而浮於江湖，<br>而憂其瓠落無所容？|腰舟
中國語文|11 《逍遙遊》：字詞|4|則夫子猶有*蓬*之心也夫！|一種卷曲不直的草，指茅塞不通
中國語文|11 《逍遙遊》：字詞||惠子謂莊子曰：<br>「吾有大樹，<br>人謂之*樗*|落葉喬木，木材皮粗質劣
中國語文|11 《逍遙遊》：字詞|7|其大本擁腫而不*中*繩墨|符合
中國語文|11 《逍遙遊》：字詞||其大本擁腫而不中*繩墨*|木匠畫直線的工具
中國語文|11 《逍遙遊》：字詞||其小枝*卷曲*而不中規矩|彎彎曲曲
中國語文|11 《逍遙遊》：字詞||其小枝卷曲而不中*規矩*|畫圓畫方的工具
中國語文|11 《逍遙遊》：字詞|4|立之*塗*，匠者不顧|「途」，道路
中國語文|11 《逍遙遊》：字詞|4|眾所同*去*也|離棄
中國語文|11 《逍遙遊》：字詞||子獨不見狸*狌*乎？|黄鼠狼
中國語文|11 《逍遙遊》：字詞|7|卑身而伏，<br>以候*敖*者|出遊/閒遊
中國語文|11 《逍遙遊》：字詞||東西跳*梁*，<br>不辟高下|跳躍
中國語文|11 《逍遙遊》：字詞||中於*機辟*，<br>死於罔罟|捕捉鳥獸的工具
中國語文|11 《逍遙遊》：字詞||中於機辟，<br>死於*罔罟*|漁獵的網具
中國語文|11 《逍遙遊》：字詞|4|今夫斄牛，<br>其大若垂天之雲；<br>此能為大矣，<br>而不能*執*鼠|捕捉
中國語文|11 《逍遙遊》：字詞||今子有大樹，<br>患其無用，<br>何不樹之於*無何有*之鄉|甚麼都沒有
中國語文|11 《逍遙遊》：字詞||今子有大樹，<br>患其無用，<br>何不樹之於無何有之*鄉*|處所、地方
中國語文|11 《逍遙遊》：字詞||*廣莫*之野|遼闊空曠
中國語文|11 《逍遙遊》：字詞|4|*彷徨*乎無為其側|縱任不拘
中國語文|11 《逍遙遊》：字詞|4|*逍遙*乎寢卧其下|優游自在
中國語文|11 《逍遙遊》：字詞|4|不*夭*斤斧，<br>物無害者|摧折
中國語文|11 《逍遙遊》：字詞|4|*安*所困苦哉？|又有甚麼`;

const versionData = `
2.1.0|2026-02-05|Added entries in 《逍遙遊》：字詞.
2.0.0|2026-02-04|Introduced subject selector. Automatically uses Chinese UI for "中國語文", otherwise English is applied. Removed entries in 《青玉案·元夕》：字詞.
1.0.0|2026-02-02|Initial version, contained《青玉案·元夕》：字詞.
`;

// Global state
let currentLanguage = 'en';
let flashcards = [];
let chapters = [];
let selectedSubject = 'All'; // Currently selected subject
let currentChapterIndex = -1;
let currentCardIndex = 0;
let currentChapterCards = [];
let chapterDifficulties = {}; // Map of chapter -> Set of difficulties
let selectedDifficulties = {}; // Map of chapter -> Set of selected difficulties

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    setupLanguageButtons();
    loadFlashcards();
    setupSubjectSelector();
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
    
    // Set default language button as active (only if buttons exist)
    const defaultBtn = document.querySelector(`[data-lang="zh-tw"]`);
    if (defaultBtn) {
        defaultBtn.classList.add('active');
    }
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
        
        const hasChinese = flashcards.some(card => card.subject === '中國語文');
        currentLanguage = hasChinese ? 'zh-tw' : 'en';
        
        renderChapterList();
    } catch (error) {
        console.error('Error parsing flashcards:', error);
        alert('Failed to parse flashcard data: ' + error.message);
    }
}

// Get unique subjects from flashcards
function getUniqueSubjects() {
    const subjectSet = new Set(flashcards.map(card => card.subject));
    return ['All', ...Array.from(subjectSet).sort()];
}

// Get translated subject name
function getTranslatedSubject(subject) {
    if (subject === 'Unspecified') {
        return translations[currentLanguage].unspecified;
    }
    return subject;
}

// Setup Subject Selector
function setupSubjectSelector() {
    const selector = document.getElementById('subjectSelector');
    if (!selector) return;
    
    selector.innerHTML = '';
    const subjects = getUniqueSubjects();
    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        if (subject === 'All') {
            option.textContent = translations[currentLanguage].allSubjects;
        } else {
            option.textContent = getTranslatedSubject(subject);
        }
        selector.appendChild(option);
    });
    
    selector.addEventListener('change', (e) => {
        selectedSubject = e.target.value;
        // Switch language based on subject
        if (selectedSubject === '中國語文') {
            currentLanguage = 'zh-tw';
        } else {
            currentLanguage = 'en';
        }
        updateLanguage();
        renderChapterList();
    });
}

function parseFlashcards(csvText) {
    const lines = csvText.trim().split('\n');
    flashcards = [];
    chapters = [];
    chapterDifficulties = {};
    const chapterMap = {};
    const subjectSet = new Set();

    lines.forEach(line => {
        const parts = line.split('|');
        if (parts.length >= 5) {
            const subject = parts[0].trim() || 'Unspecified';
            const chapter = parts[1].trim();
            const difficulty = parseInt(parts[2].trim()) || 1;
            const front = parts[3].trim();
            const back = parts[4].trim();
            
            subjectSet.add(subject);

            if (!chapterMap[chapter]) {
                chapterMap[chapter] = [];
                chapters.push(chapter);
                chapterDifficulties[chapter] = new Set();
            }

            chapterDifficulties[chapter].add(difficulty);

            chapterMap[chapter].push({
                subject,
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
    // Replace *text* with <strong>text</strong>
    text = text.replace(/\*(.+?)\*/g, '<strong>$1</strong>');
    // Support <br> tags for line breaks (handle both encoded and literal forms)
    text = text.replace(/&lt;br&gt;/g, '<br>');
    text = text.replace(/<br>/g, '<br>');
    return text;
}

// Render Chapter List
function renderChapterList() {
    const chapterList = document.getElementById('chapterList');
    chapterList.innerHTML = '';

    chapters.forEach((chapter, index) => {
        // Filter cards by selected subject
        let cardsForChapter = flashcards.filter(card => card.chapter === chapter);
        if (selectedSubject !== 'All') {
            cardsForChapter = cardsForChapter.filter(card => card.subject === selectedSubject);
        }
        const count = cardsForChapter.length;
        
        // Skip if no cards for this subject
        if (count === 0) return;
        
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
        card.chapter === chapter && selectedDifficultiesArray.includes(card.difficulty) &&
        (selectedSubject === 'All' || card.subject === selectedSubject)
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