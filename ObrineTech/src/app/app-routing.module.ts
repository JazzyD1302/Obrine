import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PcComponent } from './pc/pc.component';
import { PhotoComponent } from './photo/photo.component';
import { DesignComponent } from './design/design.component';
import { PortfolioComponent } from './portfolio/portfolio.component';




const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'About',component: AboutComponent},
  {path: 'Pc_Builds',component: PcComponent},
  {path: 'Photography',component: PhotoComponent},
  {path: 'Graphic_Design',component: DesignComponent},
  {path: 'Portfolio',component: PortfolioComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
