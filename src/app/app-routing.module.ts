import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS 



import { ListpersonComponent } from './components/listperson/listperson.component';
import { NewpersonComponent } from './components/newperson/newperson.component';
import { AppleComponent } from './components/apple/apple.component';


const routes: Routes = [

  {path: "persons", component: ListpersonComponent},
  {path: "newrecord/:isupdate", component: NewpersonComponent},
  {path: "apiapple", component: AppleComponent},
  {path: "**", pathMatch: "full", component: ListpersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
