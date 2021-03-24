
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  total: number;
  phepTinh: string;
  value1: any;
  value2: any;
  isValue2: boolean;
  totalStr: string;

  constructor() { }

  ngOnInit(): void {
    this.total = 0;
    this.value1 = '0';
    this.value2 = '';
    this.isValue2 = false;
    this.totalStr = '';
  }
  banPhim(value: any) {
    this.totalStr = '';
    if (this.phepTinh){
      if (this.value2 === '0'){
        this.value2 = value;
      }else{
        this.value2 += value;
      }
      this.isValue2 = true;
    }else {
      if (this.value1 === '0'){
        this.value1 = value;
      }else {
        this.value1 += value;
      }
    }
  }
  setPhepTinh(phepTinh) {
    this.totalStr = '';
    this.phepTinh = phepTinh;
  }
  ketQua() {
    if (this.phepTinh) {
      if (this.phepTinh === '+') {
        this.total = parseFloat(this.value1) + parseFloat(this.value2);
      } else if (this.phepTinh === '-') {
        this.total = parseFloat(this.value1) - parseFloat(this.value2);
      } else if (this.phepTinh === '*') {
        this.total = parseFloat(this.value1) * parseFloat(this.value2);
      } else if (this.phepTinh === '/') {
        this.total = parseFloat(this.value1) / parseFloat(this.value2);
      } else if (this.phepTinh === '1/2') {
        this.total = parseFloat(this.value1) / 2;
      } else if (this.phepTinh === 'x^2') {
        // this.total = parseInt(this.value1, 0) * parseInt(this.value1, 0);
        this.total = Math.pow(this.value1, 2);
      } else if (this.phepTinh === 'căn2') {
        this.total = Math.sqrt(parseFloat(this.value1 ));
      } else if (this.phepTinh === '%'){
        this.total = parseFloat(this.value1) * parseFloat(this.value2) / 100;
      }
      this.totalStr =   (this.value1 ? this.value1.toString() : '') + (this.phepTinh ?  this.phepTinh.toString() : '') + (this.value2 ? this.value2.toString() : '') + ' = ' + this.total;
      this.value1 = this.total.toString();
      this.isValue2 = false;
      this.value2 = '';
      this.phepTinh = '';
    }
  }
  reset() {
    this.value1 = '0';
    this.value2 = '';
    this.total = 0;
    this.phepTinh = '';
    this.totalStr = '';
  }
  screen() {
    if (this.totalStr)
    {
      return  this.totalStr;
    }
    else {
      return (this.value1 ? this.value1.toString() : '') + (this.phepTinh ?  this.phepTinh.toString() : '') + (this.value2 ? this.value2.toString() : '');
    }

  }

}
