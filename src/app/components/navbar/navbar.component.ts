import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    location: Location;

    constructor( location: Location ) {
        this.location = location;
    }

    ngOnInit() {
    }

    getTitle(): string {
        return 'Homepage';
    }

}
