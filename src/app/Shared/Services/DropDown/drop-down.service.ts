import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../../Models/Person/person.model';
import { Tenant } from '../../Models/Tenant/tenant.model';
import * as _ from 'lodash';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {

  constructor(private http:HttpClient) { }
  readonly baseURL = 'https://localhost:44361/api/Person';
  readonly tenants = 'https://localhost:44361/api/Tenants';
  list: Person[];
  listTenants:Tenant[];

  getPersons():any{
    return this.http.get(this.baseURL)}
    
  //   const res =this.http.get(this.baseURL)
  //   .toPromise()
  //   .then(res => {this.list = res as Person[]});
  // }
  // getPersons():any{
  //   return this.http.get<[]>(this.baseURL)
  //   .pipe(map(data => {
  //    this.list=data;
  //    return; 
  //   }));
  // }

  // getTenants():any{
  //   //return this.http.get(this.baseURL)
    
  //   const res =this.http.get(this.tenants)
  //   .toPromise()
  //   .then(res => {this.listTenants = res as Tenant[]});
  // }
  getTenants():any{
    return this.http.get(this.tenants)
    // .pipe(map(data=>{
    //   this.listTenants=data;
    //   return;
    // }));
  }

  getDropDownText(uiD_Person:any, object:any):any{
    const selObj = _.filter(object, function (o) {
        return ( _.includes(uiD_Person,o.uiD_Person));
        
    });
    return selObj;
    
  }
  getDropDownTextTenant(uiD_CCCTenants:any, object:any):any{
    const selObjT = _.filter(object, function (o) {
        return ( _.includes(uiD_CCCTenants,o.uiD_CCCTenants));
        
    });
    return selObjT;
    
  }

}
