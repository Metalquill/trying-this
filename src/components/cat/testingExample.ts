// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { By } from '@angular/platform-browser';
// import { BehaviorSubject, Observable, of } from 'rxjs';

// import { OfferDecisionComponent } from '@shared/applicant/tasks/offer-decision/offer-decision.component';
// import { CheckboxInputComponent } from '@shared/components/atoms/checkbox-input/checkbox-input.component';
// import { FormInputComponent } from '@shared/components/atoms/form-subsection/form-subsection.component';
// import { MessageBannerComponent } from '@shared/components/atoms/message-banner/message-banner.component';
// import { RadioInputComponent } from '@shared/components/atoms/radio-input/radio-input.component';
// import { TextAreaComponent } from '@shared/components/atoms/text-area/text-area.component';
// import { CheckboxInputGroupComponent } from '@shared/components/molecules/checkbox-input-group/checkbox-input-group.component';
// import { RadioInputGroupComponent } from '@shared/components/molecules/radio-input-group/radio-input-group.component';
// import { ReferenceDataSelectorComponent } from '@shared/components/molecules/reference-data-selector/reference-data-selector.component';
// import { Application } from '@shared/models/application';
// import { ApplicationEnrolment } from '@shared/models/applicationEnrolment';
// import { ChangeOfEnrolment } from '@shared/models/change-of-enrolment';
// import { Qualification } from '@shared/models/qualification';
// import { mockData as mockApplicationEnrolmentResponse } from '@shared/services/application/application-enrolment.data.mock';
// import { ApplicationService } from '@shared/services/application/application.service';
// import { LoggingService } from '@shared/services/logging/logging.service';
// import { QualificationService } from '@shared/services/qualification/qualification.service';
// import { MockReferenceDataService, ReferenceDataService } from '@shared/services/reference-data/reference-data.service';

// describe('OfferDecisionComponent', () => {
//   let fixture: ComponentFixture<OfferDecisionComponent>;
//   let component: OfferDecisionComponent;

//   let fakeApplicationService: Pick<
//     ApplicationService,
//     'application' | 'getApplicationEnrolment' | 'updateOfferDecision'
//   >;
//   const updateOfferDecisionBehaviorSubject = new BehaviorSubject(null);
//   const applicationBehaviorSubject = new BehaviorSubject<Application | ChangeOfEnrolment>(null);

//   // let fakeQualificationService: Pick<QualificationService, 'qualification'>;
//   let qualificationServiceSpy: jasmine.SpyObj<QualificationService>;
//   const qualificationBehaviorSubject = new BehaviorSubject<Qualification>(null);

//   const getEls = (el) => fixture.debugElement.queryAll(By.css(el));
//   const getEl = (el) => fixture.debugElement.query(By.css(el));

//   beforeEach(() => {
//     fakeApplicationService = {
//       getApplicationEnrolment: () => {
//         return of(ApplicationEnrolment.deserializeAll(mockApplicationEnrolmentResponse()));
//       },
//       updateOfferDecision: () => {
//         return updateOfferDecisionBehaviorSubject;
//       },
//       get application(): Observable<Application | ChangeOfEnrolment> {
//         return applicationBehaviorSubject;
//       },
//     };

//     // fakeQualificationService = {
//     //   get qualification() {
//     //     return qualificationBehaviorSubject;
//     //   },
//     // };

//     qualificationServiceSpy = jasmine.createSpyObj<QualificationService>([], {
//       get qualification() {
//         return qualificationBehaviorSubject;
//       },
//     });

//     TestBed.configureTestingModule({
//       declarations: [
//         OfferDecisionComponent,
//         RadioInputGroupComponent,
//         RadioInputComponent,
//         FormInputComponent,
//         ReferenceDataSelectorComponent,
//         MessageBannerComponent,
//         TextAreaComponent,
//         CheckboxInputGroupComponent,
//         CheckboxInputComponent,
//       ],
//       imports: [ReactiveFormsModule],
//       providers: [
//         LoggingService,
//         {
//           provide: ReferenceDataService,
//           useValue: new MockReferenceDataService(),
//         },
//         {
//           provide: ApplicationService,
//           useValue: fakeApplicationService,
//         },
//         {
//           provide: QualificationService,
//           useValue: qualificationServiceSpy,
//           // useValue: fakeQualificationService,
//         },
//       ],
//       schemas: [NO_ERRORS_SCHEMA],
//     }).compileComponents();

//     fixture = TestBed.createComponent(OfferDecisionComponent);
//     component = fixture.componentInstance;

//     component.applicationYear = '2018';
//     fixture.detectChanges();
//   });

//   describe('on page load', () => {
//     it('show warning message banner', () => {
//       const warning = fixture.debugElement.query(By.css('uc-message-banner'));

//       expect(warning).toBeDefined();
//     });

//     describe('When Qualification categories are doctoral', () => {
//       beforeEach(() => {
//         qualificationBehaviorSubject.next(
//           new Qualification({
//             code: 'PHD',
//             order: 835,
//             title: 'Doctor of Philosophy (PhD)',
//             organisation_unit: {
//               code: 'Academic Board',
//             },
//             organisation_unit_code: {
//               code: 'Academic Board',
//             },
//             level: {
//               code: '10',
//             },
//             description: '',
//             paper_form_url: '',
//             guidance: 'You may choose a subject area to specialise in.',
//             is_postgraduate: true,
//             includes_thesis: true,
//             force_continue: false,
//             categories: [
//               {
//                 category: 'phd',
//               },
//               {
//                 category: 'new_student',
//               },
//               {
//                 category: 'thesis',
//               },
//               {
//                 category: 'our_uc_manual_approve',
//               },
//               {
//                 category: 'returning',
//               },
//               {
//                 category: 'has_qualification_occurrences',
//               },
//               {
//                 category: 'aes_assessment_ouruc',
//               },
//               {
//                 category: 'aes_triage_internal',
//               },
//               {
//                 category: 'offer_decision_myuc',
//               },
//               {
//                 category: 'doctoral',
//               },
//               {
//                 category: 'our_uc_coe_assessment',
//               },
//             ],
//           }),
//         );
//       });

//       it('should output true for hasDoctoralCategory', () => {
//         component.getDoctoralQualification();

//         fixture.detectChanges();

//         expect(component.hasDoctoralCategory).toBeTruthy();
//       });

//       it('should contain the word supervisor in the warning text', () => {
//         component.showAcceptSection = false;
//         component.showDeclineSection = false;
//         fixture.detectChanges();

//         const stringDescription = getEl('.warning-description').nativeElement.innerHTML;

//         expect(stringDescription).toContain('supervisor');
//       });
//     });

//     describe('When Qualification categories are not doctoral', () => {
//       beforeEach(() => {
//         qualificationBehaviorSubject.next(
//           new Qualification({
//             code: 'BA',
//             order: 10,
//             title: 'Bachelor of Arts (Majors/Minors)',
//             organisation_unit: {
//               code: 'Arts, Faculty of',
//             },
//             organisation_unit_code: {
//               code: 'ARTC',
//             },
//             level: {
//               code: '7',
//             },
//             description: '',
//             paper_form_url: '',
//             guidance:
//               'You must choose either: a major and a minor, or, two majors for this qualification (additional majors and minors are optional). If you would like to study a specialisation, please choose the Bachelor of Arts (specialisations) from the drop down menu above.',
//             is_postgraduate: false,
//             includes_thesis: false,
//             force_continue: false,
//             categories: [
//               {
//                 category: 'new_student',
//               },
//               {
//                 category: 'returning',
//               },
//               {
//                 category: 'has_qualification_occurrences',
//               },
//               {
//                 category: 'our_uc_auto_approve',
//               },
//               {
//                 category: 'aes_assessment_ouruc',
//               },
//               {
//                 category: 'course_admission_ouruc',
//               },
//               {
//                 category: 'undergrad',
//               },
//               {
//                 category: 'our_uc_coe_assessment',
//               },
//             ],
//           }),
//         );
//       });

//       it('should output false for hasDoctoralCategory', () => {
//         component.getDoctoralQualification();
//         fixture.detectChanges();

//         expect(component.hasDoctoralCategory).toBe(false);
//       });

//       it('should not contain the word supervisor in the warning text ', () => {
//         component.showAcceptSection = false;
//         component.showDeclineSection = false;

//         fixture.detectChanges();
//         const stringDescription = getEl('.warning-description').nativeElement.innerHTML;

//         expect(stringDescription).not.toContain('supervisor');
//       });
//     });

//     it('should show accept/decline radio button', () => {
//       const input = getEls('uc-radio-input-group [formControlName="offerDecision"]');

//       expect(input).toBeTruthy();
//     });
//   });

//   describe('when offer accepted', () => {
//     beforeEach(() => {
//       component.applicationYear = '2018';
//       component.offerDecisionForm.controls.acceptOffer.setValue(true);
//       fixture.detectChanges();
//     });

//     describe('When hasDoctoralCategory is false', () => {
//       beforeEach(() => {
//         component.hasDoctoralCategory = false;

//         fixture.detectChanges();
//       });

//       it('should not contain the word doctoral in the decision description', () => {
//         const stringDescription = getEl('.decision-description').nativeElement.innerHTML;

//         expect(stringDescription).not.toContain('doctoral');
//       });
//     });

//     describe('When hasDoctoralCategory is true', () => {
//       beforeEach(() => {
//         component.hasDoctoralCategory = true;

//         fixture.detectChanges();
//       });

//       it('should contain the word doctoral in the decision description', () => {
//         const stringDescription = getEl('.decision-description').nativeElement.innerHTML;

//         expect(stringDescription).toContain('doctoral');
//       });
//     });

//     it('should show the  declaration checkbox', () => {
//       const input = getEls('uc-checkbox-input-group[groupName="dec-check"]');

//       expect(input).toBeTruthy();
//     });
//   });

//   describe('when offer declined', () => {
//     beforeEach(() => {
//       component.applicationYear = '2018';
//       component.offerDecisionForm.controls.acceptOffer.setValue(false);
//       fixture.detectChanges();
//     });

//     it('should have an refdata input for decline reason ', () => {
//       const input = getEls('uc-reference-data-selector[formControlName=declineReason]');

//       expect(input).toBeTruthy();
//     });

//     it('should hide textarea if  decline reasons code is not "other" ', () => {
//       const textArea = fixture.debugElement.query(By.css('uc-text-area'));

//       expect(textArea).toBeFalsy();
//     });

//     it('should show textarea to provide other decline reasons  ', () => {
//       component.offerDecisionForm.controls.declineReason.setValue('other');
//       fixture.detectChanges();
//       const textArea = fixture.debugElement.query(By.css('uc-text-area'));

//       expect(textArea).toBeDefined();
//     });
//   });

//   describe('#update', () => {
//     it('should call processService.updateOfferDecision', inject(
//       [ApplicationService],
//       (applicationService: ApplicationService) => {
//         const updateDecisionSpy = spyOn(applicationService, 'updateOfferDecision').and.callThrough();
//         component.update();

//         expect(updateDecisionSpy).toHaveBeenCalledTimes(1);
//       },
//     ));
//   });
// });
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
