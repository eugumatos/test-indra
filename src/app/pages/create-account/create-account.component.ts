import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ValidateFields } from '../../utils/validateFields';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  newAccountForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.newForm();
  }

  onSubmit(): void {
    alert(
      `Parabéns ${this.newAccountForm.value.name} por escolher Itaú, seu pedido está sujeito ánalise e em breve entraremos em contato, obrigado!`,
    );
    this.router.navigate(['/home']);
    //console.log(this.newAccountForm.value.name);
  }

  newForm(): void {
    this.newAccountForm = this.fb.group(
      {
        name: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],
        cpf: [
          '',
          Validators.compose([
            Validators.pattern('[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}'),
            Validators.maxLength(11),
            Validators.required,
          ]),
        ],
        phone: ['', Validators.compose([Validators.required])],
        email: [
          '',
          Validators.compose([Validators.email, Validators.required]),
        ],
        birth: ['', Validators.compose([Validators.required])],
        password: [
          '',
          Validators.compose([
            Validators.minLength(6),
            Validators.maxLength(8),
            Validators.required,
          ]),
        ],
        passwordMatched: ['', Validators.compose([Validators.required])],
        checkbox: ['', Validators.compose([Validators.required])],
        checkbox2: [''],
      },
      {
        validator: ValidateFields.PasswordMatched,
      },
    );
  }

  verifyValidTouched(field: any): boolean {
    return (
      !this.newAccountForm.get(field).valid &&
      this.newAccountForm.get(field).touched
    );
  }

  applyCss(field) {
    return {
      'has-error': this.verifyValidTouched(field),
    };
  }
}
