import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./authentication/components/pages/login-page/login-page.component";
import {BucketPageComponent} from "./bucket/components/pages/bucket-page/bucket-page.component";
import {LoginActiveGuard} from "./authentication/guards/login-active.guard";

const routes: Routes = [
    {
        path: 'auth',
        component: LoginPageComponent
    },
    {
        path: 'bucket',
        component: BucketPageComponent,
        canActivate: [LoginActiveGuard]
    },
    {
        path: '**',
        redirectTo: 'auth'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
