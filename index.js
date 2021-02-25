document.addEventListener("DOMContentLoaded", () => {
    const numInput = document.getElementById("dice-number-input")
    const btn = document.getElementById("btn");
    const result = document.querySelector("#dice-para");
    const sumPara = document.querySelector ("#sum-para");
    const history = document.querySelector("#history-title");
    const ul = document.createElement("ul")
    document.body.appendChild(ul)
    const diceArr = [
        { dice: "&#9856", value: 1 },
        { dice: "&#9857", value: 2 },
        { dice: "&#9858", value: 3 },
        { dice: "&#9859", value: 4 },
        { dice: "&#9860", value: 5 },
        { dice: "&#9861", value: 6 },
    ];

    
   
    btn.addEventListener("click", () => {
        roll();   
    });
    let arr = []
    let sum = 0
    let numOfclicks = 0
    
    function roll() {
        sum = 0
        result.innerHTML= ""
        for(let i=0; i < numInput.value; i++) { 
            let randomdice = Math.floor(Math.random() * diceArr.length) ;
            result.innerHTML += diceArr[randomdice].dice
            sum += diceArr[randomdice].value
            arr.push(diceArr[randomdice].dice)
        };
        sumPara.textContent = `sum = ${sum}`
        
        numOfclicks ++
  if(numOfclicks > 0) {
      const li = document.createElement("li");
      ul.appendChild(li)
    li.textContent = `${result.innerHTML} = ${sum}`
  }
};    
})


