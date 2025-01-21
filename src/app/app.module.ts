import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SidenavComponent } from './components/sidenav/sidenav/sidenav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RoutingRoutingModule } from './routing/routing-routing.module';
import { PrincipalComponent } from './components/principal/principal.component';
import { BentoComponent } from './components/bento/bento.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitcherComponent,
    SidenavComponent,
    PrincipalComponent,
    BentoComponent,
    AdminComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSlideToggleModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    RoutingRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
