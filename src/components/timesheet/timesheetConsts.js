// Opex
const beforeNine = 0 // < 9
const firstThrity = 0.25 // 9 - 9:30  
const secThrity = 0.25 // 9:30 - 10 
const thirdThrity = 0 // 10 - 10:30
const fourthThrity = 0 // 10:30 - 11
const fifthThrity = 0 // 11 - 11:30
const sixthThrity = 0 // 11:30 - 12
const seventhThrity = 0 // 12 - 12:30
const eighthThrity = 0 // 12:30 - 1
const ninthThrity = 0 // 1 - 1:30
const tenthThrity = 0 // 1:30 - 2
const eleventhThrity = 0 // 2 - 2:30
const twelvethThrity = 0 // 2:30 - 3
const thirtheenthThrity = 0 // 3 - 3:30
const fourtennthThrity = 0 // 3:30 - 4
const fifthteenthThrity = 0 // 4 - 4:30
const sixttenthThrity = 0 // 4:30 - 5

// Capex
const beforeNineCap = 0 // < 9
const oneThrity = 0.25 // 9 - 9:30 
const twoThrity = 0.25 // 9:30 - 10 
const threeThrity = 0.50 // 10 - 10:30
const fourThrity = 0.50 // 10:30 - 11
const fiveThrity = 0.50 // 11 - 11:30
const sixThrity = 0.50 // 11:30 - 12
const sevenThrity = 0.50 // 12 - 12:30
const eightThrity = 0 // 12:30 - 1
const nineThrity = 0.50 // 1 - 1:30
const tenThrity = 0.50 // 1:30 - 2
const elevenThrity = 0.50 // 2 - 2:30
const twelveThrity = 0.50 // 2:30 - 3
const thirtheenThrity = 0.50 // 3 - 3:30
const fourteenThrity = 0.50 // 3:30 - 4
const fifthteenThrity = 0.50 // 4 - 4:30
const sixteenThrity = 0 // 4:30 - 5
const afterFive = 0 // > 5 

const capexTotal = beforeNineCap + oneThrity + twoThrity + threeThrity + fourThrity + fiveThrity + sixThrity + sevenThrity + eightThrity + nineThrity + tenThrity + elevenThrity + twelveThrity + thirtheenThrity + fourteenThrity + fifthteenThrity + sixteenThrity + afterFive
const opexTotal = beforeNine + firstThrity + secThrity + thirdThrity + fourthThrity + fifthThrity + sixthThrity + seventhThrity + eighthThrity + ninthThrity + tenthThrity  + eleventhThrity + twelvethThrity + thirtheenthThrity + fourtennthThrity + fifthteenthThrity + sixttenthThrity