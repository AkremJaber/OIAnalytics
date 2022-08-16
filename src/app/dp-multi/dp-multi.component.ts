import { Component, OnInit } from '@angular/core';
import { DropDownService } from '../Shared/Services/DropDown/drop-down.service';

@Component({
  selector: 'app-dp-multi',
  templateUrl: './dp-multi.component.html',
  styleUrls: ['./dp-multi.component.css']
})
export class DpMultiComponent implements OnInit {

  constructor(public service:DropDownService) { }
  public thp:any;

  get():any{
    this.service.getPersons().subscribe((res: any)=>
      {
        this.thp=res
        console.log(res)
      }
      );
   } 
   
   mySelect = [];
   selectedValue: any;
   selectChange() {
       this.selectedValue = this.service.getDropDownText(this.mySelect, this.thp);
   }


  ngOnInit(): void {
    this.service.getPersons().subscribe();
    this.service.getTenants().subscribe();
  }

}
