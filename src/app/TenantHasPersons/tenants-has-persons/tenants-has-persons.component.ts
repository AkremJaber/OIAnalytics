import { Component, OnInit } from '@angular/core';
import { TenantsHasPersonsService } from 'src/app/Shared/Services/TenantsHasPersonsService/tenants-has-persons.service';

@Component({
  selector: 'app-tenants-has-persons',
  templateUrl: './tenants-has-persons.component.html',
  styleUrls: ['./tenants-has-persons.component.css']
})
export class TenantsHasPersonsComponent implements OnInit {

  constructor(public service:TenantsHasPersonsService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
