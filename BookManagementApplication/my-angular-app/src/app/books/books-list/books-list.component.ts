import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../books.service';
import { Book } from '../books.models';
import { MatTableModule } from '@angular/material/table';
import { NgIf, DatePipe } from '@angular/common';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatTableModule, NgIf, DatePipe],
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class ProductsListComponent {
  productsService = inject(ProductsService);
  books: Book[] = []; // Initialize with an empty array
  columnsToDisplay = ['id', 'title', 'author', 'isbn', 'publicationDate', 'actions'];

  constructor() {
    this.loadProducts();
  }

  loadProducts() {
    this.productsService.getAll().subscribe(books => {
      this.books = books;
    });
  }

  delete(id: number) {
    this.productsService.delete(id).subscribe(() => {
      this.loadProducts();
    });
  }
}
