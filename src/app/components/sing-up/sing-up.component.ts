import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit{

  loginForm2!: FormGroup

  constructor() { }
  
  submitLogin2() {
    console.log(this.loginForm2.value)
    console.log(this.loginForm2)
  }

  ngOnInit(): void {
    this.loginForm2 = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'surname': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
      'password2': new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    })
  }
}
