import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';


export interface CarouselItem {
  title: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-Carrousel',
  templateUrl: './Carrousel.component.html',
  styleUrls: ['./Carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  
  @Input() items: CarouselItem[] = [];
  @ViewChild('carousel') carousel?: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit() {
  }
  scrollLeft() {
    this.carousel?.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel?.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
  
}
