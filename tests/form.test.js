const { TestScheduler } = require("@jest/core");
import SubscriberForm from '~/src/js/subscriber-form';

describe('when form is submitted',()=>{
    //simulate submit + mock on form object

    it('should display error message if name input is empty',()=>{
        //form checkvalidity() should be false + name = blank
    });

    it('should display error message if email input is empty',()=>{
        //form checkvalidity() should be false + email = blank
    });

    it('should display error message if email format is incorrect',()=>{
        //form checkvalidity() should be false + we use email/s pattern attribute for manual regex check here
    });

    it('should successfully submitted new details to api',()=>{
        //spy on send data method to see if it calls after handlesubmit
    });
});