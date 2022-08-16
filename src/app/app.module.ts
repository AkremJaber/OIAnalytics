import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantsComponent } from './Tenant/tenants/tenants.component';
import { TenantsHasPersonsComponent } from './TenantHasPersons/tenants-has-persons/tenants-has-persons.component';
import { DpMultiComponent } from './dp-multi/dp-multi.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TenantsComponent,
    TenantsHasPersonsComponent,
    DpMultiComponent
  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
