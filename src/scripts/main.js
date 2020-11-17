import { speak } from "./speak.js";
import { words } from "./words.js";

const appContainer = document.querySelector(`main`);
const ltrContainer = document.querySelector(`.letters`);
const blanksContainer = document.querySelector(`.blanks`);
let currentWord;
const generateLetters = () => {
    const wordNr = Math.floor(Math.random() * words.length);
    currentWord = words[wordNr];
    words.splice(wordNr, 1)
    let shuffledLetters = currentWord.letters
		.map((a) => ({ sort: Math.random(), value: a }))
		.sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)

        shuffledLetters.forEach(letter => {
            const singleLetterContainer = document.createElement('span')
            singleLetterContainer.textContent = letter;
            singleLetterContainer.classList.add(`letter`);
            ltrContainer.appendChild(singleLetterContainer);
        })
}
const generateBlanks = () => {
    currentWord.letters.forEach(letter => {
        blanksContainer.innerHTML += `<span class="blank"></span>`
    })
}

const handleClicks = (e) => {
    if(e.target.classList.contains(`blank`)) {
        console.log(e.target)
    } else if (e.target.classList.contains(`letter`)) {
        const allLtrs = Array.from(ltrContainer.children);
        allLtrs.forEach(ltr => ltr.classList.remove(`highlight`));
        speak(e.target.textContent)
        e.target.classList.add(`highlight`);
    }
}
generateLetters()
generateBlanks()
appContainer.addEventListener('click', handleClicks);


// console.log(`speaking`)

// speak('test');