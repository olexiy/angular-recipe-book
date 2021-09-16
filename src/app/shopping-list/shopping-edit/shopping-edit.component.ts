import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingridientAdded = new EventEmitter<Ingridient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    this.ingridientAdded.emit(new Ingridient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
  }


}
