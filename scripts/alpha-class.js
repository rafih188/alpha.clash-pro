// function play(){
// const homeSection = document.getElementById('home-screen');
// const addClassList = homeSection.classList.add('hidden');
// const removeClassList= document.getElementById('playground-screen').classList.remove('hidden');
// }
function continueGame(){
const Alphabet = getARandomAlphabet();

const currentAlphabet = document.getElementById('current-alphabet');
const showAlphabet = currentAlphabet.innerText = Alphabet;
setBackgroundColorById(Alphabet)

console.log( "your random alphabet :",Alphabet);
}

function play( elementId){
    hideElementById('home-screen')
    showElementById('playground-screen')
    continueGame();
}