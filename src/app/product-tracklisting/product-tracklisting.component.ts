import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
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
