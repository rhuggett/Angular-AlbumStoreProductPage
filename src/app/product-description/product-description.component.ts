import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from '../album';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo: Album;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _productService: ProductService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this._productService.getAlbum(id).subscribe(reponse => 
        this.albumInfo = reponse);
    }
  }

}
