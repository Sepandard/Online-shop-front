import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../../shared/admin.service';

@Component({
  selector: 'app-product-manger',
  templateUrl: './product-manger.component.html',
  styleUrls: ['./product-manger.component.css']
})
export class ProductMangerComponent implements OnInit {
  buttons : Button[] = [{name:'Delete',type:'delete',color:'warn',icon:'delete'},{name:'Edit',type:'edit',color:'primary',icon:'edit'}]
  disableName  = false
  displayedColumns: string[] = ['productid', 'productname', 'productprice', 'productdescription', 'categoryproductname' , 'oparator'];
  prodcutArrName :any [] =[]
  dataSource = new MatTableDataSource(this.prodcutArrName);
  constructor(private adminSrv:AdminService) { }

  ngOnInit(): void {
    this.onSubmitImportedFilePattern()
  }

  searchForm = new FormGroup({
  
    searchID: new FormControl(''),
    searchName: new FormControl(''),
  });
  onClick(){
    let disableName : Boolean = false
    return disableName
  }
  onSubmitImportedFilePattern(){


    this.adminSrv.getProduct(this.searchForm.value.searchName,this.searchForm.value.searchID).subscribe((data:any)=>{

      if(data){

        this.prodcutArrName = data.data[0].Product;
        this.dataSource = new MatTableDataSource(this.prodcutArrName);
      }
    })
  
    
      
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onClickButton($event) {
    console.log($event)
  }

}

export interface Button{
  type:String,
  color:String
  name:string,
  icon:String
}

