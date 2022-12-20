import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescComponent } from './desc/desc.component';
import { ChoiceComponent } from './choice/choice.component';

const routes: Routes = [
  {path: '', component: ChoiceComponent},
  {path: ':name', component: DescComponent},
  {path: ':name/:year', component: DescComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
