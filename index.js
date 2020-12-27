refreshResults = (element) => {
    let brewing = element.closest('.brewing');
    let totalVolume = 0;
    let alcVolume = 0;
    for(let pour of brewing.querySelectorAll('.pour')){
        let localVolume = +pour.querySelector('input[type=number].vol').value || 0;
        let localPerc = +pour.querySelector('input[type=number].alc').value || 0;
        totalVolume += localVolume;
        alcVolume += localPerc*localVolume/100;
    }
    console.log(totalVolume, alcVolume, alcVolume/totalVolume)
    let resultNode = brewing.querySelector('.result')
    totalPerc = 100*alcVolume/totalVolume;
    resultNode.textContent = `Masz ${totalVolume}ml eliksiru o woltażu ${totalPerc.toFixed(2)}%, w tym ${alcVolume}ml czystej mocy.`
}

coupleNumberAndSlider = (element) => {
    let newValue = element.value;
    let numberNode = element.parentNode.querySelector('input[type=number].alc');
    let sliderNode = element.parentNode.querySelector('input[type=range].alc');
    numberNode.value = newValue;
    sliderNode.value = newValue;    
}


addPour = (element) => {
    let brewing = element.closest('.brewing')
    let prototypeElement = brewing.querySelector('.pourPrototype');
    let toInsert = prototypeElement.cloneNode(true);
    toInsert.classList.remove('pourPrototype');
    let insertParent = brewing.querySelector('.inputs');
    insertParent.appendChild(toInsert);
}