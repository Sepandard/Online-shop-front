export class Product {
  productid: number;
  productimageid?: string;
  productname: String;
  productdescription: String;
  productprice: String;
  productcategoryid?: string;
  image_name?:string
  categoryproductname?:string

  constructor(productModel?) {
    this.productid = productModel.productid
    this.productimageid = productModel.productimageid
    this.productname = productModel.productname
    this.productdescription = productModel.productdescription
    this.productprice = productModel.productprice;
    this.productcategoryid = productModel.productcategoryid
    this.image_name = productModel.image_name
    this.categoryproductname = productModel.categoryproductname
  }
}