export interface Book {
    id: number;
    title: string;
    author: string;
    isbn: string;
    publicationDate: Date;
  }
  
  export interface BookCreation {
    title: string;
    author: string;
    isbn: string;
    publicationDate: Date;
  }
  