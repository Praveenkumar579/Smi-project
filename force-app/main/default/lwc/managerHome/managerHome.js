import { LightningElement, wire, track, api  } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getContactsApex from '@salesforce/apex/mangerController.getContacts'
import getemployeeApex from '@salesforce/apex/MentorProfile.getContacts'


export default class managerHome extends NavigationMixin(LightningElement) {
    @wire(getContactsApex) wiredContacts1; //These will be automatically available if successful
    getContactsFromSalesforce() {
        getContactsApex()
        .then(contacts => {
            //console.log(JSON.stringify(contacts))
            console.log('Got Contacts: ' + contacts.length);
        })
        .catch(error => {
            console.log(error)
        });
    }
    @wire(getemployeeApex) wiredContacts;
    getContactsFromSalesforce() {
        getemployeeApex()
        .then(employee => {
            //console.log(JSON.stringify(contacts))
            console.log('Got Contacts: ' + employee.length);
        })
        .catch(error => {
            console.log(error)
        });
    }
    // to add onboarding step for business
    navigateToBusiness() {
        this[NavigationMixin.Navigate]({
            type: 'standard_recordpage',
            attributes: {
                recordId: '0129D000000wWc8QAE',
                objectApiStep: 'User_Functional_Role__c',
                mode: 'view'
            }
        });
    }
    navigateTosales() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0129D000000wWcDQAU',
                objectApiStep: 'User_Functional_Role__c',
                mode: 'view'
            }
        });
    }
    @api objectApiName = "User_Functional_Role__c";
    @api objectApiStep = "Functional_Onboarding_Step__c";

    handleSuccess(){
    alert('Record Created !!');
}
}