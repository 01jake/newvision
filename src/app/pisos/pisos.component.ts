import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-pisos',
  imports: [RouterModule],
  templateUrl: './pisos.component.html',
  styleUrl: './pisos.component.css',
  standalone: true
})
export class PisosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.checkVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    const elements = document.querySelectorAll('.animated');
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add('visible');
      }
    });
  }
}
