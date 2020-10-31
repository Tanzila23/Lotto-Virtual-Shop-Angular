import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './component/home/home.component';
import { MainComponent } from './module/main/main.component';
import { SettinggsComponent } from './component/settinggs/settinggs.component';
import { ArticleSettingsComponent } from './component/article-settings/article-settings.component';
import { CouriermasterComponent } from './component/couriermaster/couriermaster.component';
import { AgrementSettingsComponent } from './component/agrement-settings/agrement-settings.component';
import { OrderHeaderComponent } from './component/order-header/order-header.component';
import { PracticeComponent } from './component/practice/practice.component';
import { TestComponent } from './component/test/test.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { ProductArticleDetailsComponent } from './component/product-article-details/product-article-details.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
{
  path:'home',component:MainComponent,
  children:[{
    path:'',component:HomeComponent,canActivate:[AuthGuard]
  
    
  },
{path:'settings',component:SettinggsComponent},
{path:'articlesettings',component:ArticleSettingsComponent},
{path:'couriermaser',component:CouriermasterComponent},
{path:'agrementsettings',component:AgrementSettingsComponent},
{path:'orderheader',component:OrderHeaderComponent},
{path:'Practise',component:PracticeComponent},
{path:'Test',component:TestComponent},
{path:'Employee',component:EmployeeComponent},
{path:'ProductArticleDetails',component:ProductArticleDetailsComponent},
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
