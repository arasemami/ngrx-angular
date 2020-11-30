import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  @Input() searchValue;
  constructor() { }

  ngOnInit(): void {
  }

}
