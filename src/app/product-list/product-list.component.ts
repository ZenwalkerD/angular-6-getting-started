import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductDataService } from "./services/product-data.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {

  constructor(private productDataService: ProductDataService) {
    this._filterString = "";
  }

  filteredProducts: IProduct[];

  get filterString(): string {
    return this._filterString;
  }

  ngOnInit() {
    this.productDataService.getProductsData().subscribe(productItem => {
      this.products = productItem;
      this.filteredProducts = this.products;
    },
      error => this.errorMessage = <any>error);
  }

  onRatingClicked(eventArg: number): void {
    console.log(`Rating click recieved with ${eventArg}`);
  }

  private errorMessage: string;

  products: IProduct[];

  set filterString(v: string) {
    this._filterString = v;
    this.filteredProducts = this._filterString
      ? this.filterProductList()
      : this.products;
  }

  toggleProductImage(): void {
    this.isProductImageShown = !this.isProductImageShown;
  }
  _filterString: string = "";
  filterProductList(): IProduct[] {
    var filterBy = this._filterString.toLocaleLowerCase();
    return this.products.filter(
      (item: IProduct) =>
        item.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  filterText: string = "Filter";
  filteredByText: string = "Filter by";
  hideImageBtnText: string = "Hide image";
  isProductImageShown: boolean = false;
  productAvailableTableHeaderText = "Availability";
  productCodeTableHeaderText = "ID";
  productListText: string = "Available Product List";
  productNameTableHeaderText = "Name";
  productPriceTableHeaderText = "Price";
  productRatingsTableHeaderText = "Ratings";
  showImageBtnText: string = "Show image";
}
