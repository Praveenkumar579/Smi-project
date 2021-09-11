import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, track, wire, api } from 'lwc';
import searchEmployee from '@salesforce/apex/employeeController.searchEmployee';
import { createMessageContext, releaseMessageContext,publish} from 'lightning/messageService';
import msg from "@salesforce/messageChannel/MessageChannel__c";


export default class MentorHome extends NavigationMixin(LightningElement) {
    @track employeeRecords;
    @api recordId;
    @track errors;
    context = createMessageContext();
    @wire(searchEmployee)
        wiredRecords({error, data}){
            console.log('Data', data);
            this.employeeRecords =data;
            this.errors = error;
        }

    handleClick(event) {
        event.preventDefault();                
        const message = {
            recordId: event.target.dataset.value,
            recordData: { value: "message from Lightning Web Component" }
        };
        publish(this.context, msg, message);
    }

    @wire(searchEmployee)
        wiredTask({
            data, error
        }) {
            if(data){
                this.employeeRecords = data;
                this.errors = undefined;
            }
            if(error){
                this.errors = error;
                this.employeeRecords = undefined;
            }
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