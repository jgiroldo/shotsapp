
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ShotDetailsComponent } from './shot-details/shot-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'shot',
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: ':id', component: ShotDetailsComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes { }
