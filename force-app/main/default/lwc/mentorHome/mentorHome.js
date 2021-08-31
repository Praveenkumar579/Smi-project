import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, track, wire, api } from 'lwc';
import searchEmployee from '@salesforce/apex/employeeController.searchEmployee';
export default class MentorHome extends NavigationMixin(LightningElement) {
    @track employeeRecords;
    @track errors;

    @wire(searchEmployee)
        wiredRecords({error, data}){
            console.log('Data', data);
            this.employeeRecords =data;
            this.errors = error;
        }

    handleEvent(event){
        const eventVal = event.detail;
        console.log('Search Param',eventVal);
        searchEmployee({
            searchParam : eventVal

        })

        .then(result => {

            console.log('Employee Record', result);
            this.employeeRecords = result;
            this.errors = undefined;
            
        })

        .catch(error =>{

            console.log('Error',error);
            this.errors = error;
            this.employeeRecords = undefined;
            
        })
    }

     handleEmployeeView(event) {
		
		const employeeName = event.detail.value;
		
		this[NavigationMixin.Navigate]({
			type: 'standard__recordPage',
			attributes: {
				objectApiName: 'User_Functional_Role__c',
				actionName: 'view',
			},
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