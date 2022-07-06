import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //properties
  aim="Perfect Banking Partner"
  accno=""
  acno=""
  pswd=""


//dependency injenction
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  



  
login(){
  
  var acno=this.acno
  var pswd=this.pswd
   let result=this.ds.login(acno,pswd)
  if(result){
    alert("Login successful")
    this.router.navigateByUrl('dashboard')
    
    
  }
  }
}   
    



  