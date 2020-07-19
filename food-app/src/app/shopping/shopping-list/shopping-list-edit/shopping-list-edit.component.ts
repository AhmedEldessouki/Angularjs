import { Ingredient } from './../../../shared/ingredient.model';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @ViewChild('imgPathInput', { static: false }) imgPathInputRef: ElementRef;

  @Output() ingredientAdd = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}
  onAddItem(): void {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingImgPath = this.imgPathInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount, ingImgPath);
    this.ingredientAdd.emit(newIngredient);
  }
  onRemove(): void {}
  onAddEdit(): void {}
}
