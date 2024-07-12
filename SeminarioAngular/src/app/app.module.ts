import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LootListComponent } from './loot-list/loot-list.component';
import { BuyToolsComponent } from './buy-tools/buy-tools.component';
import { SaleToolsComponent } from './sale-tools/sale-tools.component';
import { ContactComponent } from './contact/contact.component';
import { ButtonIntComponent } from './button-int/button-int.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LootListComponent,
    BuyToolsComponent,
    SaleToolsComponent,
    ContactComponent,
    ButtonIntComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
