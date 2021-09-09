import { LightningElement, api } from 'lwc';

export default class MentorTile extends LightningElement {
    @api mentorRecord;
    handleOpenRecord() {
        console.log(this.mentorRecord.Name)
        const selectEvent = new CustomEvent('mentorview', {
            detail: this.mentorRecord.Id
        });
        this.dispatchEvent(selectEvent);
    }
}