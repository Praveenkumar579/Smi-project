import { LightningElement, api } from 'lwc';

export default class EmployeeT extends LightningElement {
    @api employeeRecord;
    
    handleOpenRecordClick() {   
        const selectEvent = new CustomEvent('employeeview', {
            detail: this.employeeRecord.Name
        });
        this.dispatchEvent(selectEvent);
    }
}