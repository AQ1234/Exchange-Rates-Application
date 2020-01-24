import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '@app/_models/user';
import { UserService, AuthenticationService, DataService } from '@app/_services/index';

@Component({
selector: 'app', 
templateUrl: 'home.component.html'})

export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[];
    exchanges$: object;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private dataService: DataService
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
      
        this.loadExchangeData();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    private loadExchangeData() {

        return this.dataService.getExchanges().subscribe(data => this.exchanges$ = data);
    }
}

