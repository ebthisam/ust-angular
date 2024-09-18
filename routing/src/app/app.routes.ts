import { Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'register',component:RegisterComponent},
    {path:'aboutus',component:AboutusComponent},



];
