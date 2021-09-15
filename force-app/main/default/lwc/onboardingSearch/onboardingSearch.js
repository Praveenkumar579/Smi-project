import { LightningElement, track} from 'lwc';

export default class OnboardingSearch extends LightningElement {

    @track searchStatus;

    handleChange(event){
        const value = event.target.value;
        const searchEvent = new CustomEvent(
            'search',

            {
                detail: value
            }
        );

        this.dispatchEvent(searchEvent);
    }
    
}