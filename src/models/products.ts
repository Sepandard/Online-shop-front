export class Product {
  productid: number;
  productimage?: string;
  productname: String;
  productdescription: String;
  productprice: String;
  productcategoryid?: string;

  constructor(productModel?) {
    this.productid = productModel.productid
    this.productimage = productModel.productimage
    this.productname = productModel.productname
    this.productdescription = productModel.productdescription
    this.productprice = productModel.productprice;
    this.productcategoryid = productModel.productcategoryid
  }
}