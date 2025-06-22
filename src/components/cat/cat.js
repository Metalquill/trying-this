import React, { Component } from 'react'
import './cat.css'
import HandleStateChange from './handleStateChange'

const something = ""
const otherThing = "www.google.com"
const boolbaby = false

// const date_one = "2024-10-31"
// const date_two = new Date(date_one)
// const todaysDate = new Date()

const myFullName = 'Daniel Gilmour'
const commaStringFN = 'Le chat'
const commaStringLN = 'Le chien'
const currentDate = new Date()
const dateArray = [{day: "2024-10-31"}, {day: "2025-10-31"}, {day:"2022-10-31"}]
const checkDateArray = []
dateArray.forEach((date) => checkDateArray.push(new Date(date.day)))
//console.log("check date Array data: ", checkDateArray)
// eslint-disable-next-line no-unused-vars
const RemoveExpired = checkDateArray.filter(el => el > currentDate )
//console.log("Filtered array: ", RemoveExpired)
// console.log("full name: ", commaStringFN + commaStringLN)
const commaStringFullName = commaStringFN + commaStringLN
// console.log('string with a split on comma: ', commaStringFullName.split(','))
// console.log('my fullname = ', myFullName.split(' '))
const spaceCount = (commaStringFullName.split(' ').length - 1)
// console.log('my space count = ', spaceCount)
const arrayThing = [commaStringFN, commaStringLN].join(', ').trim()
// console.log('this array: ', arrayThing)
const subjectOptionsOne = ['Health', 'English']
const subjectOptionsTwo = []
const subjectOptionsThree = []
const subjectOptionsFour = ['Science', 'Social Studies']
const subjectOptionsFive = []
let finalText = ""

const whatHappensIfEmpty = () => {
  if (subjectOptionsOne.length < 1 && subjectOptionsTwo.length < 1 && subjectOptionsThree.length < 1 && subjectOptionsFour.length < 1 && subjectOptionsFive.length < 1) {
    return null
  }
  else {
   const subjectOptionsArray = []
   const nonEmptySubjectOptionsArray = []
   let subjects = " "
   subjectOptionsArray.push(subjectOptionsOne, subjectOptionsTwo, subjectOptionsThree, subjectOptionsFour, subjectOptionsFive)
   let count = 0
   const subjectOptionsArrayLength = subjectOptionsArray.length 
   while (count < subjectOptionsArrayLength) {
    if (subjectOptionsArray[count].length >= 1) {
      nonEmptySubjectOptionsArray.push(subjectOptionsArray[count])
      subjects = nonEmptySubjectOptionsArray
      
    }
    count++
   }
   console.log('other array: ', subjectOptionsArray)
   console.log('the nonEmptyArray: ', nonEmptySubjectOptionsArray) 
   return subjects = subjects.toString().replace(/,/g, ', ')
    
   
  }
}
finalText = whatHappensIfEmpty()
console.log('type of final text: ', typeof finalText)


const checkForSpaces = () => {
  if (spaceCount >= 2){
    commaStringFN.trimStart().trimEnd()
    commaStringLN.trimStart().trimEnd()
    return commaStringFN.replace(' ','_') +  " " + commaStringLN.replace(' ', '_')
  }
  return
}
const commaStringFullNameTwo = checkForSpaces()
// console.log('things --> ', commaStringFullNameTwo)

export class cat extends Component {
  
  render() {
    // return <HandleStateChange />
    return (
      <div className='cat-container'>
        <div className='card'>
          <h2 className='cat'>Testing page for ya know testing</h2>
          <a  href={!boolbaby ? something : otherThing }>click me!</a>
          <br></br>
          <br></br>
          <p className='buttonsStyle'><HandleStateChange /></p>
          <p>{"my Subjects are: "+ finalText}</p>
          <p></p>
        </div>
      </div>
    )
  }
}



export default cat
