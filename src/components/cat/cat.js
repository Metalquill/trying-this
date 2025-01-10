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
console.log("full name: ", commaStringFN + commaStringLN)
const commaStringFullName = commaStringFN + commaStringLN
// console.log('string with a split on comma: ', commaStringFullName.split(','))
console.log('my fullname = ', myFullName.split(' '))
const spaceCount = (commaStringFullName.split(' ').length - 1)
console.log('my space count = ', spaceCount)
const arrayThing = [commaStringFN + ' ' + commaStringLN].join('').trim()
console.log('this array: ', arrayThing)

const checkForSpaces = () => {
  if (spaceCount >= 2){
    commaStringFN.trimStart().trimEnd()
    commaStringLN.trimStart().trimEnd()
    return commaStringFN.replace(' ','_') +  " " + commaStringLN.replace(' ', '_')
  }
  return
}
const commaStringFullNameTwo = checkForSpaces()
console.log('things --> ', commaStringFullNameTwo)

 
export class cat extends Component {
  
  render() {
    // return <HandleStateChange />
    return (
      <div>
        <div className='card'>
          <h2 className='cat'>Testing page for ya know testing</h2>
          <a href={!boolbaby ? something : otherThing }>click me!</a>
          <br></br>
          <br></br>
          <p></p>
          <HandleStateChange />
        </div>
      </div>
    )
  }
}



export default cat
