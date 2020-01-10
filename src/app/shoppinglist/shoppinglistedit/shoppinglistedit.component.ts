import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }



  addIngredient(name: string, amount: number) {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingValue = this.amountInputRef.nativeElement.value;
    this.IngredientAdded.emit(new Ingredient(ingName, ingValue));
  }
}
