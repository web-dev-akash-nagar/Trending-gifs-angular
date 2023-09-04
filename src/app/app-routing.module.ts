import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingGifsComponent } from './trending-gifs/trending-gifs.component';

const routes: Routes = [
  {
    path: 'trending-gifs',
    pathMatch: 'full',
    component: TrendingGifsComponent
},
{
  path: '**', 
  redirectTo: 'trending-gifs'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
