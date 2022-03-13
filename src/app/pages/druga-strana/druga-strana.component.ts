import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminsService } from 'src/app/services/admins.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-druga-strana',
  templateUrl: './druga-strana.component.html',
  styleUrls: ['./druga-strana.component.css'],
})
export class DrugaStranaComponent implements OnInit {
  submitted = false;
  form: FormGroup;
  loginData: any;
  token: any;

  constructor(
    private adminService: AdminsService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  loginForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.loginForm();
    localStorage.removeItem('token');
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if(this.form.invalid) {
      return;
    }

    this.adminService.loginAdmin(this.form.value).subscribe(res => {
      this.loginData = res;

      //console.log(this.loginData);

      if(this.loginData.status === 1) {
        this.token = this.loginData.data.token;
        localStorage.setItem('token', this.token);
        this.router.navigate(['/admin-home']);
        this.toastr.success(JSON.stringify(this.loginData.message), JSON.stringify(this.loginData.code),
        {
          timeOut: 2000,
          progressBar: true
        });
      } else if(this.loginData.status === 0) {
        this.toastr.error(JSON.stringify(this.loginData.message), JSON.stringify(this.loginData.code),
        {
          timeOut: 2000,
          progressBar: true
        });
      }
    })
  }
}
