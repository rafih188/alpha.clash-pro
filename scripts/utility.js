function hideElementById(elementId) {
    const element = document.getElementById(elementId).classList.add('hidden');
}
function showElementById(elementId) {
    const hideEle = document.getElementById(elementId).classList.remove('hidden');
}

function getARandomAlphabet() {
    // get or create alphabet 
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // get random number 
    const randomNumber = Math.random() * 25;
    const number = Math.round(randomNumber);

    const finalAlphabet = alphabets[number];
    // console.log( number,finalAlphabet);
    return finalAlphabet;
}

function setBackgroundColorById(elementId) {
    const elementt = document.getElementById(elementId);
    const alphabetStyle = elementt.classList.add('bg-orange-400');
    elementt.classList.add('text-black')

}

function removeBackgroundColorById(elementId) {
    const removedBackground = document.getElementById(elementId).classList.remove('bg-orange-400')
}