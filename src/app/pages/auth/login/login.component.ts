import {Component, OnInit} from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {SpeedDial} from 'primeng/speeddial';
import {FormsModule} from '@angular/forms';
import {Rating} from 'primeng/rating';

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [SpeedDial, ToastModule, FormsModule, Rating],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
    providers: [MessageService]
})
export class LoginComponent implements OnInit{
    items!: MenuItem[] | null;
    value: number = 3.5;
    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target:'_blank',
                url: 'http://angular.io'
            }
        ];
    }
}
