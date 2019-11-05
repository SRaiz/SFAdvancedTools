import { Component, OnInit } from '@angular/core';
import { SfcalloutService } from 'src/app/sfcallout.service';

const connectionParameters = {
    consumer_key: '3MVG9ZL0ppGP5UrDbwR9u.kaobGbLL5fjB6xTU3jZGjykodQtE7tkzLXl8p7ZK_iAzVsg2bbaLy4Rfuc8Z1xT',
    redirect_uri: 'https://sfadvancedtools.herokuapp.com/home'
};

@Component({
    selector: 'app-hommepage',
    templateUrl: './hommepage.component.html',
    styleUrls: ['./hommepage.component.scss']
})
export class HommepageComponent implements OnInit {
    isConnected = false;

    // -- We create dependency of sfcalloutservice in the class constructor --//
    constructor( private sfCalloutService: SfcalloutService ) { }

    ngOnInit() {
        const storage = sessionStorage;

        if (storage.length === 0 && String(window.location.href).includes('access_token')) {

            storage.idParam = decodeURIComponent(decodeURI(this.getUrlParameters('id')));
            storage.userId = storage.idParam.split('/').slice(-1)[0];
            storage.accessToken = decodeURI(this.getUrlParameters('access_token'));
            storage.instanceUrl = decodeURIComponent(decodeURI(this.getUrlParameters('instance_url')));
            storage.tokenType = decodeURI(this.getUrlParameters('token_type'));
            window.history.pushState(null, null, String(window.location.href).split('#')[0]);
            this.isConnected = true;

            // -- Fetch the logged in user data and update the markup --//
            const queryFields = ['Id', 'Name', 'FirstName', 'Username', 'FullPhotoUrl'];
            const qString = this.fetchLoggedInUserData('User', queryFields);
            this.sfCalloutService.getRequestToSf(qString)
                                 .subscribe(data => console.log(data));

        } else if (storage.length > 0) {

            this.isConnected = true;
        }
    }

    connectToSFOrg(event: { srcElement: { innerText: any; }; }) {
        const buttonName = event.srcElement.innerText;
        let urlPrefix: string;

        if (buttonName === 'Connect To Production') {
            urlPrefix = 'https://login.salesforce.com';
        } else if (buttonName === 'Connect To Sandbox') {
            urlPrefix = 'https://test.salesforce.com';
        }

        sessionStorage.clear();
        let redirectURL = urlPrefix + '/services/oauth2/authorize?response_type=token';
        redirectURL += '&client_id=' + connectionParameters.consumer_key + '&redirect_uri=' + connectionParameters.redirect_uri;
        window.location.href = redirectURL;
    }

    getUrlParameters(param: string): string {
        const mainUrl = window.location.href + '';
        const pageUrls = mainUrl.split('#');
        const urlVariables = pageUrls[1].split('&');

        let urlParamValue: string;
        urlVariables.map(data => {
            const urlElement = data.split('=');
            if (urlElement[0] === param) {
                urlParamValue = urlElement[1];
            }
        });
        return urlParamValue;
    }

    fetchLoggedInUserData( objectName: string, queryFields: string[] ): string {

        let queryString = this.sfCalloutService.createQuery(objectName, queryFields);
        queryString += ' WHERE Id=\'' + sessionStorage.getItem('userId') + '\'' ;
        return queryString;
    }
}
