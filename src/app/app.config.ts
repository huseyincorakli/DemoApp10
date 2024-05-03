import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { PreloadAllModules, provideRouter, withPreloading } from "@angular/router";

export const appConfig:ApplicationConfig ={
    providers:[
        importProvidersFrom(),
      provideRouter([
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'home',loadComponent:()=>import('./pages/home/home.component').then(c=>c.HomeComponent)},
        {path:'about',loadComponent:()=>import('./pages/about/about.component').then(c=>c.AboutComponent)},
        {path:'contact',loadComponent:()=>import('./pages/contact/contact.component').then(c=>c.ContactComponent)},
        ],
    
        withPreloading(PreloadAllModules)
      
      ),
        
      ]
    }