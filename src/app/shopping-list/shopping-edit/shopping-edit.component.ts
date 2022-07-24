 import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }



  onAddItem() {
    const newIngridient = new Ingridient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.shoppingListService.addIngridient(newIngridient);
  }


}
