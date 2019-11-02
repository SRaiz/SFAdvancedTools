import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
    declarations: [
        FooterComponent,
        SidebarComponent,
        NavbarComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FooterComponent,
        SidebarComponent,
        NavbarComponent
    ]
})
export class ComponentsModule { }
