import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Uname=""
  acno=""
  pswd=""
  //form group
  registerForm=this.fb.group({
acno:'',
pswd:'',
Uname:''
  })
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) {}
    
  ngOnInit(): void {
  }
  register(){
    var Uname=this.Uname
    var acno=this.acno
    var pswd=this.pswd
    const result=this.ds.register(Uname,acno,pswd)
    if(result){
      alert("successfully registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("already existing customer...please log in!!!")
    }
  }

}
