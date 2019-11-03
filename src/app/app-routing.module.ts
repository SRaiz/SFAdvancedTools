import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HommepageComponent } from './pages/hommepage/hommepage.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HommepageComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
    HommepageComponent,
    PageNotFoundComponent
];
