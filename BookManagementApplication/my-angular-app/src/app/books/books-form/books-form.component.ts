import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Updated to correct import
import { RouterLink } from '@angular/router';
import { Book, BookCreation } from '../books.models';

@Component({
  selector: 'app-books-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class ProductsFormComponent implements OnInit {
  
  private readonly formBuilder = inject(FormBuilder);

  @Input({ required: true })
  title!: string;

  @Input()
  model?: Book; // Accept both undefined or a Book object for editing

  @Output()
  formPosted = new EventEmitter<BookCreation>();

  // Initialize form group with validation
  form: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    author: ['', Validators.required],
    isbn: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
    publicationDate: ['', Validators.required]
  });

  ngOnInit(): void {
    // If there is a model, populate the form with it
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  // Save the form data as BookCreation
  saveChanges() {
    if (this.form.valid) {
      const book = this.form.value as BookCreation;
      this.formPosted.emit(book);
    } else {
      // Optionally, handle form validation errors here
      this.form.markAllAsTouched(); // Show all validation errors
    }
  }

  // Getter for easy form control access
  get controls() {
    return this.form.controls;
  }
}
