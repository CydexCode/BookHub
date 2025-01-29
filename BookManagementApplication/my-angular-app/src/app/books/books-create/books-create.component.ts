import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { ProductsService } from '../books.service';
import { BookCreation } from '../books.models';
import { ProductsFormComponent } from "../books-form/books-form.component";

@Component({
  selector: 'app-books-create',
  standalone: true,
  imports: [ProductsFormComponent],
  templateUrl: './books-create.component.html',
  styleUrl: './books-create.component.css'
})
export class ProductsCreateComponent {
  productsService = inject(ProductsService);
  router = inject(Router);

  saveChanges(book: BookCreation){
    this.productsService.create(book).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}