import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ZkaasComponent } from './components/zkaas/zkaas.component';

const routes: Routes = [
  // { path: '', redirectTo: 'zkaas', pathMatch: 'full' },
  // { path: 'zkaas', component: ZkaasComponent },
  // { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
