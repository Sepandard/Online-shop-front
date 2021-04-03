import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Button } from '../product-manger/product-manger.component';

@Component({
  selector: 'app-button-renderer',
  templateUrl: './button-renderer.component.html',
  styleUrls: ['./button-renderer.component.css'],
})
export class ButtonRendererComponent implements OnInit {
  @Input() buttonConfig: Button[] = [];
  @Input() row: any;
  @Output() onClickButton = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
}
