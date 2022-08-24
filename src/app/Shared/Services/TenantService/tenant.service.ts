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

  getTenants():any{
    return this.http.get(this.getTenant)
  }

  deleteTenant(id:any){
    return this.http.delete(this.getTenant+'/'+id)
  }

  createTenant(ccc_Name:string){
    const postData = {
      ccC_Name :ccc_Name
    }
    return this.http.post(this.getTenant,postData)
  }

}
