import { LightningElement, track, wire} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import searchEmployee from '@salesforce/apex/OnboardingExtendController.searchEmployee';
import { createMessageContext, releaseMessageContext,publish} from 'lightning/messageService';
import { refreshApex } from '@salesforce/apex';
import SAMPLE from "@salesforce/messageChannel/MessageChannel__c";

export default class OnboardingList extends NavigationMixin(LightningElement) {

    @track statusRecords;
    @track errors;
    context = createMessageContext();
    @track statusList;
    connectedCallback(){
        searchEmployee()
            .then(result =>{
                this.statusList = result;
                
            })
            .catch(error=>{
                this.statusList = error;
            });
    }
    handleDate(event) {
        event.preventDefault();                
        const message = {
            recordId: event.target.dataset.value,
            recordData: { value: "message from Lightning Web Component" }
        };
        publish(this.context, SAMPLE, message);
    }

    @wire(searchEmployee)
        wiredRecords({error, data}){
            console.log('Data', data);
            this.statusRecords =data;
            this.errors = error;
        }

    handleStatus(event){
        const eventVal = event.detail;
        console.log('Search Param',eventVal);
        searchEmployee({
            searchParam : eventVal

        })

        .then(result => {

            console.log('Employee Record', result);
            this.statusRecords = result;
            this.errors = undefined;
            
        })

        .catch(error =>{

            console.log('Error',error);
            this.errors = error;
            this.statusRecords = undefined;
            
        })
    }

     handleStatusView(event) {
		
		const employeeId = event.detail;
        console.log(employeeId)
		
		this[NavigationMixin.Navigate]({
			type: 'standard__recordPage',
			attributes: {
				recordId: employeeId,
				objectApiName: 'User_Functional_Role__c',
				actionName: 'edit',
			},
		}).then((url)=>{
            window.open(url,"_blank");
        });
        eval("$A.get('e.force:refreshView').fire();");
	}
}