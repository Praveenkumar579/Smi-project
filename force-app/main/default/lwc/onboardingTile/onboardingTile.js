import { LightningElement, api, track} from 'lwc';
import ONBOARDING_FIELD from '@salesforce/schema/User_Functional_Role__c.Onboarding_End_date__c';
import ID_FIELD from '@salesforce/schema/User_Functional_Role__c.Description__c';
import STATUS_FIELD from '@salesforce/schema/User_Functional_Role__c.Onboarding_Complete__c';

export default class OnboardingTile extends LightningElement {

    @api statusRecord;
    @track objectApi='User_Functional_Role__c';
    field=[ STATUS_FIELD];
    fields = [ID_FIELD, ONBOARDING_FIELD];
    handleOpen() {
        console.log(this.statusRecord.Name)
        
        const selectEvent = new CustomEvent('statusview', {
            detail: this.statusRecord.Id
        });
        this.dispatchEvent(selectEvent);
    }
    handleOpen1() {
        console.log(this.statusRecord.Name)
        
        const selectEvent = new CustomEvent('statusview', {
            detail: this.statusRecord.Id
        });
        this.dispatchEvent(selectEvent);
        
    }
    


    @track openmodel = false;
    openmodal() {
        this.openmodel = true
    }
    closeModal() {
        
        this.openmodel = false
    } 
    saveMethod1() {
        this.closeModal();
        
    }
    @track openmodel1 = false;
    openmodal1() {
        this.openmodel1 = true
    }
    closeModal1() {
        this.openmodel1 = false
    } 
    saveMethod() {
        this.closeModal1();
        
    }
    
}