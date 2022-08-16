import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Person } from '../../Models/Person/person.model';
import { Tenant } from '../../Models/Tenant/tenant.model';
import { TenantsHasPersons } from '../../Models/TenantsHasPersons/tenants-has-persons.model';
import { PersonService } from '../PersonService/person.service';
import { TenantService } from '../TenantService/tenant.service';

@Injectable({
  providedIn: 'root'
})
export class TenantsHasPersonsService {

  constructor(private http: HttpClient,private personService:PersonService,private tenantService:TenantService) { }

  readonly baseURL = 'https://localhost:44361/api/TenantsHasPersons';
  readonly getTenant= 'https://localhost:44361/api/Tenants';
  formData:TenantsHasPersons = new TenantsHasPersons();
  list: TenantsHasPersons[];
  personList: Person[];
  tenant: Tenant;
  tenantList: Tenant[];
  TenantHasPersonDtoList:any= [];
  person: Person
  
  getTenantsHasPersons():Observable<TenantsHasPersons[]>{
    return this.http.get<TenantsHasPersons[]>(this.baseURL)
  }
 async refreshList(){
  //this.TenantHasPersonDtoList=[];
  
  this.list = await lastValueFrom(this.getTenantsHasPersons())
    this.list.forEach(async thp =>{
      this.person = new Person()
      
      this.tenant= new Tenant()
      let uidPerson=thp.ccC_UIDPerson
      this.person = await lastValueFrom(this.personService.getPersonByuid(uidPerson))
      let PersonCentralAcc=this.person.centralAccount  
      let uidTenant=thp.ccC_UIDTenant
      this.tenant = await lastValueFrom(this.tenantService.getTenantbyUID(uidTenant))
      let Tenant_ccC_Name=this.tenant.ccC_Name
      let thpdto = {PersonCentralAcc:PersonCentralAcc,Tenant_ccC_Name:Tenant_ccC_Name,uid_person:uidPerson,uid_tenant:uidTenant}
      this.TenantHasPersonDtoList.push(thpdto)
      
    })
}
}
