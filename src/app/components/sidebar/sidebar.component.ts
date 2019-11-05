import { Component, OnInit } from '@angular/core';

declare interface SidebarItems {
    path: string;
    title: string;
    icon: string;
    class: string;
    display: boolean;
}

export let SIDEBAR_ELEMENTS: SidebarItems[] = [
    {
        path: '/homepage',
        title: 'Homepage',
        icon: 'icon-bank',
        class: '',
        display: true
    },
    {
        path: '/faq',
        title: 'FAQ',
        icon: 'icon-bulb-63',
        class: '',
        display: true
    },
    {
        path: '/feedback',
        title: 'Feedback',
        icon: 'icon-heart-2',
        class: '',
        display: true
    },
    {
        path: '/apexpermissions',
        title: 'Apex Permissions',
        icon: 'icon-spaceship',
        class: '',
        display: false
    },
    {
        path: '/vfpermissions',
        title: 'VF Permissions',
        icon: 'icon-notes',
        class: '',
        display: false
    }
];


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    sidebarItems: any[];

    constructor() { }

    ngOnInit() {
        this.sidebarItems = SIDEBAR_ELEMENTS;
    }

}
