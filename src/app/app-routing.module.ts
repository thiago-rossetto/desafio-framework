import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './components/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'album',
    loadChildren: './components/album/album.module#AlbumModule'
  },
  {
    path: 'comments',
    loadChildren: './components/comments/comments.module#CommentsModule'
  },
  {
    path: 'to-dos',
    loadChildren: './components/to-dos/to-dos.module#ToDosModule'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
