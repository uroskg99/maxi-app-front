import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/confirmed.validator';

import { AdminsService } from 'src/app/services/admins.service';

import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-treca-strana',
  templateUrl: './treca-strana.component.html',
  styleUrls: ['./treca-strana.component.css'],
})
export class TrecaStranaComponent implements OnInit {
  token: any;
  loginData: any;

  form: FormGroup;
  submitted = false;
  registerData: any;

  showRegisterForm = false;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminsService,
    private toastr: ToastrService
  ) {}

  createForm() {
    this.form = this.formBuilder.group(
      {
        username: [null, Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.loginData = jwt_decode(this.token);
    this.createForm();
  }

  get f() {
    return this.form.controls;
  }

  registerAdmin() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.adminService.registerAdmin(this.form.value).subscribe(res => {
      this.registerData = res;
      console.log(res);
      if(this.registerData.status === 1) {
        this.toastr.success(JSON.stringify(this.registerData.message), JSON.stringify(this.registerData.code), {
          timeOut: 2000,
          progressBar: true
        });
        this.showRegisterForm = false;
        this.form.reset();
      } else {
        this.toastr.error(JSON.stringify(this.registerData.message), JSON.stringify(this.registerData.code), {
          timeOut: 2000,
          progressBar: true
        });
        this.showRegisterForm = false;
        this.form.reset();
      }
    });
  }

  showRegister() {
    this.showRegisterForm = true;
  }

  closeModal() {
    this.showRegisterForm = false;
  }
}
