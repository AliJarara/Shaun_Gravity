const gameData = {
    intro1: {
        en: `I found Shaun alone in our backyard when he was just a puppy. I'd never had a dog before -- I didn't know what I was doing. A friend warned me he'd be better off with his family, but I chose to keep him. First time I ever felt like a dad.<br><br>We didn't have a fence. My parents weren't on board. He barked at the neighbors. I was at university, then work. I didn't know how to read him -- when he wanted to play, when he needed space, when he was just bored and going crazy with energy.<br><br>He started coming and going. Then one day he just... didn't come back. That was two years ago.<br><br>This game is what I wish I knew before I met him. Maybe it'll help you with yours -- or with the next Shaun you find alone in a backyard.`,
        ar: `لقيت شون وحيد في حديقة بيتنا وهو بعده جرو صغير. ما كان عندي أي خبرة مع الكلاب، ما كنت أعرف شو أعمل. حذّرتني صديقة أنه أحسنله تدور ع عيلته، بس اخترت أخليه عندي. أول مرة بحياتي بحس إني صرت أب.<br><br>ما كان عندنا سياج. أهلي ما وافقوا. كان ينبح على الجيران. كنت مشغول بالجامعة وبعدين بالشغل. ما كنت أفهم شو بده -- لما بده يلعب، لما بده يكون لحاله، لما كان بس ينجن من الملل.<br><br>بدأ يطلع ويرجع. وبعدين يوم ما رجع. هاد صار من سنتين.<br><br>هاي الأشياء اللي جاي هي اللي كنت أتمنى أعرفها قبل ما أتعرف عليه. يمكن تفيدك مع كلبك -- أو مع أول شون بتلاقيه لحاله في حديقتك.`
    },
    howToPlay: {
        en: `<h2>How to play</h2><p>Read the situation, choose the right action, learn from Shaun.</p><p>Keep an eye on the "Shaun's Trust" meter at the top. It goes up when you make the right choice, and goes down when you don't. Try to build a strong bond!</p>`,
        ar: `<h2>كيف تنقذ العلاقة</h2><p>اقرأ الموقف، اختر التصرف الصحيح، وتعلم من شون.</p><p>راقب مقياس "ثقة شون" في الأعلى. سيرتفع عندما تتخذ القرار الصحيح، وينخفض عندما تخطئ. حاول بناء رابطة قوية!</p>`
    },
    endingHigh: {
        en: `You would have made Shaun very happy. 🐾`,
        ar: `كنت ستجعل شون سعيداً جداً. 🐾`
    },
    endingMed: {
        en: `You're learning. Shaun would have been patient with you.`,
        ar: `أنت تتعلم. كان شون سيكون صبوراً معك.`
    },
    endingLow: {
        en: `It's okay. You're here, and that already means something.`,
        ar: `لا بأس. وجودك هنا يعني الكثير بالفعل.`
    },
    endingOutro: {
        en: `Shaun is still out there somewhere. If you ever see a dog alone, you know what to do now.`,
        ar: `شون لسا في مكان ما. إذا شفت يوم كلب لحاله، هلا بتعرف شو تعمل.`
    },
    labels: {
        trustEn: `Shaun's Trust`,
        trustAr: `ثقة شون`,
        next: { en: `Next →`, ar: `← التالي` },
        start: { en: `Play →`, ar: `← العب` },
        followInsta: { en: `Follow Shaun on Instagram → @shaun_zasheep`, ar: `@shaun_zasheep ← تابع شون على إنستغرام` },
        langToggleEn: `عربى`, // when in EN, toggle shows Arabic
        langToggleAr: `English` // when in AR, toggle shows English
    }
};

const scenarios = [
    {
        state: 'neutral',
        media: 'StreetDog1.png',
        mediaType: 'image',
        situation: {
            en: `You see a street dog alone. It's looking at you but not moving. What do you do?`,
            ar: `شفت كلب شارع لحاله. عم يتطلع فيك بس ما عم يتحرك. شو بتعمل؟`
        },
        options: [
            { text: { en: `Walk straight toward it making eye contact`, ar: `امشي باتجاهه مباشرة وخليك عم تطلع بعيونه` }, isCorrect: false },
            { text: { en: `Crouch down, look slightly away, let it come to you`, ar: `انزل لمستواه، شيل نظرك عنه شوي، وخليه هو يقرب منك` }, isCorrect: true },
            { text: { en: `Call it loudly and clap your hands`, ar: `نادي عليه بصوت عالي وصفق بايديك` }, isCorrect: false }
        ],
        explanation: {
            en: `Direct eye contact and sudden movement can feel threatening. Let the dog approach on its terms.`,
            ar: `التواصل البصري المباشر والحركة المفاجئة ممكن يحسسو الكلب بالتهديد. خليه هو يقرب منك على راحته.`
        }
    },
    {
        state: 'happy',
        media: 'Sniffing.png',
        mediaType: 'image',
        situation: {
            en: `The dog slowly walks toward you and sniffs your hand. What do you do?`,
            ar: `الكلب عم يمشي ببطء باتجاهك وبشم إيدك. شو بتعمل؟`
        },
        options: [
            { text: { en: `Immediately pet its head`, ar: `امسح على راسه فوراً` }, isCorrect: false },
            { text: { en: `Stay still and let it finish sniffing`, ar: `خليك ثابت وخليه يخلص شم` }, isCorrect: true },
            { text: { en: `Pull your hand back quickly`, ar: `اسحب إيدك بسرعة` }, isCorrect: false }
        ],
        explanation: {
            en: `Sniffing is how dogs gather information. Pulling away creates distrust. Petting the head too fast is overwhelming.`,
            ar: `الشم هو طريقة الكلب ليجمع معلومات. سحب الإيد بخلق عدم ثقة، والمسح على الراس بسرعة ممكن يوتره.`
        }
    },
    {
         state: 'anxious',
         media: 'Yawing.png',
         mediaType: 'image',
         situation: {
             en: `The dog's tail is low and it's yawning repeatedly. What does this mean?`,
             ar: `ذيله نازل لتحت وعم يتثاوب كتير. شو بيعني هاد؟`
         },
         options: [
             { text: { en: `It's tired and wants to sleep`, ar: `تعبان وبده ينام` }, isCorrect: false },
             { text: { en: `It's relaxed and comfortable`, ar: `مرتاح ومسترخي` }, isCorrect: false },
             { text: { en: `It's stressed or uncomfortable`, ar: `متوتر أو مو مرتاح` }, isCorrect: true }
         ],
         explanation: {
             en: `Yawning, lip licking and low tail are calming signals -- the dog is telling you it's anxious.`,
             ar: `التثاؤب، لحس الشفايف، والذيل النازل هي إشارات تهدئة -- الكلب عم يحكيلك إنه متوتر.`
         }
    },
    {
         state: 'anxious',
         media: 'Digging.mp4',
         mediaType: 'video',
         situation: {
             en: `Shaun has been alone at home all day. You come back and he's destroyed a pillow. What does this mean?`,
             ar: `شون كان لحاله بالبيت كل اليوم. رجعت ولقيته ممزع مخدة. شو بيعني هاد؟`
         },
         options: [
             { text: { en: `He's being naughty and needs discipline`, ar: `عم يسيء الأدب ومحتاج عقاب` }, isCorrect: false },
             { text: { en: `He was bored and under-stimulated`, ar: `كان حاسس بالملل وما عنده أي تحفيز` }, isCorrect: true },
             { text: { en: `He doesn't like the pillow`, ar: `ما بيحب المخدة` }, isCorrect: false }
         ],
         explanation: {
             en: `Malinois and Canaan dogs are high-energy and intelligent. Without stimulation they find their own entertainment.`,
             ar: `كلاب المالينوا والكنعان ذكية وطاقتها عالية. وبدون تحفيز، رح يلاقوا طرقهم الخاصة ليتسلوا.`
         }
    },
    {
         state: 'neutral',
         media: 'Nudging.png',
         mediaType: 'image',
         situation: {
             en: `Shaun keeps nudging your hand while you're working. What do you do?`,
             ar: `شون عم يضل يدفش إيدك بأنفه وأنت عم تشتغل. شو بتعمل؟`
         },
         options: [
             { text: { en: `Ignore him so he learns not to interrupt`, ar: `تجاهله لحتى يتعلم ما يقاطعك` }, isCorrect: false },
             { text: { en: `Scold him for being annoying`, ar: `وبخه ليكون مزعج` }, isCorrect: false },
             { text: { en: `Take a 10 minute play break -- he's telling you something`, ar: `خذ استراحة لعب 10 دقايق -- عم يحاول يحكيلك شيء` }, isCorrect: true }
         ],
         explanation: {
             en: `Nudging is communication. A quick play session prevents bigger behavioral problems later.`,
             ar: `الدفع بالأنف هو تواصل. جلسة لعب سريعة بتمنع مشاكل سلوكية أكبر بعدين.`
         }
    },
    {
         state: 'neutral',
         media: 'Calm.png',
         mediaType: 'image',
         situation: {
             en: `You want to pet a street dog that seems calm. Where do you start?`,
             ar: `بدك تمسح على كلب شارع ببين الهادي. من وين بتبلش؟`
         },
         options: [
             { text: { en: `Pat the top of its head`, ar: `امسح فوق راسه` }, isCorrect: false },
             { text: { en: `Scratch under the chin or chest`, ar: `حك تحت الذقن أو الصدر` }, isCorrect: true },
             { text: { en: `Stroke from head to tail immediately`, ar: `امسح من الراس للذيل فوراً` }, isCorrect: false }
         ],
         explanation: {
             en: `Most dogs dislike hands coming from above. The chin and chest are non-threatening spots to start.`,
             ar: `أغلب الكلاب ما بتحب الإيدين اللي بتيجي من فوق. الذقن والصدر أماكن مو مخيفة للبدء.`
         }
    },
    {
         state: 'anxious',
         media: 'Energy.mp4',
         mediaType: 'video',
         situation: {
             en: `Shaun is pacing around the house restlessly. What does he need?`,
             ar: `شون عم يلفلف بالبيت بدون توقف. شو محتاج؟`
         },
         options: [
             { text: { en: `More food`, ar: `أكل زيادة` }, isCorrect: false },
             { text: { en: `To be left alone`, ar: `ينترك لحاله` }, isCorrect: false },
             { text: { en: `Exercise and mental stimulation`, ar: `تمرين وتحفيز ذهني` }, isCorrect: true }
         ],
         explanation: {
             en: `Pacing is a sign of pent-up energy. High-energy breeds need physical activity and mental challenges daily.`,
             ar: `المشي المستمر دليل على طاقة مكبوتة. الكلاب القوية بتحتاج نشاط بدني وتحدي ذهني كل يوم.`
         }
    },
    {
         state: 'anxious',
         media: 'Frozen.png',
         mediaType: 'image',
         situation: {
             en: `A street dog suddenly freezes and stares at you. What do you do?`,
             ar: `كلب شارع فجأة وقف بمكانه وعم يحدق فيك. شو بتعمل؟`
         },
         options: [
             { text: { en: `Stare back to show you're not scared`, ar: `تطلع بعيونه لتفرجيه إنك مو خايف` }, isCorrect: false },
             { text: { en: `Run away quickly`, ar: `اهرب بسرعة` }, isCorrect: false },
             { text: { en: `Stop moving, avoid eye contact, back away slowly`, ar: `وقف مكانك، لا تطلع بعيونه، وارجع لورا ببطء` }, isCorrect: true }
         ],
         explanation: {
             en: `Freezing is a warning sign. Running triggers chase instinct. Slow, calm retreat is the safest response.`,
             ar: `التجمد هو علامة تحذير. الركض بحفز غريزة المطاردة عنده. التراجع الهادي والبطيء هو أأمن رد فعل.`
         }
    },
    {
         state: 'neutral',
         media: 'AloneTime.png',
         mediaType: 'image',
         situation: {
             en: `Shaun seems to want alone time -- he goes to a corner and lies down. What do you do?`,
             ar: `واضح إنه شون بده وقت لحاله -- راح لزاوية ونام. شو بتعمل؟`
         },
         options: [
             { text: { en: `Follow him and try to cuddle`, ar: `اللحقه وحاول احضنه` }, isCorrect: false },
             { text: { en: `Respect his space and let him rest`, ar: `احترم مساحته وخليه يرتاح` }, isCorrect: true },
             { text: { en: `Tempt him with food to come back`, ar: `أغريه بالاكل ليرجع` }, isCorrect: false }
         ],
         explanation: {
             en: `Dogs need downtime just like people. Respecting that builds trust and makes them feel safe.`,
             ar: `الكلاب بتحتاج وقت للراحة مثل البشر. احترام هاد الشيء بيبني ثقة وبخليهم يحسوا بالأمان.`
         }
    },
    {
         state: 'happy',
         media: 'BringHome.png',
         mediaType: 'image',
         situation: {
             en: `You find a street dog that seems friendly. Should you bring it home immediately?`,
             ar: `لقيت كلب شارع مبين عليه لطيف. لازم تاخده على بيتك فوراً؟`
         },
         options: [
             { text: { en: `Yes, if it seems friendly it's safe`, ar: `آه، إذا مبين لطيف يعني آمن` }, isCorrect: false },
             { text: { en: `No -- spend time outside first, observe behavior, consult someone experienced`, ar: `لا -- اقضي وقت معاه برا أول، راقب سلوكه، واستشير شخص خبير` }, isCorrect: true },
             { text: { en: `Only if it follows you home on its own`, ar: `بس إذا هو لحقك على البيت لحاله` }, isCorrect: false }
         ],
         explanation: {
             en: `Rushing a dog into an unfamiliar space causes stress for both of you. Build trust gradually, get advice, and make sure you're actually ready.`,
             ar: `إدخال كلب لمكان غريب بسرعة بسببلكم توتر انتوا الاثنين. ابنوا الثقة شوي شوي، اطلبوا نصيحة، وتأكد إنك فعلاً مستعد.`
         }
    }
];

// Game State
let state = {
    screen: 'intro1', // intro1, intro2 (How to play), scenario, ending
    lang: 'en',
    trust: 50,
    currentScenarioIndex: 0
};

// DOM Elements
const appContainer = document.getElementById('app-container');
const langToggle = document.getElementById('langToggle');
const trustMeterContainer = document.getElementById('trust-meter-container');
const trustLabel = document.getElementById('trust-label');
const trustBarFill = document.getElementById('trust-bar-fill');
const trustValue = document.getElementById('trust-value');

// Initialization
function init() {
    langToggle.addEventListener('click', toggleLanguage);
    render();
}

// Logic
function toggleLanguage() {
    state.lang = state.lang === 'en' ? 'ar' : 'en';
    render();
}

function updateTrust(amount) {
    state.trust += amount;
    if (state.trust < 20) state.trust = 20;
    if (state.trust > 100) state.trust = 100;
    
    trustBarFill.style.width = `${state.trust}%`;
    trustValue.innerText = `${Math.round(state.trust)}%`;
}

function render() {
    // Basic body dir toggle
    if (state.lang === 'ar') {
        document.body.classList.add('rtl');
        langToggle.innerText = gameData.labels.langToggleAr;
        trustLabel.innerText = gameData.labels.trustAr;
    } else {
        document.body.classList.remove('rtl');
        langToggle.innerText = gameData.labels.langToggleEn;
        trustLabel.innerText = gameData.labels.trustEn;
    }
    
    // Header UI
    if (state.screen === 'scenario') {
        trustMeterContainer.classList.remove('hidden');
    } else {
        trustMeterContainer.classList.add('hidden');
    }

    // Prepare container
    appContainer.innerHTML = '';
    
    // Trigger fade animation properly
    const contentBox = document.createElement('div');
    contentBox.className = 'fade-in';
    
    let html = '';
    
    switch (state.screen) {
        case 'intro1':
            contentBox.innerHTML = renderIntro1();
            break;
        case 'intro2':
            contentBox.innerHTML = renderIntro2();
            break;
        case 'scenario':
            contentBox.innerHTML = renderScenario();
            attachScenarioEvents(contentBox);
            break;
        case 'ending':
            contentBox.innerHTML = renderEnding();
            break;
    }
    
    appContainer.appendChild(contentBox);
}

function renderIntro1() {
    return `
        <img src="Puppy.png" alt="Shaun" class="shaun-photo" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'300\\'><rect fill=\\'%23e0d8c8\\' width=\\'400\\' height=\\'300\\'/><text fill=\\'%23666\\' x=\\'50%\\' y=\\'50%\\' font-family=\\'Arial\\' font-size=\\'18\\' text-anchor=\\'middle\\'>[Puppy.png placeholder]</text></svg>';">
        <div class="sketch-container">
            <p>${gameData.intro1[state.lang]}</p>
            <div class="nav-buttons">
                <button class="btn-sketch" onclick="goTo('intro2')">${gameData.labels.next[state.lang]}</button>
            </div>
        </div>
    `;
}

function renderIntro2() {
    return `
        <div class="sketch-container">
            ${gameData.howToPlay[state.lang]}
            <div class="nav-buttons">
                <button class="btn-sketch" onclick="goTo('scenario')">${gameData.labels.start[state.lang]}</button>
            </div>
        </div>
    `;
}

function renderScenario() {
    const s = scenarios[state.currentScenarioIndex];
    
    let mediaHtml = '';
    if (s.media && s.mediaType === 'image') {
       mediaHtml = `<img src="${s.media}" alt="Shaun" class="shaun-photo" onerror="this.style.display='none'">`;
    } else if (s.media && s.mediaType === 'video') {
       mediaHtml = `<video class="dog-video" autoplay loop muted playsinline onerror="this.style.display='none'">
            <source src="${s.media}" type="video/mp4">
        </video>`;
    } else {
       // fallback to state default video
       mediaHtml = `<video class="dog-video" autoplay loop muted playsinline onerror="this.style.display='none'">
            <source src="shaun-${s.state}.mp4" type="video/mp4">
        </video>`;
    }
    
    let html = `
        ${mediaHtml}
        <div class="scenario-text">${state.currentScenarioIndex + 1}. ${s.situation[state.lang]}</div>
        <div id="options-container">
    `;
    
    s.options.forEach((opt, idx) => {
        html += `<button class="btn-sketch option-btn" data-idx="${idx}">${opt.text[state.lang]}</button>`;
    });
    
    html += `</div>
        <div id="feedback-container" class="hidden">
            <div id="explanation" class="explanation-box sketch-border"></div>
            <div class="nav-buttons">
                <button class="btn-sketch" onclick="nextScenario()">${gameData.labels.next[state.lang]}</button>
            </div>
        </div>
    `;
    
    return html;
}

function attachScenarioEvents(container) {
    const buttons = container.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (container.querySelector('.option-btn:disabled')) return; // Already answered
            
            const idx = parseInt(e.target.dataset.idx);
            const s = scenarios[state.currentScenarioIndex];
            const isCorrect = s.options[idx].isCorrect;
            
            // Disable all buttons to prevent multiple guesses
            buttons.forEach(b => b.disabled = true);
            
            if (isCorrect) {
                e.target.classList.add('correct');
                updateTrust(6);
            } else {
                e.target.classList.add('wrong');
                updateTrust(-3);
                // Highlight correct option as well
                buttons.forEach((b, i) => {
                    if (s.options[i].isCorrect) b.classList.add('correct');
                });
            }
            
            const feedback = container.querySelector('#feedback-container');
            const explanation = container.querySelector('#explanation');
            explanation.innerHTML = `<strong>${isCorrect ? '✓' : '❌'}</strong> <br><br>${s.explanation[state.lang]}`;
            feedback.classList.remove('hidden');
        });
    });
}

function nextScenario() {
    state.currentScenarioIndex++;
    if (state.currentScenarioIndex >= scenarios.length) {
        goTo('ending');
    } else {
        render(); // Render next scenario
    }
}

function renderEnding() {
    let msgKey;
    if (state.trust >= 80) msgKey = 'endingHigh';
    else if (state.trust >= 50) msgKey = 'endingMed';
    else msgKey = 'endingLow';
    
    let trustColor = state.trust >= 80 ? '#8fbc8f' : (state.trust >= 50 ? '#d2b48c' : '#cd5c5c');
    
    return `
        <!-- Drop real photo: Ending.png here -->
        <img src="Ending.png" alt="Shaun Ending" class="shaun-photo" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'300\\'><rect fill=\\'%23e0d8c8\\' width=\\'400\\' height=\\'300\\'/><text fill=\\'%23666\\' x=\\'50%\\' y=\\'50%\\' font-family=\\'Arial\\' font-size=\\'18\\' text-anchor=\\'middle\\'>[Ending.png placeholder]</text></svg>';">
        <div class="sketch-container text-center">
            <h2 style="color: ${trustColor}">Score: ${Math.round(state.trust)}%</h2>
            <p class="scenario-text">${gameData[msgKey][state.lang]}</p>
            <p class="explanation-box sketch-border" style="text-align: initial;">${gameData.endingOutro[state.lang]}</p>
            <a href="https://www.instagram.com/shaun_zasheep" target="_blank" class="btn-sketch" style="text-decoration: none; margin-top: 1.5rem; display: inline-block; width: auto;">
                ${gameData.labels.followInsta[state.lang]}
            </a>
        </div>
    `;
}

// Helpers
window.goTo = function(screenName) {
    state.screen = screenName;
    render();
};

window.nextScenario = nextScenario;

// Start game on load
init();
