import { HttpClientModule } from '@angular/common/http';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantsComponent } from './Tenant/tenants/tenants.component';
import { TenantsHasPersonsComponent } from './TenantHasPersons/tenants-has-persons/tenants-has-persons.component';
import { DpMultiComponent } from './dp-multi/dp-multi.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';
import { RouterModule, Routes } from '@angular/router';
import { TenantRDDComponent } from './tenant-rdd/tenant-rdd.component';
import { PowerBIEmbedModule } from '../../powerbi-client-angular/src/powerbi-embed.module';



const appRoute:Routes= [
  {path:'', component:AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TenantsComponent,
    TenantsHasPersonsComponent,
    DpMultiComponent,
    TenantDetailsComponent,
    TenantRDDComponent

     
  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    PowerBIEmbedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
