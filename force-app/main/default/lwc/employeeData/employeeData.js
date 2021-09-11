import { LightningElement, api, wire} from 'lwc';
export default class EmployeeData extends LightningElement {

    @api employeeRecord;
    @api taskRecord;
    handleOpenRecordClick() {
        //console.log(this.employeeRecord.Name)
        
        const selectEvent = new CustomEvent('employeeview', {
            detail: this.employeeRecord.Id
        });
        this.dispatchEvent(selectEvent);
    }
}