import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css'],
  styles: [
    `
      /deep/ .carousel-indicators li {
        background-color: black;
        width: 36px;
        height: 5px;
      }

      /deep/ .carousel-indicators {
        bottom: -50px;
      }

      /deep/ .carousel-control-prev-icon {
        background-image: url('https://apufpel.com.br/assets/img/seta_prim.png');
        width: 30px;
        height: 30px;
      }

      /deep/ .carousel-control-next-icon {
        background-image: url('https://apufpel.com.br/assets/img/seta_ult.png');
        width: 30px;
        height: 30px;
      }

      /deep/ .carousel-control-next {
        right: -115px;
      }

      /deep/ .carousel-control-prev {
        left: -115px;
      }
    `,
  ],
})
export class HomeSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  images = [
    '../../assets/static-images/slider1.jpg',
    '../../assets/static-images/slider2.jpg',
    '../../assets/static-images/slider3.jpg',
    '../../assets/static-images/slider4.jpg',
    '../../assets/static-images/slider5.jpg',
  ];
}
