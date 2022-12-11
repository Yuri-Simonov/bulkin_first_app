import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import {
    ActivatedRoute,
    ResolveEnd,
    ResolveStart,
    Router,
} from '@angular/router';
import { filter, mapTo, merge, Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    private showLoader!: Observable<boolean>;
    private hideLoader!: Observable<boolean>;
    isLoading!: Observable<boolean>;
    constructor(
        private adminService: AdminService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.hideLoader = this.router.events.pipe(
            filter((e) => e instanceof ResolveEnd),
            mapTo(false)
        );
        this.showLoader = this.router.events.pipe(
            filter((e) => e instanceof ResolveStart),
            mapTo(true)
        );

        this.isLoading = merge(this.hideLoader, this.showLoader);
    }

    logout() {
        this.authService.deleteToken();
    }
}
