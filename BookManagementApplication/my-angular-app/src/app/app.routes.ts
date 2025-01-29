import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductsListComponent } from './books/books-list/books-list.component';
import { ProductsCreateComponent } from './books/books-create/books-create.component';
import { ProductsEditComponent } from './books/books-edit/books-edit.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'books', component: ProductsListComponent},
    {path: 'books/create', component: ProductsCreateComponent},
    {path: 'books/edit/:id', component: ProductsEditComponent}
];