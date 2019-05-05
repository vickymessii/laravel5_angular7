import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private flashMessage: FlashMessagesService, private router: Router, private log: UserService) {this.createForm(); }
  createForm() {
    this.angForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ],
    });
  }
  login(email, password) {
    this.log.login(email, password);
    this.flashMessage.show('Login Added Succesfully...', { cssClass: 'alert-success', timeout: 2000 });
    //this.router.navigateByUrl('/business');
  }
  ngOnInit() {
  }

}
