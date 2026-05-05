import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'skincare',
        loadChildren: () => import('../skincare/skincare.module').then(m => m.SkincarePageModule)
      },
      {
        path: 'obat',
        loadChildren: () => import('../obat/obat.module').then(m => m.ObatPageModule)
      },
      {
        path: 'checklist',
        loadChildren: () => import('../checklist/checklist.module').then(m => m.ChecklistPageModule)
      },
      {
        path: 'tips',
        loadChildren: () => import('../tips/tips.module').then(m => m.TipsPageModule) // ✅ FIX
      },
      {
        path: 'profil',
        loadChildren: () => import('../profil/profil.module').then(m => m.ProfilPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}