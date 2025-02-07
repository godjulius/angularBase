import {Component, OnInit, signal} from '@angular/core';
import {MessageService} from 'primeng/api';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {LoginModel} from '../auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [FormsModule, ButtonModule, InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
    providers: [MessageService]
})
export class LoginComponent implements OnInit{
    account = signal<LoginModel>({
        email: '',
        password: ''
    });

    ngOnInit() {
    }

    login() {
        console.log(this.account());
    }
}
