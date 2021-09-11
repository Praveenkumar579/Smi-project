import { LightningElement, track } from 'lwc';
import getAssigendTask from '@salesforce/apex/taskController.getAssigendTask';
import { createMessageContext, releaseMessageContext,publish} from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/MessageChannel__c";

export default class Publish__details_lwc extends LightningElement {
    context = createMessageContext();
    @track taskList;
    connectedCallback(){
        getAssigendTask()
            .then(result =>{
                this.taskList = result;
            })
            .catch(error=>{
                this.taskList = error;
            });
    }
    handleClick(event) {
        event.preventDefault();                
        const message = {
            recordId: event.target.dataset.value,
            recordData: { value: "message from Lightning Web Component" }
        };
        publish(this.context, SAMPLEMC, message);
    }
}