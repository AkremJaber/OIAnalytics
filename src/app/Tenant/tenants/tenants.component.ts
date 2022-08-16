import { Component, OnInit } from '@angular/core';
import { TenantService } from 'src/app/Shared/Services/TenantService/tenant.service';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {

  constructor(public service:TenantService) { }

  ngOnInit(): void {
    this.service.getTenants();
    //this.service.getTenantbyUID("");
  }

}
