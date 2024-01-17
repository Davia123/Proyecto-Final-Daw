import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GameVerse';
  mostrarHeaderFooter = true;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        if (event.url === '/') {
          this.mostrarHeaderFooter = false;
        } else {
          this.mostrarHeaderFooter = true;
        }
        console.log(this.mostrarHeaderFooter);
      }
    });
    console.log(this.router.url);
  }
}
