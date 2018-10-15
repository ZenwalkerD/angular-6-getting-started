import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments-to-products',
  templateUrl: './comments-to-products.component.html',
  styleUrls: ['./comments-to-products.component.css']
})
export class CommentsToProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() productId : string;
  buttonText: string = "Add comments";


  inputDesription: string;

  onClick(): void
  {

  }
}
