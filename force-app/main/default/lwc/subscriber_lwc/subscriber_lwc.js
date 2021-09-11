import { LightningElement, track } from 'lwc';
import { createMessageContext, releaseMessageContext,APPLICATION_SCOPE,subscribe, unsubscribe } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import Namefield from '@salesforce/schema/User_Assigned_Task__c.Name';
import asignedto from '@salesforce/schema/User_Assigned_Task__c.Employee__c';
import functional from '@salesforce/schema/User_Assigned_Task__c.Functional_Role__c';
import mentor from '@salesforce/schema/User_Assigned_Task__c.Mentor__c';
import onboarding from '@salesforce/schema/User_Assigned_Task__c.Onboarding_Step__c';
import enddate from '@salesforce/schema/User_Assigned_Task__c.End_Date__c';
import Status from '@salesforce/schema/User_Assigned_Task__c.Status__c';


export default class Subscriber_lwc extends LightningElement {
    context = createMessageContext();
    subscription = null;
    @track receivedMessage = '';
    @track taskId;
    @track objectApiName='User_Assigned_Task__c';
    fields = [Namefield, asignedto, functional, mentor, onboarding, enddate,Status];
    connectedCallback(){
        this.subscribeMC();
    }
    subscribeMC() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.context, SAMPLEMC, (message) => {
            this.handleMessage(message);
        },{scope: APPLICATION_SCOPE});
     }
     handleMessage(message) {       
        console.log('message:::'+JSON.stringify(message));
        this.taskId = message.recordId;
        this.receivedMessage = message ? message.recordData.value : 'no message payload';
    }
}