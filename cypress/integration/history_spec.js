describe('History-spec', () => {
    it("Records the history after subsequent rolls", () => {
        rollDice(4)
        rollDice(8)
        rollDice(6)
        rollDice(1)
        cy
        .get('li').eq(0).contains(getDiceRegExp(4))
        .get('li').eq(1).contains(getDiceRegExp(8))
        .get('li').eq(2).contains(getDiceRegExp(6))            
    })
    it ("Records the correct sums in the history", () => {
        rollDice(10)
        rollDice(3)
        rollDice(9)
        cy
        .get('li')
        .each(($li) => sumMatches($li.text()))
    })
})

function sumMatches(text) {
    console.log(text)
    const sum = text.split('')
    .filter((char) => "⚀⚁⚂⚃⚄⚅".includes(char))
    .map((die) => dieValue(die))
    .reduce((a,b) => a+b)
    return text.includes(sum)
}

function dieValue(die) {
    let values = { "⚀": 1, "⚁": 2, "⚂": 3, "⚃": 4, "⚄": 5, "⚅": 6 }
    return values[die]
}

function rollDice(n) {
    cy
    .get('input')
    .clear()
    .type(n)
    .get("button")
    .click()      
}

function getDiceRegExp(n) {
    return new RegExp(`[\u2680\u2681\u2682\u2683\u2684\u2685]{${n}}`)
}