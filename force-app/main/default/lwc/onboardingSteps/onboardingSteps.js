import { LightningElement, wire } from 'lwc';
import getList from '@salesforce/apex/onboardingController.getList'
import {updateRecord} from 'lightning/uiRecordApi'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex'
const columns = [
 { label:'Onboarding Step Name', fieldName:'Name', editable:false},
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
        console.log("recordInputs", recordInputs)
            const promises = recordInputs.map(recordInput => updateRecord(recordInput))
            Promise.all(promises).then(result=>{
            this.showToastMsg('Success', 'Onboarding updated')
            this.draftValues=[]
            return refreshApex(this.onboarding)
            }).catch(error=>{
            this.showToastMsg('Error creating record', error.body.message, error)
        })
        }
            showToastMsg(title, message, variant){
            this.dispatchEvent(
            new ShowToastEvent({
            title:title,
            message:message,
            variant:variant||'success'
        })
        )
    }
}