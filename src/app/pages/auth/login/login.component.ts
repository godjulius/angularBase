import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {RouterModule} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule, ButtonModule, InputTextModule, RouterModule, NgClass],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    providers: [MessageService]
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    login() {
        if (this.loginForm.valid) {
            console.log(this.loginForm.value);
        } else {
            console.log('Form is invalid');
        }
    }

    isEmailInvalid(): boolean {
        const emailControl = this.loginForm.get('email');
        return emailControl!.invalid && (emailControl!.dirty || emailControl!.touched);
    }

    isPasswordInvalid(): boolean {
        const passwordControl = this.loginForm.get('password');
        return passwordControl!.invalid && (passwordControl!.dirty || passwordControl!.touched);
    }
}
