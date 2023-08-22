const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const game = document.getElementById("game");
const end = document.getElementById("end");
const menu = document.getElementById("menu");

const settings = document.getElementById("settings");
const settingButton = document.getElementById("settingButton");
const settingScreen = document.getElementById("settingScreen");
const timerSetting = document.getElementById("timerSetting");
const settingTimerDisplay = document.getElementById("settingTimerDisplay");
const infoElement = document.getElementById("info");

const startCountDown = document.getElementById("startCountDown");

const romajiElement = document.getElementById("romaji");

const wordElement = document.getElementById("word");
const enteredElement = document.getElementById("entered");

const scoreElement = document.getElementById("score");
const scoreResultElement = document.getElementById("scoreResult");
const succeededElement = document.getElementById("succeeded");
const timerElement = document.getElementById("timer");
const missElement = document.getElementById("misses");
const rankElement = document.getElementById("rank");

const typeSound = new Audio("./audio/type.mp3");
const correctSound = new Audio("./audio/correct.mp3");
const wrongSound = new Audio("./audio/wrong.mp3");

let words = [
    "ああいえばこういう",
    "あいたくちがふさがらない",
    "あうんのこきゅう",
    "あおなにしお",
    "あげあしをとる",
    "あたまかくしてしりかくさず",
    "あめとむち",
    "いしのうえにもさんねん",
    "いしばしをたたいてわたる",
    "いそがばまわれ",
    "いぬもあるけばぼうにあたる",
    "うまのみみにねんぶつ",
    "うらめにでる",
    "えびでたいをつる",
    "えんのしたのちからもち",
    "おににかなぼう",
    "おにのめにもなみだ",

    "かっぱのかわながれ",
    "かほうはねてまて",
    "かもがねぎをしょってくる",
    "かわいいこにはたびをさせよ",
    "きゅうしにいっしょうをえる",
    "きゅうそねこをかむ",
    "くあればらくあり",
    "くちはわざわいのもと",
    "くにくのさく",
    "くるしいときのかみだのみ",
    "けんかりょうせいばい",
    "こうかいさきにたたず",
    "ごうにいってはごうにしたがえ",
    "こうぼうにもふでのあやまり",

    "さるもきからおちる",
    "したしきなかにもれいぎあり",
    "しっぱいはせいこうのもと",
    "しゅにまじわればあかくなる",
    "しらぬがほとけ",
    "すきこそもののじょうずなれ",
    "すぎたるはなおおよばざるごとし",
    "すずめひゃくまでおどりわすれず",
    "せいてんのへきりき",
    "せにはらはかえられぬ",
    "ぜんはいそげ",
    "せんりのみちもいっぽから",
    "そなえあればうれいなし",

    "たからのもちぐされ",
    "たなからぼたもち",
    "ちりもつもればやまとなる",
    "つきとすっぽん",
    "つりおとしたさかなはおおきい",
    "てつはあついうちにうて",
    "でるくいはうたれる",
    "とうだいもとくらし",
    "とおくのしんるいよりちかくのたにん",
    "ときはかねなり",
    "どろぼうをみてなわをなう",
    "どんぐりのせいくらべ",
    "とんでひにいるなつのむし",

    "ないそではふれぬ",
    "なきっつらにはち",
    "なさけはひとのためならず",
    "ななころびやおき",
    "にかいからめぐすり",
    "にどあることはさんどある",
    "にとをおうものはいっとをもえず",
    "ぬかにくぎ",
    "ぬれてであわ",
    "ねこにかつおぶし",
    "ねこにこばん",
    "ねみみにみず",
    "のうあるたかはつめをかくす",
    "のどもとすぎればあつさをわすれる",

    "はなよりだんご",
    "はやおきはさんもんのとく",
    "ひとのふりみてわがふりなおせ",
    "ひとをのろわばあなふたつ",
    "ひのないところにけむりはたたぬ",
    "ひゃくぶんはいっけんにしかず",
    "ひょうたんからこま",
    "ぶたにしんじゅ",
    "へたなてっぽうもかずうてばあたる",
    "ほとけのかおもさんど",

    "まけるがかち",
    "まごにもいしょう",
    "みいらとりがみいらになる",
    "みつごのたましいひゃくまで",
    "むかしとったきねづか",
    "めはくちほどにものをいう",
    "もちはもちや",

    "やけいしにみず",
    "やすものがいのぜにうしない",
    "やまいはきから",
    "ゆだんたいてき",
    "よくにめがくらむ",

    "らくあればくあり",
    "りょうやくはくちににがし",
    "るいはともをよぶ",
    "れいによってれいのごとし",

    "わたりにふね",
    "わたるせけんにおにはない",
    "わらうかどにはふくきたる",
];
let usedWords = [];
let lastWord = [];

let ranks = {
    0: "ひらがな初心者",
    300: "ひらがな初級者",
    500: "ひらがな中級者",
    700: "ひらがな上級者",
    1000: "ひらがな愛好家",
    1500: "ひらがなのプロ",
    2000: "ひらがなマスター",
    2500: "音速のひらがな",
    3000: "光速のひらがな",
    4000: "究極のひらがな",
    5000: "伝説級のひらがな",
    8000: "聖なるひらがな",
    10000: "神秘的なひらがな",
};
let rank;

let bonus = 1;
let score = 0;
let totalScore = 0;
let succeeded = 0;
let misses = 0;
let timer = 60;
let isEnded = false;
let missed = false;

let isBlinking = false;
let blinked = 0;

settingTimerDisplay.textContent = timer;

game.classList.add("hidden");
settingScreen.classList.add("hidden");
startCountDown.classList.add("hidden");
end.classList.add("hidden");

let waitingTime = 3;
startButton.addEventListener("click", () => {
    
    isEnded = false;
    menu.classList.add("hidden");
    settings.classList.add("hidden");
    startCountDown.classList.remove("hidden");
    startButton.disabled = true;
    startCountDown.textContent = waitingTime;

    const startInterval = setInterval(() => {
        waitingTime--;
        startCountDown.textContent = waitingTime;
        if (waitingTime === 0) {
            clearInterval(startInterval);
            startGame(); 
        }
}, 1000);
})

function startGame() {
    startCountDown.classList.add("hidden");
    game.classList.remove("hidden");
    console.log(words.length);

    updateTimer();

    let currentWords = wordElement.textContent.split('');
    let enteredWords = [];
    let currentKey;
    let currentText;

    const setWords = () => {
        currentKey = Math.floor(Math.random() * words.length);
        currentText = words[currentKey];

        if (lastWord !== currentText) {
            usedWords.push(currentText);
            words.splice(currentKey, 1);
            lastWord = currentText;

            enteredElement.textContent = "";
            romajiElement.textContent = wanakana.toRomaji(currentText);
            wordElement.textContent = currentText;

            enteredWords = [];
            currentWords = wanakana.toRomaji(currentText).split('');
        } else {
            return setWords();
        }
    };
    setWords();

    document.addEventListener("keydown", (e) => {
        if (!isEnded) {
            
            if (currentWords[0] === e.key) {
                succeeded++;
                typeSound.playbackRate = 1.5;
                typeSound.currentTime = 0.2;
                typeSound.play();

                enteredWords.push(currentWords[0]);
                currentWords.shift();            
                
                enteredElement.textContent = enteredWords.join('');
                romajiElement.textContent = currentWords.join('');
            
                if (currentWords.length <= 0) {
                    updateScore();
                    correctSound.playbackRate = 4;
                    correctSound.currentTime = 0;   
                    correctSound.play();

                    if (!missed) {
                        timer += 3;
                        
                        const blinking = setInterval(() => {
                            if (isBlinking) {
                                timerElement.style.color = "white";
                            } else {
                                timerElement.style.color = "greenyellow";
                            }
                            
                            if (blinked === 3) {
                                clearInterval(blinking);
                                blinked = 0;
                                isBlinking = false;
                            } else {
                                blinked++
                                isBlinking = !isBlinking;
                            }
                        }, 300);

                        missed = false;
                    } else {
                        missed = false;
                    }

                    if (words.length <= 0) {
                        words.push(...usedWords);
                        usedWords = [];
                        setWords();
                    } else {
                        setWords();
                    }
                }
            } else {
                missed = true;
                misses++;
                wrongSound.playbackRate = 1.5;
                wrongSound.currentTime = 0.1;
                wrongSound.play();
            }
        }
    });

    function updateScore() {
        score += Math.floor(currentText.length * 10) / bonus;
        scoreElement.textContent = score;
    }

    const countdown = setInterval(() => {
        timer--;
        updateTimer();

        if (timer <= 0) {
            clearInterval(countdown);
           stopGame();
        }
    }, 1000);
}

settingButton.addEventListener("click", () => {
    settingScreen.classList.toggle("hidden");
})

timerSetting.addEventListener("click", () => {
    if (bonus === 1) {
        bonus *= 0.5;
        infoElement.textContent = "制限時間と称号の基準が1/2になる代わりにスコアが2倍になる"
    } else {
        bonus *= 2;
        timer += 30;
        infoElement.textContent = "デフォルト設定"
    }
    timer *= bonus;
    console.log(bonus)
    settingTimerDisplay.textContent = timer;
})

restartButton.addEventListener("click", () => {
    location.reload();
})

function getRank() {
    totalScore = score * bonus - misses * 10;
    console.log(totalScore);
    const closestScore = Object.keys(ranks).reduce((a, b) => Math.abs(b - totalScore) < Math.abs(a - totalScore) ? b : a);
    rank = ranks[closestScore];
    rankElement.textContent = rank;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateTimer() {
    if (timer <= 0) {
        timer = 0;
    } else {
        timerElement.textContent = timer;
    }
}

function stopGame() {
    isEnded = true;
    timer = 0;
    game.classList.add("hidden");
    end.classList.remove("hidden");
    scoreResultElement.textContent = score;
    succeededElement.textContent = succeeded;
    missElement.textContent = misses;
    
    getRank();
}