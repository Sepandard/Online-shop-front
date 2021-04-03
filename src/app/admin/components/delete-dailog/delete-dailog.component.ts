import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dailog',
  templateUrl: './delete-dailog.component.html',
  styleUrls: ['./delete-dailog.component.css']
})
export class DeleteDailogComponent implements OnInit {

 rowId: number;
  controller;
  config = {
    message: 'Are You Sure?',
    submitBtnTitle: 'Delete',
    cancelBtnTitle: 'Cancel',
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.config = {
        message: data.message ? data.message : this.config.message,
        submitBtnTitle: data.submitBtnTitle
          ? data.submitBtnTitle
          : this.config.submitBtnTitle,
        cancelBtnTitle: data.cancelBtnTitle
          ? data.cancelBtnTitle
          : this.config.cancelBtnTitle,
      };
    }
  }
  ngOnInit(): void {}

  onDelete() {
    if (this.data && this.data.onDelete) {
      if (typeof this.data.onDelete === 'function') {
        this.data.onDelete();
      } else {
        throw new Error('field onDelete must be function');
      }
    }
  }
}
