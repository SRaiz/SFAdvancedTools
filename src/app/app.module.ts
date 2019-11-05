import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { SfcalloutService } from './sfcallout.service';

@NgModule({
    declarations: [
        AppComponent,
        RoutingComponents,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponentsModule,
        HttpClientModule
    ],
    providers: [SfcalloutService],
    bootstrap: [AppComponent]
})
export class AppModule { }
