import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { AdminService } from '../../shared/admin.service';

@Component({
  selector: 'app-order-manger',
  templateUrl: './order-manger.component.html',
  styleUrls: ['./order-manger.component.css']
})
export class OrderMangerComponent implements OnInit {
  searchForm = new FormGroup({
  
    searchID: new FormControl(''),
  });
  getOrder(){
    let orderArr :any[]=[]

    this.adminSrv.getOrder().subscribe((data:any)=>{
      console.log(data.data[0]);
  
      
    })
  }
  onSubmitImportedFilePattern(){
   
    this.adminSrv.getOrder(this.searchForm.value.searchID).subscribe(data=>{
      console.log(data);
      
    })
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private adminSrv:AdminService) { }

  ngOnInit(): void {
    this.getOrder()
  }

}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 21, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 31, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 41, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}