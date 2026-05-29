
import React ,{ useEffect, useState} from 'react'

export default function testingExample() {
 const explainOne = `We create a new spy object for the qualification so we can spy on it e.g let qualificationServiceSpy: jasmine.SpyObj<QualificationService>;`
 const explainTwo = `We create a new behaviour subject to mimic the set up of the qualification service class e.g const qualificationBehaviorSubject = new BehaviorSubject<Qualification>(null);`
 const explainThree = `We then initiate the qualification service spy to return, in this case, get qualification which returns our qualification behaviour subject e.g qualificationServiceSpy = jasmine.createSpyObj<QualificationService>([], { get qualification() { return qualificationBehaviorSubject; },});`
 const explainFour = `From there we use the qualification Service spy in the usevalue section of the providers e.g {  provide: QualificationService, useValue: qualificationServiceSpy, }`
 const explainFive = `To push the new data we use the method .next() on the qualification behaviour Subject e.g qualificationBehaviorSubject.next( new Qualification({<new data>})`
 const explainSix = `This tells the qual behaviourSubject to use this new data which has been pushed into it`
 return (
 );
}
