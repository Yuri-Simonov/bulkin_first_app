import { AdminService } from './../../services/admin.service';
import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-contacts-details',
    templateUrl: './contacts-details.component.html',
    styleUrls: ['./contacts-details.component.scss'],
})
export class ContactsDetailsComponent implements OnInit {
    id!: number;
    user!: Observable<User>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private adminService: AdminService
    ) {}

    ngOnInit(): void {
        // this.activatedRoute.params.subscribe(
        //     (params) => (this.id = params?.['id'])
        // );
        // this.user = this.adminService.getPerson(this.id);

        this.user = this.activatedRoute.data.pipe(
            map((data) => data?.['user'])
        );
    }
}
