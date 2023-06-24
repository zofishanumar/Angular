import { Component,  OnDestroy,  OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

 



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
    editMode = false;
    edidtedItemIndex: number;
    edidtedItem: Ingredient;

  constructor(private slService: ShoppingListService) {}

 ngOnInit() {
    this.subscription =  this.slService.startEditing.subscribe((index: number) => {
      
            this.edidtedItemIndex =  index;         
            this.editMode = true;
            this.edidtedItem = this.slService.getIngredient(index);
             this.slForm.setValue({
              name: this.edidtedItem.name,
              amount: this.edidtedItem.amount
            });
    });
  }
 onSubmit( form: NgForm){
     const value = form.value;
      const newIngredient = new Ingredient(value.name, value.amount);
     if (this.editMode){
      this.slService.updateIngredient(this.edidtedItemIndex, newIngredient);
     } else{
        this.slService.addIngredient(newIngredient);
     }
    this.editMode = false;
    form.reset();
    }


    onClear(){
      this.slForm.reset();
      this.editMode = false;
      
    }
    onDelete() {
      this.slService.deleteIngredient(this.edidtedItemIndex);
      this.onClear();
    }
 ngOnDestroy() {
   this.subscription.unsubscribe();
 }
}
