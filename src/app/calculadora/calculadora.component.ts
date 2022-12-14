import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  number: string = '';
  total: string = '';


  constructor() {}



  ngOnInit(): void {
  }


  element = (symbol: string) => {
    this.number += symbol;
  }

  clearSave = () => {
    this.number = '';
  }

  resolve = () => {
    this.total = eval(this.number);
  }

}
