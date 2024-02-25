import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scrolled = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrolled = offset > 10;
  }

  GoToGames(){
    this.router.navigate(['/stadistic-games']);
  }
  GoHome(){
    this.router.navigate(['/home']);
  }
  GoToPlatforms(){
    this.router.navigate(['/platforms']);
  }
  GoToContacts(){
    this.router.navigate(['/contacts']);
  }
}