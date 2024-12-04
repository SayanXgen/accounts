import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'select-company',
    loadChildren: () => import('./select-company/select-company.module').then( m => m.SelectCompanyPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'sales-bill',
    loadChildren: () => import('./sales-bill/sales-bill.module').then( m => m.SalesBillPageModule)
  },
  {
    path: 'other-page',
    loadChildren: () => import('./other-page/other-page.module').then( m => m.OtherPagePageModule)
  },
  {
    path: 'billing-list',
    loadChildren: () => import('./billing-list/billing-list.module').then( m => m.BillingListPageModule)
  },
  {
    path: 'other-list',
    loadChildren: () => import('./other-list/other-list.module').then( m => m.OtherListPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'voice-modal',
    loadChildren: () => import('./voice-modal/voice-modal.module').then( m => m.VoiceModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
