import { LightningElement, wire, track, api  } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import searchMentor from '@salesforce/apex/mentorController.searchMentor';
export default class managerHome extends NavigationMixin(LightningElement) {
    @track mentorRecords;
    @track errors;


    @wire(searchMentor)
        wiredRecords({error, data}){
            console.log('Data', data);
            this.mentorRecords =data;
            this.errors = error;
        }

    handleEvent(event)
    {
        const eventVal = event.detail;
        console.log('Search Param',eventVal);
        searchMentor({
        searchParam : eventVal
    
        })
    
        .then(result => {
    
            console.log('Mentor Record', result);
            this.mentorRecords = result;
            this.errors = undefined;
                
        })
    
        .catch(error =>{
    
            console.log('Error',error);
            this.errors = error;
            this.mentorRecords = undefined;
                
            })
    }


    handleMentorView() {
		this[NavigationMixin.Navigate]({
			type: 'standard__objectPage',
			attributes: {
				objectApiName: 'User_Functional_Role__c',
				actionName: 'list',
			}
		});
	}
    @api objectApiName = "User_Functional_Role__c";
    @api objectApiStep = "Onboarding_Step__c";

    handleSuccess(){
    alert('Record Created !!');
    eval("$A.get('e.force:refreshView').fire();");
}
}