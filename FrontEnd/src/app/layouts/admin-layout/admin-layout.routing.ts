import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {NewsComponent} from '../../pages/news/news.component'
import {ComplainComponent} from '../../pages/complain/complain.component'
import { DenounceComponent } from '../../pages/denounce/denounce.component';
import { FuncionaryComponent } from '../../pages/funcionary/funcionary.component';
import { DepartmentsComponent } from '../../pages/departments/departments.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'News',           component: NewsComponent },
    { path: 'Complain',           component: ComplainComponent },
    { path: 'Denounce',           component: DenounceComponent },
    { path: 'Funcionary',           component: FuncionaryComponent },
    { path: 'Departments',           component: DepartmentsComponent },
    { path: 'maps',           component: MapsComponent }

];
