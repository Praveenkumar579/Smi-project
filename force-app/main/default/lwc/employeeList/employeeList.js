import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, track, wire } from 'lwc';
import searchEmployee from '@salesforce/apex/employeeController.searchEmployee';
export default class EmployeeList extends NavigationMixin(LightningElement) {
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
				recordId: employeeName,
				objectApiName: 'User_Functional_Role__c',
				actionName: 'view',
			},
		});
	}


}