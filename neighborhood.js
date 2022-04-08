const resturauntBtn = document.getElementById('restBtn');
const randBtnSex = document.getElementById('randBtn')

const getRandRest = (event) => {
    const restArr = [`McDonalds`,`Cafe Rio`, `Costa Vida`,`Arby's`, `Cravings Cafe`,'SlapFish', 'JCW', 'Noodles&Co', `Wendy's`, `Raising Cain` ]

    const rand = Math.floor(Math.random() * restArr.length)
    let outputEl = document.createElement('p')
    const outputElpos = document.createElement('div')
    outputEl.textContent = restArr[rand];
    outputElpos.appendChild(outputEl)
    resturauntBtn.insertAdjacentElement('afterend',outputElpos)
   
    
}

resturauntBtn.addEventListener('click', getRandRest)