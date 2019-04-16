import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlideComponent } from './slide/slide.component';
import { FavoritoperroComponent } from './favoritoperro/favoritoperro.component';

const routes: Routes = [
  {path:'slide', component: SlideComponent, pathMatch:'full'},
  {path:'chat', loadChildren: './chat/chat.module#ChatModule', pathMatch:'full'},
  {path:'favorito', component: FavoritoperroComponent, pathMatch:'full'},
  {path: '', redirectTo: 'slide', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
