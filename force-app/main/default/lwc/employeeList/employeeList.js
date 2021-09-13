import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, api, track, wire } from 'lwc';
import getOpportunities from "@salesforce/apex/OnboardingExtend.getList";
import searchEmployee from '@salesforce/apex/employeeController.searchEmployee';
export default class EmployeeList extends LightningElement {
    @track employeeRecords;
    @api recordId;
    @track errors;
    @wire(getOpportunities, {})
    opportunities;
    @api taskRecord;

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
        const employeeId = event.detail;
		
		
		this[NavigationMixin.Navigate]({
			type: 'standard__objectPage',
			attributes: {
				recordId: employeeId,
				objectApiName: 'User_Assigned_Task__c',
				actionName: 'list',
			}
		});
	}
    handleRowAction(event) {
        if (event.detail.action.name === "closeopportunity") {
            this[NavigationMixin.Navigate]({
                type: "standard__recordPage",
                attributes: {
                    recordId: event.detail.row.Id,
                    actionName: "edit"
                }
            });
    }
}
    @api objectApiStep = "Onboarding_Step__c";

    handleSuccess(){
        const toast = new ShowToastEvent({
            'title' : 'Created',
            "message" : 'Record Created Successfully',
            "variant" : "success",
            
        });
        this.dispatchEvent(toast);
    }
}