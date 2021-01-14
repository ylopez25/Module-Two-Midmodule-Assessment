describe('Roll-spec', () => {
    it("Selects a value and displays the random roll", () => {
    testRolls(8)
    })
    it("Overwrites the #dice-para element after multiple rolls", () => {
        testRolls(5)
        testRolls(12)
        testRolls(4)
    })
    it("Displays the correct sum", () => {
        rollDice(6)
        cy.get("#dice-para").invoke("text").then((diceText) => {
            const expectedSum = diceText
            .split('')
            .map((die) => dieValue(die))
            .reduce((a,b) => a + b)
            
            cy
            .get("#sum-para")
            .contains(expectedSum)
        })
    })
})

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

function testRolls(n) {
    const regEx = new RegExp(`[\u2680\u2681\u2682\u2683\u2684\u2685]{${n}}`)
    cy
    .get('input')
    .clear()
    .type(n)
    .get("button")
    .click()      
    .get('#dice-para')
    .contains(regEx)
}