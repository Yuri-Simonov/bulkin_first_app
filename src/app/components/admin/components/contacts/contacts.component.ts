import {
    ActivatedRoute,
    ResolveEnd,
    ResolveStart,
    Router,
} from '@angular/router';
import { filter, map, mapTo, merge, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { AdminService } from '../../services/admin.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
    personalList!: Observable<User[]>;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        // this.personalList = this.adminService.getPersonalList();

        this.personalList = this.activatedRoute.data.pipe(
            map((data) => data?.['users'])
        );
    }
}
