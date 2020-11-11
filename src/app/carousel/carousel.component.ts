import { Component, OnInit } from '@angular/core';
import { image } from 'html2canvas/dist/types/css/types/image';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
