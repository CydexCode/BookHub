import { Component, inject, Input, OnInit } from '@angular/core';
import { Book, BookCreation } from '../books.models';
import { ProductsService } from '../books.service';
import { Router } from '@angular/router';
import { ProductsFormComponent } from "../books-form/books-form.component";

@Component({
  selector: 'app-books-edit',
  standalone: true,
  imports: [ProductsFormComponent],
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  @Input()
  id!: number;

  book?: Book;

  productsService = inject(ProductsService);
  router = inject(Router);

  ngOnInit(): void {
    // Fetch book by ID to populate the form
    this.productsService.getById(this.id).subscribe(book => {
      this.book = book;
    });
  }

  saveChanges(bookCreation: BookCreation): void {
    // Update the book and navigate after success
    this.productsService.update(this.id, bookCreation).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }

}
