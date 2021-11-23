import { Component, OnInit } from '@angular/core';
import { AuthapiService } from 'src/app/services/authapi.service';

@Component({
  selector: 'app-parent-info',
  templateUrl: './parent-info.component.html',
  styleUrls: ['./parent-info.component.css']
})
export class ParentInfoComponent implements OnInit {

  constructor(private authService:AuthapiService ) { }

 

 f:any;
 parentPhoneNumber:any;


  getPhoneUser(){
    console.log(this.parentPhoneNumber)
    this.authService.getMessage("+" +this.parentPhoneNumber).subscribe(data =>{
      // console.log(this.parentPhoneNumber)
      console.log(data)
    }
   
    )
    
   
  }

  ngOnInit(){
    this.getPhoneUser()
  }
}
