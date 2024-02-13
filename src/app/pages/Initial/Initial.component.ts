import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../Carrousel/Carrousel.component';

@Component({
  selector: 'app-Initial',
  templateUrl: './Initial.component.html',
  styleUrls: ['./Initial.component.scss']
})
export class InitialComponent implements OnInit {
  listaItems: CarouselItem[] = [
    {
      title: 'Palworld',
      category: 'Aventura',
      image: '../assets/Games/palworld-1705691572614.jpg'
    },
    {
      title: 'Item 2',
      category: 'Category 2',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Item 3',
      category: 'Category 3',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Item 4',
      category: 'Category 4',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Item 5',
      category: 'Category 5',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Item 6',
      category: 'Category 6',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Item 3',
      category: 'Category 3',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Item 4',
      category: 'Category 4',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Item 5',
      category: 'Category 5',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Item 6',
      category: 'Category 6',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Item 3',
      category: 'Category 3',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Item 4',
      category: 'Category 4',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Item 5',
      category: 'Category 5',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Item 6',
      category: 'Category 6',
      image: 'https://via.placeholder.com/150'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
