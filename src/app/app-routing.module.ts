import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: "", redirectTo: "/profile", pathMatch: "full" },
  { path: "profile", component: ProfileComponent },
  { path: "edit", component: EditComponent },
  { path: "**", redirectTo: "/profile", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
