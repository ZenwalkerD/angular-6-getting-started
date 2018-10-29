export interface IProduct {
  productName: string;
  productCode: string;
  productAvailable: boolean;
  productPrice: number;
  productRating: number;
  productImageURL: string;
  productDescription: string;
  productComments: IProductComments[];
}

export interface IProductComments
{
  id:number;
  comment : string;
  likes: number;
  dislikes: number;
}