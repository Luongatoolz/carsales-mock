export class SubscriberForm {
    constructor(container) {
        if (container) {
            this.container = container;
            container.addEventListener('submit',this.handleSubmit.bind(this),false);
        }
    }
    //note: demo only. just post with form or post to api server, with form we only need to put action url
    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        const container = this.container;
        const valid = container.checkValidity();
        container.classList.add('was-validated');
        if (valid) {
            this.sendData().then((response)=>{
                if (response.status === 201) {
                    location.reload(); //need confirmation on ui design
                } else {
                    console.log('error'); //modal alert maybe
                }
            });
        }
    }
    async sendData() {
        const name = this.container.querySelector('#inputName').value;
        const email = this.container.querySelector('#inputEmail').value;
        const data  = {
            name,
            email
        };
        const url = `https://carsalesmockapi.azurewebsites.net/api/subscriber`; //put in config somehow
        return await fetch(url,{
            method:'post',
            body: JSON.stringify(data),
            headers:{
                'content-type':'application/problem+json; charset=utf-8'
            }
        });
    }
}