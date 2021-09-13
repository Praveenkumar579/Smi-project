import { LightningElement, wire } from 'lwc';
import getList from '@salesforce/apex/onboardingController.getList'
const columns = [
 { label:'Onboarding Step Name', fieldName:'Name', editable:false},
 { label:'Duration', fieldName:'Duration__c', editable:false},
 { label:'Duration Type', fieldName:'Duration_Type__c', type:'picklist', editable:false},
 { label:'Level', fieldName:'Level__c',type:'picklist', editable:false},
 { label:'Onboarding Step Type', fieldName:'Onboarding_Step_Type__c',type:'picklist', editable:false},
]
export default class ExtendDate extends LightningElement {
        columns = columns
        draftValues = []
        @wire(getList)
            onboarding;
            handleSave(event){
            console.log(event.detail.draftValues)
            const recordInputs = event.detail.draftValues.slice().map(draft=>{
            const fields = Object.assign({}, draft)
            return {fields}
        })
    }
}