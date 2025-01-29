import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  
  // Inject Router to perform navigation
  constructor(private router: Router) {}

  // Method to navigate to the products page
  goToProducts() {
    this.router.navigate(['/books']);
  }
}
