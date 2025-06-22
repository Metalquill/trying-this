import React, { useState } from 'react'

const instructOne = '(1) About to merge? is the ticket a patch?'
const instructTwo = '(2) If no patch number - '
const dont = 'do not merge'
const instructThree = '(3) if there is a patch number, check where its being merged into'
const instructFour = '(4) Merge now or forever hold your peace'
const instructFive = '(3) Wait and hold for the patch number'

const explainOne = `(1) We create a new spy object for the qualification so we can spy on it e.g let qualificationServiceSpy: jasmine.SpyObj<QualificationService>;`
const explainTwo = `(2) We create a new behaviour subject to mimic the set up of the qualification service class e.g const qualificationBehaviorSubject = new BehaviorSubject<Qualification>(null);`
const explainThree = `(3) We then initiate the qualification service spy to return, in this case, get qualification which returns our qualification behaviour subject e.g qualificationServiceSpy = jasmine.createSpyObj<QualificationService>([], { get qualification() { return qualificationBehaviorSubject; },});`
const explainFour = `(4) From there we use the qualification Service spy in the usevalue section of the providers e.g {  provide: QualificationService, useValue: qualificationServiceSpy, }`
const explainFive = `(5)To push the new data we use the method .next() on the qualification behaviour Subject e.g qualificationBehaviorSubject.next( new Qualification({<new data>})`
const explainSix = `(6) This tells the qual behaviourSubject to use this new data which has been pushed into it`

const btnStyle = {
    backgroundColor: "red"
}

const wrdStyle = {
    color: "red"
}

const isTheCatinTheBox = (item) => {
    if(checkArray.indexOf(item)  >= 1) {
      return true
    }
    return false
}

const catty = "cat"
const checkArray = ["dog", "cat", "bird", "fish"]



export default function HandleStateChange() {
    const [displayInstruction, setDisplayInstruction] = useState(false)
    const [displayExplaination, setDisplayExplaination] = useState(false)
    const [yes, setYes] = useState(false)
    const [no, setNo] = useState(false)
    const [isPatch, setIsPatch] = useState(false)
    const [yesClicked, setYesClicked] = useState(false)

    const handleClick = () => {
        console.log('state of displayExpl: ', displayExplaination)
        if (displayExplaination === true) {
            setDisplayExplaination(false)
        } else {
            setDisplayExplaination(true)
        }
    }
    const handleOtherClick = () => {
    console.log('state of displayInstruction: ', displayInstruction)
      if (displayInstruction === false) {
        setDisplayInstruction(true)
      } else {
        setDisplayInstruction(false)
      }
     }

     const handleYes = () => {
        if (yes === false) {
            setYes(true)
            setYesClicked(false)
        } else {
            setYesClicked(true)
            setYes(false)
        }
     }

     const handleNoPatchNumber = () => {
        if (isPatch === false) {
            setIsPatch(true)
        } else {
            setIsPatch(false)
        }
     }
     const handleNo = () => {
        if (no === false) {
            setNo(true)
            setYesClicked(true)
            setIsPatch(true)
        } else {
            setNo(false)
            setYesClicked(false)
            setIsPatch(true)
        }
     }
    return (
        <div>
            <button onClick={handleClick} className="btn waves-effect waves-light dev-btn" style={btnStyle} disabled={!isTheCatinTheBox(catty)}>Testing?</button>
            <div hidden={!displayExplaination}>
                <p>{explainOne}</p>
                <p>{explainTwo}</p>
                <p>{explainThree}</p>
                <p>{explainFour}</p>
                <p>{explainFive}</p>
                <p>{explainSix}</p>
            </div>
            <p></p>
            <button onClick={handleOtherClick} className='btn waves-effect waves-dark'>Merging?</button>
            <p></p>
            <div hidden={!displayInstruction}>
                    <p>{instructOne}</p>
                    <button onClick={handleYes}>Yes</button><button onClick={handleNo}>No</button>
                    <p></p>
                    <button onClick={handleNoPatchNumber} hidden={!yes}>No patch number?</button>
                    <p></p>
                    { yes ? <p hidden={!yesClicked && !isPatch}>{instructTwo}<strong style={wrdStyle}>{dont}!!!</strong></p> : <p hidden={!isPatch}>{instructFour}</p> }
                    
                    {console.log("yes: " ,yes)}
                    {console.log("no: " ,no)}
                    { yes ? <p hidden={!yesClicked && !isPatch}>{instructFive}</p> : <p hidden={!no}></p>}
            </div>
        </div>
    )
  }
