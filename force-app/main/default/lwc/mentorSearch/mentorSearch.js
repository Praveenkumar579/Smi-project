import { LightningElement, track } from 'lwc';

export default class MentorSearch extends LightningElement {
    @track searchValues;
    handleChange(event){
        const value = event.target.value;
        const searchEvent = new CustomEvent(
            'search',
            {
                detail : value
            }
        );
        this.dispatchEvent(searchEvent)
    }
}