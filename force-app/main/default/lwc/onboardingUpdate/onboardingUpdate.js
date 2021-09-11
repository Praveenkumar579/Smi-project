import { LightningElement, wire, api } from "lwc";
import getOpportunities from "@salesforce/apex/OnboardingExtend.getList";
import { NavigationMixin } from "lightning/navigation";
const OPPORTUNITY_COLS = [
    {
        label: "Name",
        type: "button",
        typeAttributes: { label: { fieldName: "Employee__r.Name"}, name: "gotoOnboarding", variant: "base" }
    },
    
    {
        label: "Start Date",
        fieldName: "Onboarding_Start_Date__c"
    },
    {
        label: "End  Date",
        fieldName: "Onboarding_End_Date__c"
    },
    {
        
        type: "button",
        typeAttributes: {
            label: "Extend",
            name: "editOpportunity",
            variant: "varient"
        }
    }
];

export default class OnboardingUpdate extends NavigationMixin(LightningElement) {
    opportunityCols = OPPORTUNITY_COLS;
    @api Onboarding_Complete__c=false;

    @wire(getOpportunities, {})
    opportunities;
    handleRowAction(event) {
        if (event.detail.action.name === "gotoOnboarding") {
            this[NavigationMixin.GenerateUrl]({
                type: "standard__recordPage",
                attributes: {
                    recordId: event.detail.row.Id,
                    actionName: "view"
                }
            }).then((url) => {
                window.open(url, "_blank");
            });
        }
        if (event.detail.action.name === "editOpportunity") {
            this[NavigationMixin.Navigate]({
                type: "standard__recordPage",
                attributes: {
                    recordId: event.detail.row.Id,
                    actionName: "edit"
                }
            });
            
        }            
    }
}