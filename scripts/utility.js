function hideElementById(elementId){
   const element =  document.getElementById(elementId).classList.add('hidden');
}
function showElementById(elementId){
    const hideEle = document.getElementById(elementId).classList.remove('hidden');
}
