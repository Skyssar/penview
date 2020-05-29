import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { MapComponent } from './components/map/map.component';
import { LessorComponent } from './components/lessor/lessor.component';

const routes: Routes = [
    { path: "", redirectTo: 'login', pathMatch: "full"},
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'map', component: MapComponent},
    { path: 'lessor', component: LessorComponent},
    { path: "**", redirectTo: 'login' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }