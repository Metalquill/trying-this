import React from 'react'
import './timesheet.css'

// 30 minute intervals of activity
// Opex = student management operational code
// Capex = student management product code
// Opex is user support, work on prod bugs, regression testing, release activities, tech debt, all meetings on student management topics
// Capex = new feature work, development, testing, planned improvements, meetings about new features
//3.25 minutes = 0.06 ,7.5 minutes = 0.125 ,15 mins = 0.25, 30 mins = 0.5, 45 mins = 0.75 (this one isn't needed though)

// 23.6.2025
export default function Timesheet() {
// Opex
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
const oneThrity = 0.50 // 9 - 9:30 
const twoThrity = 0.25 // 9:30 - 10 
const threeThrity = 0 // 10 - 10:30
const fourThrity = 0 // 10:30 - 11
const fiveThrity = 0 // 11 - 11:30
const sixThrity = 0 // 11:30 - 12
const sevenThrity = 0 // 12 - 12:30
const eightThrity = 0 // 12:30 - 1
const nineThrity = 0 // 1 - 1:30
const tenThrity = 0 // 1:30 - 2
const elevenThrity = 0 // 2 - 2:30
const twelveThrity = 0 // 2:30 - 3
const thirtheenThrity = 0 // 3 - 3:30
const fourteenThrity = 0 // 3:30 - 4
const fifthteenThrity = 0 // 4 - 4:30
const sixteenThrity = 0 // 4:30 - 5
// const seventeenThirty = 0 // 5 - 5:30

const capexTotal = oneThrity + twoThrity + threeThrity + fourThrity + fiveThrity + sixThrity + sevenThrity + eightThrity + nineThrity + tenThrity + elevenThrity + twelveThrity + thirtheenThrity + fourteenThrity + fifthteenThrity + sixteenThrity
const opexTotal = firstThrity + secThrity + thirdThrity + fourthThrity + fifthThrity + sixthThrity + seventhThrity + eighthThrity + ninthThrity + tenthThrity  + eleventhThrity + twelvethThrity + thirtheenthThrity + fourtennthThrity + fifthteenthThrity + sixttenthThrity
const title = "TimeSheet"
const initDate = new Date()
const todaysDate = initDate.toLocaleDateString()

// console.log("Capex total hours: ", capexTotal);
// console.log("Opex total hours: ", opexTotal);
// console.log("Total hours: ", capexTotal + opexTotal);
return (
    <div className='origin-container'>
        <div className='card'><h5>{title}</h5>
            {todaysDate}
            <div className='timesheetValues'>
                <p className='fridge'>Opex: {opexTotal}</p>
                <p>Capex: {capexTotal}</p>
                <p>Total hours: { opexTotal + capexTotal}</p>
            </div> 
            <div className='otherSide'>
            <p>Some Value</p>
            <p> another Value</p>
            <p>Last one</p>
            </div>
        </div>
    </div>
);


}