import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '@app/models/user';
import { UserService } from '@app/services/user.service';
import { AuthenticationService  } from '@app/services/authentication.service';
import { DataService } from '@app/services/data.service';

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

