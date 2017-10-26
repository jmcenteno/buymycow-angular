import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit, OnChanges {

  pages: any[];

  @Input() products: any[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

    this.pages = this.paginate(this.products);

  }

  private paginate(arr): any[] {

    const pages = [];
    let page = [];

    arr.forEach((item, i) => {

      page.push(item);

      if ((i + 1) % 3 === 0 || (i + 1) >= arr.length) {
        pages.push(page);
        page = [];
      }

    });

    return pages;

  }

}
