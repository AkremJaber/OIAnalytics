import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tenant } from '../../Models/Tenant/tenant.model';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(private http: HttpClient) { }

  readonly getTenant= 'https://localhost:44361/api/Tenants';
  formData:Tenant = new Tenant();
  t: Tenant;
  tenantList: Tenant[];

  getTenantbyUID(id:string):any{
    return this.http.get<Tenant>(this.getTenant+'/'+id)
  }
  getTenants(){
    const res= this.http.get(this.getTenant)
    .toPromise()
    .then(res => {this.tenantList = res as Tenant[]});
  }

}
