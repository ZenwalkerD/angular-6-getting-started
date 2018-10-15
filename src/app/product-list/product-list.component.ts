import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  filterProductList(): IProduct[] {
    var filterBy = this._filterString.toLocaleLowerCase();
    return this.products.filter(
      (item: IProduct) =>
        item.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  constructor() {
    this.filteredProducts = this.products;
    this._filterString = "";
  }

  ngOnInit() {}
  productListText: string = "Available Product List";
  filterText: string = "Filter";
  filteredByText: string = "Filter by";
  showImageBtnText: string = "Show image";
  hideImageBtnText: string = "Hide image";
  isProductImageShown: boolean = false;
  _filterString: string = "";

  get filterString(): string {
    return this._filterString;
  }

  set filterString(v: string) {
    this._filterString = v;
    this.filteredProducts = this._filterString
      ? this.filterProductList()
      : this.products;
  }

  filteredProducts: IProduct[];
  productNameTableHeaderText = "Name";
  productCodeTableHeaderText = "ID";
  productAvailableTableHeaderText = "Availability";
  productPriceTableHeaderText = "Price";
  productRatingsTableHeaderText = "Ratings";

  products: IProduct[] = [
    {
      productName: "Pipe",
      productCode: "1-",
      productAvailable: true,
      productPrice: 122,
      productRating: 4,
      productDescription: "Hand crafted richly designed wooden pipe",
      productImageURL:"170767/1340130900.svg"
    },
    {
      productName: "Japanese Knife",
      productCode: "2",
      productAvailable: true,
      productPrice: 13,
      productRating: 3,
      productDescription: "Samurai crafted hand made sharp knife",
      productImageURL: "169098/1332613362.svg"
    },
    {
      productName: "Scissors",
      productCode: "3",
      productAvailable: false,
      productPrice: 100,
      productRating: 4,
      productDescription:
        "Stainless steel sharp scissor made by highly skilled craftsmen",
      productImageURL: "449/ryanlerch-scissors-open-V2.svg"
    },
    {
      productName: "Cutting Board",
      productCode: "5",
      productAvailable: false,
      productPrice: 200,
      productRating: 4.5,
      productDescription:
        "Oak tree based beautifully crafted cutting board for your beautiful kitchen",
      productImageURL: "293104/cutting-board.svg"
    }
  ];

  toggleProductImage(): void {
    this.isProductImageShown = !this.isProductImageShown;
  }

  onRatingClicked(eventArg: number): void{
    console.log(`Rating click recieved with ${eventArg}`);
  }
}
