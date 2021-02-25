document.addEventListener("DOMContentLoaded", () => {
    const numInput = document.getElementById("dice-number-input")
    const btn = document.getElementById("btn");
    const result = document.querySelector("#dice-para");
    const sumPara = document.queryselector ("#sum-para");
    const history = document.querySelector("#history-title");
    const numOfdice = Number(document.querySelector("#"))
    //let newArr= []
    
    // let newArr = [];
    // let currentsum = 0
    
    
    let numOfclicks = 0;
    btn.addEventListener("click", (event) => {
        const diceArr = [
            { dice: "&#9856", value: 1 },
            { dice: "&#9857", value: 2 },
            { dice: "&#9858", value: 3 },
            { dice: "&#9859", value: 4 },
            { dice: "&#9860", value: 5 },
            { dice: "&#9861", value: 6 },
        ];
        numOfclicks ++
         event.preventDefault();
        roll();   
    });
    let sum = 0
    function roll() {
        // result.innerHTML = ""
        let sum = 0
        result.innerHTML= ''
        for(let i=0; i < numInput.value; i++) { 
       let randomdice = Math.floor(Math.random() * diceArr.length) ;
       result.innerHTML += diceArr[randomdice].dice
       sum += diceArr[randomdice].value
    };

    //result.innerHTML = newArr.join("");

    sumPara.textContent = `sum = ${sum}`

    // if (numOfclicks === 0) {
    //     newLi = document.createElement("li").style.visibility = "hidden";
    //     newLi.innerHTML = `${history}`
};    
})

// let headingTwo = document.querySelector("#history-title");
// let ul = document.createElement("ul");
// document.body.appendChild(ul);
// let li = document.createElement("li");
// li.textContent= `${newArr.join('')}:${numInput.value}`;
// ul.appendChild(li);
// let sumPara= document.querySelectorAll('li');

// }
