import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import {ShoppingListService} from '../shoppinglist.service';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }



  addIngredient(name: string, amount: number) {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingValue = this.amountInputRef.nativeElement.value;
    this.shoppingListService.addIngredient(new Ingredient(ingName, ingValue));
  }
}
