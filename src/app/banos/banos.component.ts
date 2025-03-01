import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-banos',
  imports: [RouterModule],
  templateUrl: './banos.component.html',
  styleUrl: './banos.component.css',
  standalone: true,
})
export class BanosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.checkVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    const images = document.querySelectorAll('img.animated');
    images.forEach(image => {
      const rect = image.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        image.classList.add('visible');
      }
    });
  }
}
