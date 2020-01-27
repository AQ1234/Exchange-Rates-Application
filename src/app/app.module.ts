import { NgModule }   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { fakeBackendProvider } from './fakeBackend/fake-backend';
import { AppComponent }  from './app.component';
import { routing }     from './app.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DataService } from './services/data.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        CommonModule,
        BrowserModule,
        HttpClientModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatTableModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
    ],
    providers: [

        fakeBackendProvider,
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
