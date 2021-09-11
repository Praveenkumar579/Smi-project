import { LightningElement, api} from 'lwc';

export default class TaskTile extends LightningElement {
    @api taskRecord;
    handleDetails(){   
    }
    handleOpenRecord() {
        console.log(this.taskRecord.Id)
        
        const selectEvent = new CustomEvent('taskview', {
            detail: this.taskRecord.Id
        });
        this.dispatchEvent(selectEvent);
    }
}