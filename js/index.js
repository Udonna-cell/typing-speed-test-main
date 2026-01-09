"use strict";
const passages = {
    easy: [
        {
            id: "easy-1",
            text: "The sun rose over the quiet town. Birds sang in the trees as people woke up and started their day. It was going to be a warm and sunny morning.",
        },
        {
            id: "easy-2",
            text: "She walked to the store to buy some bread and milk. The shop was busy but she found what she needed quickly. On her way home, she saw a friend and waved.",
        },
        {
            id: "easy-3",
            text: "The dog ran across the park chasing a ball. He was fast and loved to play. After a while, he got tired and lay down in the cool shade of a big oak tree.",
        },
        {
            id: "easy-4",
            text: "I like to read books before I go to sleep. It helps me relax after a long day. My favorite stories are about adventure and travel to far away places.",
        },
        {
            id: "easy-5",
            text: "The kitchen smelled of fresh coffee and toast. Mom was making breakfast while dad read the news. It was a normal morning in their small but cozy home.",
        },
        {
            id: "easy-6",
            text: "We went to the beach last summer. The water was blue and the sand was warm. We built a big sand castle and looked for shells along the shore.",
        },
        {
            id: "easy-7",
            text: "The cat sat on the window sill watching the rain. Drops fell down the glass one by one. She seemed happy to be inside where it was dry and warm.",
        },
        {
            id: "easy-8",
            text: "My best friend lives next door to me. We play games together after school. Sometimes we ride our bikes around the block or sit and talk for hours.",
        },
        {
            id: "easy-9",
            text: "Spring is my favorite time of year. Flowers start to bloom and the days get longer. I love to see the trees turn green again after the cold winter months.",
        },
        {
            id: "easy-10",
            text: "The music played softly in the room. She closed her eyes and let the sounds wash over her. It was a simple song but it made her feel at peace.",
        },
    ],
    medium: [
        {
            id: "medium-1",
            text: "Learning a new skill takes patience and consistent practice. Whether you're studying a language, picking up an instrument, or mastering a sport, the key is to show up every day. Small improvements compound over time, and before you know it, you'll have made remarkable progress.",
        },
        {
            id: "medium-2",
            text: "The old lighthouse had stood on the cliff for over a century, guiding sailors safely through treacherous waters. Its beam cut through the fog each night, a reassuring presence for those navigating the rocky coastline. Many storms had tested its structure, but it remained steadfast.",
        },
        {
            id: "medium-3",
            text: "Coffee culture has evolved dramatically in recent decades. What was once a simple morning ritual has become an art form, with baristas crafting intricate latte designs and roasters sourcing beans from remote mountain villages. The humble cup of coffee now tells a global story.",
        },
        {
            id: "medium-4",
            text: "Urban gardens are transforming city landscapes around the world. Residents are converting rooftops, balconies, and abandoned lots into thriving green spaces. These initiatives not only provide fresh produce but also create communities, reduce stress, and help combat the urban heat island effect.",
        },
        {
            id: "medium-5",
            text: "The documentary explored how technology shapes our daily habits. From the moment we wake to an alarm on our phones to the podcasts we fall asleep to, digital tools have woven themselves into the fabric of modern life. The question is: are we in control?",
        },
        {
            id: "medium-6",
            text: "Traveling by train offers a unique perspective on the countryside. Unlike flying, which reduces landscapes to abstract patterns, rail journeys let you witness the gradual transitions between regions. You see farms give way to forests, and small towns emerge from rolling hills.",
        },
        {
            id: "medium-7",
            text: "The chef believed that great cooking starts with quality ingredients. She visited local farmers each week, selecting vegetables at their peak ripeness. Her menu changed with the seasons, reflecting what the land offered. Diners appreciated the freshness they could taste in every bite.",
        },
        {
            id: "medium-8",
            text: "Libraries have reinvented themselves for the digital age. Beyond lending books, they now offer coworking spaces, 3D printers, recording studios, and coding workshops. These community hubs have become places where people of all ages come to learn, create, and connect with others.",
        },
        {
            id: "medium-9",
            text: "The architect designed buildings that worked with nature rather than against it. Large windows captured natural light, reducing the need for electricity. Green roofs absorbed rainwater and provided insulation. Her philosophy was simple: sustainable design should be beautiful, functional, and accessible to everyone.",
        },
        {
            id: "medium-10",
            text: "Night markets come alive after sunset in cities across Asia. Vendors set up stalls selling everything from grilled skewers to handmade crafts. The air fills with enticing aromas and the buzz of conversation. Locals and tourists alike wander through, sampling street food and hunting for bargains.",
        },
    ],
    hard: [
        {
            id: "hard-1",
            text: 'The philosopher\'s argument hinged on a seemingly paradoxical assertion: that absolute freedom, pursued without constraint, inevitably undermines itself. "Consider," she wrote, "how the libertarian ideal—when taken to its logical extreme—produces conditions in which the powerful dominate the weak, thereby eliminating freedom for the majority." Her critics dismissed this as sophistry; her supporters hailed it as profound.',
        },
        {
            id: "hard-2",
            text: "Quantum entanglement—Einstein's \"spooky action at a distance\"—continues to perplex physicists and philosophers alike. When two particles become entangled, measuring one instantaneously affects the other, regardless of the distance separating them. This phenomenon doesn't violate relativity (no information travels faster than light), yet it challenges our intuitions about locality, causality, and the nature of reality itself.",
        },
        {
            id: "hard-3",
            text: "The Renaissance polymath's correspondence reveals a mind of extraordinary breadth: in a single week's letters, he discussed astronomical observations, critiqued a colleague's architectural drawings, proposed improvements to the city's sewage system, and composed a sonnet for a patron's daughter. \"Specialization,\" he remarked wryly, \"is for insects.\" His contemporaries found him exhausting; posterity finds him inspirational.",
        },
        {
            id: "hard-4",
            text: 'Algorithmic trading has fundamentally restructured financial markets. High-frequency systems execute thousands of transactions per second, exploiting minute price discrepancies across exchanges. Critics argue this creates systemic fragility—the 2010 "Flash Crash" saw the Dow Jones plummet 1,000 points in minutes before recovering. Proponents counter that algorithms provide liquidity and reduce spreads, ultimately benefiting retail investors.',
        },
        {
            id: "hard-5",
            text: 'The biographer faced an ethical dilemma: her subject\'s private journals—recently discovered in an attic—contained revelations that would overturn his carefully cultivated public image. Should she publish them? "Biography," she mused, "exists in tension between truth-telling and respect for the dead." After months of deliberation, she chose disclosure, reasoning that sanitized history serves no one.',
        },
        {
            id: "hard-6",
            text: "Microplastics have infiltrated virtually every ecosystem on Earth, from the Mariana Trench to Arctic ice cores. These polymer fragments—smaller than 5mm in diameter—originate from degrading consumer products, synthetic textiles, and industrial processes. Researchers have detected them in human blood, placental tissue, and breast milk; their long-term health implications remain disturbingly unclear. The ubiquity of plastic pollution represents an unprecedented experiment on planetary biology.",
        },
        {
            id: "hard-7",
            text: 'The conductor\'s interpretation of Mahler\'s Ninth Symphony emphasized its prophetic qualities—the premonition of catastrophe, the aching nostalgia for a world about to vanish. "Mahler composed this knowing he was dying," she explained in the program notes, "but he also intuited, somehow, that European civilization itself stood at the precipice." The orchestra\'s performance—hushed, trembling, transcendent—left the audience in stunned silence.',
        },
        {
            id: "hard-8",
            text: 'Constitutional scholars continue debating the "counter-majoritarian difficulty": how can judicial review—whereby unelected judges overturn legislation passed by democratic representatives—be reconciled with popular sovereignty? Some argue courts protect minority rights against tyrannical majorities; others contend this reasoning masks ideological preferences in neutral-sounding jurisprudence. The tension, perhaps, is irresolvable; democratic systems must balance competing values rather than optimize for any single principle.',
        },
        {
            id: "hard-9",
            text: 'The novelist\'s prose style—elliptical, fragmented, punctuated by abrupt temporal shifts—reflected her thematic preoccupations: memory\'s unreliability, identity\'s fluidity, the impossibility of objective narration. "Every story," she declared in an interview, "is simultaneously true and false; it reveals by concealing, illuminates by casting shadows." Critics accused her of obscurantism; she responded that clarity itself can be a form of deception.',
        },
        {
            id: "hard-10",
            text: 'The archaeological expedition unearthed artifacts that complicated prevailing theories about Bronze Age trade networks. Obsidian from Anatolia, lapis lazuli from Afghanistan, and amber from the Baltic—all discovered in a single Mycenaean tomb—suggested commercial connections far more extensive than previously hypothesized. "We\'ve underestimated ancient peoples\' navigational capabilities and their appetite for luxury goods," the lead researcher observed. "Globalization isn\'t as modern as we assume."',
        },
    ],
};
const levelBtn = document.querySelector(".control > div:nth-child(1) .display");
let isLevelOptionOpen = false;
let isTypeOptionOpen = false;
const levelBtnOptions = document.querySelector(".control > div:nth-child(1) .options");
const typeBtn = document.querySelector(".control > div:nth-child(2) .display");
const typeBtnOptions = document.querySelector(".control > div:nth-child(2) .options");
const typeOptions = document.querySelectorAll(".control > div:nth-child(2) .options li");
const levelOptions = document.querySelectorAll(".control > div:nth-child(1) .options li");
const startBtn = document.querySelector("button.btn.start");
const pageCover = document.querySelector(".page > .cover");
let isPageCoverOpen = false;
const page = document.querySelector(".page > p");
const pageContain = document.querySelector(".page");
const pageTracker = document.querySelector("#page-tracker");
const Accuracy = document.querySelector(".control-pannel > div:nth-child(2) > p:nth-child(2)");
const WPM = document.querySelector(".control-pannel > div:nth-child(1) > p:nth-child(2)");
const TimeDisplay = document.querySelector(".control-pannel > div:nth-child(3) > p:nth-child(2)");
const controlPannel = document.querySelector(".control-pannel");
const controller = document.querySelector(".control");
const restartBtn = document.querySelector(".btn.restart");
const result = document.querySelector("section.result");
const WPMResult = document.querySelector(".result > .wrapper > div:nth-child(1) > p");
const accuracyResult = document.querySelector(".result > .wrapper > div:nth-child(2) > p");
const wordsResult = document.querySelector(".result > .wrapper > div:nth-child(3) > p");
const state = {
    accuracy: {
        correct: 0,
        wrong: 0,
        total: 0,
    },
    level: {
        index: 0,
        text: "",
        track: {
            currentIndex: 0,
            map: "",
            input: "",
            blueprint: ``,
            done: 0,
            characters: {
                total: 0,
                correct: 0,
                wrong: 0,
            },
        },
    },
    type: {
        index: 0,
    },
    active: "material-symbols-light--task-alt",
    inactive: "line-md--circle",
};
levelBtn.addEventListener("click", () => {
    levelBtnOptions.style.visibility = isLevelOptionOpen ? "hidden" : "visible";
    isLevelOptionOpen = !isLevelOptionOpen;
});
typeBtn.addEventListener("click", () => {
    typeBtnOptions.style.visibility = isTypeOptionOpen ? "hidden" : "visible";
    isTypeOptionOpen = !isTypeOptionOpen;
});
typeOptions.forEach((item, key) => {
    item.addEventListener("click", (e) => {
        const types = ["Timed (60s)", "Passage"];
        typeBtn.innerHTML = `<p>${types[key]}</p>
        <img src="/assets/images/icon-down-arrow.svg" alt="down-arrow" />`;
        if (key != state.type.index) {
            typeOptions[state.type.index].innerHTML = blueprint(types[state.type.index], state.inactive);
            typeOptions[key].innerHTML = blueprint(types[key], state.active);
            state.type.index = key;
        }
        typeBtnOptions.style.visibility = isTypeOptionOpen ? "hidden" : "visible";
        isTypeOptionOpen = !isTypeOptionOpen;
        if (state.type.index == 1) {
            const levels = ["easy", "medium", "hard"];
            TimeDisplay.innerHTML = `${1}/${passages[levels[state.level.index]].length}`;
        }
        else {
            TimeDisplay.innerHTML = `1:00`;
        }
    });
});
TimeDisplay.innerHTML = `1:00`;
state.level.index = 0;
state.level.text =
    passages["easy"][Math.floor(Math.random() * passages["easy"].length)].text;
state.level.track.map = state.level.text.split(" ");
state.accuracy.total = state.level.track.map.length;
Accuracy.innerHTML = `${0}%`;
WPM.innerHTML = `0`;
page.innerHTML = state.level.text;
state.level.track.characters.total =
    state.level.text.length - (state.level.track.map.length - 1);
levelOptions.forEach((item, key) => {
    item.addEventListener("click", () => {
        const levels = ["Easy", "Medium", "Hard"];
        levelBtn.innerHTML = `<p>${levels[key]}</p>
        <img src="/assets/images/icon-down-arrow.svg" alt="down-arrow" />`;
        if (key != state.level.index) {
            // disconnect the previous active
            levelOptions[state.level.index].innerHTML = blueprint(levels[state.level.index], state.inactive);
            state.level.index = key;
            state.level.text =
                passages[levels[key].toLowerCase()][Math.floor(Math.random() * passages[levels[key].toLowerCase()].length)].text;
            state.level.track.map = state.level.text.split(" ");
            state.accuracy.total = state.level.track.map.length;
            page.innerHTML = state.level.text;
            levelOptions[key].innerHTML = blueprint(levels[key], state.active);
        }
        levelBtnOptions.style.visibility = isLevelOptionOpen ? "hidden" : "visible";
        isLevelOptionOpen = !isLevelOptionOpen;
    });
});
let action = {
    m: 1,
    s: 0,
    pg: 1,
};
startBtn.addEventListener("click", () => {
    pageCover.style.visibility = isPageCoverOpen ? "hidden" : "visible";
    isPageCoverOpen = !isPageCoverOpen;
    restartBtn.style.visibility = "visible";
    controller.style.display = "none";
    if (state.type.index == 1) {
    }
    else {
        const start = setInterval(() => {
            if (action.s == 0 && action.m > 0) {
                action.m -= 1;
                action.s = 59;
                pageCover.style.visibility = isPageCoverOpen ? "hidden" : "visible";
                isPageCoverOpen = !isPageCoverOpen;
                pageTracker.focus();
            }
            if (action.s > 0) {
                action.s -= 1;
            }
            TimeDisplay.innerHTML = `${action.m}:${action.s}`;
            if (action.s == 0 && action.m == 0) {
                pageTracker.disabled = "disabled";
                pageContain.style.display = "none";
                controlPannel.style.display = "none";
                result.style.display = "block";
                WPMResult.innerHTML = `${state.accuracy.correct}`;
                accuracyResult.innerHTML = `${Math.floor((state.accuracy.correct / state.accuracy.total) * 100)}`;
                wordsResult.innerHTML = `<span class="correct">${state.level.track.characters.correct}</span>/<span class="wrong">${state.level.track.characters.wrong}</span>`;
                restartBtn.classList.add("again");
                restartBtn.innerHTML = `Go Again <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="#000" d="M1.563 1.281h.949c.246 0 .422.211.422.457l-.07 3.446a8.6 8.6 0 0 1 7.277-3.868c4.816 0 8.718 3.938 8.718 8.72-.035 4.816-3.937 8.683-8.718 8.683a8.86 8.86 0 0 1-5.871-2.215.446.446 0 0 1 0-.633l.703-.703c.14-.14.386-.14.562 0 1.23 1.09 2.813 1.723 4.606 1.723A6.88 6.88 0 0 0 17.03 10c0-3.797-3.093-6.89-6.89-6.89-2.813 0-5.203 1.687-6.293 4.078l4.43-.106c.245 0 .456.176.456.422v.95c0 .245-.21.421-.421.421h-6.75a.406.406 0 0 1-.422-.422v-6.75c0-.21.175-.422.422-.422"/></svg>`;
                clearInterval(start);
            }
        }, 100);
    }
});
page.addEventListener("click", () => {
    pageTracker.focus();
});
pageTracker.addEventListener("input", (ev) => {
    let done = compare(ev.target.value);
    let remove = state.level.track.done;
    let remain = state.level.text.slice(remove);
    page.innerHTML = `${done}<span class="next">${remain[0]}</span>${remain.slice(1)}`;
});
function blueprint(label, icon) {
    return `<span class="${icon}"></span>${label}`;
}
let prevI = "";
function compare(i) {
    if (prevI.length == 0) {
        prevI = i;
    }
    if (prevI.length > i.length) {
        i = prevI;
        pageTracker.value = i;
        //alert(`${prevI[prevI.length -1]} was deleted`)
        return state.level.track.blueprint;
    }
    else {
        prevI = i;
    }
    let { currentIndex, map, input } = state.level.track;
    i = i.length > 1 ? i[i.length - 1] : i;
    if (i == " ") {
        let remain = map[currentIndex].split("").filter((l, c) => {
            if (c > input.length - 1) {
                return l;
            }
        });
        if (remain.length == 0) {
            state.level.track.currentIndex += 1;
            state.level.track.done += 1;
            state.level.track.input = "";
            state.level.track.blueprint = state.level.track.blueprint + " ";
            return state.level.track.blueprint;
        }
        else {
            remain = remain.reduce((a, b) => a + b);
        }
        if (remain.length > 1) {
            state.level.track.currentIndex += 1;
            state.level.track.input = "";
            state.level.track.done += remain.length + 1; // the +1 is the remaining word + space to the next word
            state.level.track.blueprint += `<span class="wrong">${remain.trim()}</span>`;
            state.level.track.blueprint = state.level.track.blueprint + " ";
            updateAccuracy("wrong");
            return state.level.track.blueprint;
        }
    }
    if (input.length + 1 == map[currentIndex].length + 1) {
        state.level.track.currentIndex += 1;
        state.level.track.done += 1;
        state.level.track.input = "";
        //state.level.track.characters.wrong += 1
        state.level.track.blueprint += `<span class="wrong"> </span>`;
        //state.level.track.blueprint = state.level      .track.blueprint + " "
        return state.level.track.blueprint;
    }
    //check for a correct input
    if (i == map[currentIndex][input.length]) {
        state.level.track.done += 1;
        state.level.track.blueprint += `<span class="correct">${i}</span>`;
        state.level.track.characters.correct += 1;
        updateAccuracy("correct");
    }
    else {
        state.level.track.done += 1;
        state.level.track.blueprint += `<span class="wrong">${map[currentIndex][input.length]}</span>`;
        state.level.track.characters.wrong += 1;
        updateAccuracy("wrong");
    }
    state.level.track.input += i;
    return state.level.track.blueprint;
}
// calculate accuracy
let previousWord = -1;
let previousCorrectWord = -1;
function updateAccuracy(indicator) {
    if (indicator == "correct") {
        if (state.level.track.currentIndex != previousCorrectWord) {
            previousCorrectWord = state.level.track.currentIndex;
            state.accuracy.correct += 1;
            WPM.innerHTML = `${state.accuracy.correct}`;
        }
    }
    else {
        if (state.level.track.currentIndex != previousWord) {
            previousWord = state.level.track.currentIndex;
            state.accuracy.wrong += 1;
            if (previousCorrectWord == state.level.track.currentIndex) {
                state.accuracy.correct -= 1;
                WPM.innerHTML = `${state.accuracy.correct}`;
            }
        }
    }
    Accuracy.innerHTML = `${Math.floor((state.accuracy.correct / state.accuracy.total) * 100)}%`;
}
restartBtn.addEventListener("click", () => {
    window.location.reload();
});
