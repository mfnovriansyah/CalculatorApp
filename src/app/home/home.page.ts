import { Component } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numberShow = '0';
  ColumnButtons = [
    [7, 8, 9, '+'],
    [4, 5, 6, '-'],
    [1, 2, 3, 'x'],
    ['c', 0, '=', '÷']
  ];
  startCalculateNew = true;
  oldButtonValue = '0';
  operatorArithmetic = '+';

 
  constructor() {
  }
  onClickButton(buttonValue) {
    console.log(buttonValue);
    // checking button value if type is number
    if (isNumber(buttonValue)) {
      if (this.startCalculateNew)
        this.numberShow = '' + buttonValue;
      else
        this.numberShow += '' + buttonValue;
      this.startCalculateNew = false;
    }
    else if (buttonValue === 'c') {
      this.numberShow = '0';
      this.startCalculateNew = true;
    }
    else if (buttonValue === '=') {
      if (this.operatorArithmetic === 'x')
        this.numberShow = '' + (parseInt(this.oldButtonValue) * parseInt(this.numberShow));
      else if (this.operatorArithmetic === '-')
        this.numberShow = '' + (parseInt(this.oldButtonValue) - parseInt(this.numberShow));
      else if (this.operatorArithmetic === '+')
        this.numberShow = '' + (parseInt(this.oldButtonValue) + parseInt(this.numberShow));
      else if (this.operatorArithmetic === '÷')
        if(this.numberShow === '0'){
          this.numberShow = 'undefined';
        }
        else{
          this.numberShow = '' + (parseInt(this.oldButtonValue) / parseInt(this.numberShow));
        }
      this.startCalculateNew = true;
    }
    else {
      this.startCalculateNew = true;
      this.oldButtonValue = this.numberShow;
      this.operatorArithmetic = buttonValue;
    }
  }
  
}
