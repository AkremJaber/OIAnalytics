import { Component, OnInit } from '@angular/core';
import { TenantService } from 'src/app/Shared/Services/TenantService/tenant.service';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {

  constructor(public service:TenantService) { }
  public t:any;
  public postTenant:any
  e:string
  get(){
    this.service.getTenants().subscribe((res: any)=>
      {
       //this.perso = res
        this.t=res
        //console.log(res)
      }
      );
   }

  deleteTenant(id:any){
    console.log(id)
    if(confirm('Are you sure you want to delete this tenant ?'))
    {
    this.service.deleteTenant(id).subscribe()
    }
  }

  onTenantCreate(){
    console.log(this.e)
    this.service.createTenant(this.e).subscribe()
  }

  ngOnInit(): void {
    this.service.getTenants().subscribe();
    this.get();
    //this.service.getTenantbyUID("");
  }

}
