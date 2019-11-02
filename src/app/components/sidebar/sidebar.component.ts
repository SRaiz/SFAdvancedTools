import { Component, OnInit } from '@angular/core';

declare interface SidebarItems {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const SIDEBAR_ELEMENTS: SidebarItems[] = [
    {
        path: '',
        title: 'Homepage',
        icon: 'icon-bank',
        class: ''
    },
    {
        path: '',
        title: 'FAQ',
        icon: 'icon-bulb-63',
        class: ''
    },
    {
        path: '',
        title: 'Feedback',
        icon: 'icon-heart-2',
        class: ''
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
