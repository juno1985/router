import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Code404Component } from './code404/code404.component';

const routes: Routes = [
  /**
   * path: url
   * component: 路由组件
   */
  {path:'' , component: HomeComponent},
  {path:'product', component: ProductComponent},
  /**404一定放在路由配置最后,以上都找不到才会路由到它 */
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
