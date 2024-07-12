import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleToolsComponent } from './sale-tools/sale-tools.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sale-tools',
    pathMatch: 'full'
  },
  {
    path: 'sale-tools',
    component: SaleToolsComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
