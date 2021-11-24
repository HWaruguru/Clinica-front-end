import { Component, OnInit } from '@angular/core';
import { AuthapiService } from 'src/app/services/authapi.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

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