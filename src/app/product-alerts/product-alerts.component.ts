import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent  {
  @Input() product;
  //tức là component này sẽ emit ra 1 event notify khi người dùng click nút, sau đó thằng compoent cha của thằng này sẽ nhận và xử lý
  @Output() notify = new EventEmitter();

}