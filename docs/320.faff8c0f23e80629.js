"use strict";(self.webpackChunkang=self.webpackChunkang||[]).push([[320],{3320:(M,l,r)=>{r.r(l),r.d(l,{ShoppingListModule:()=>Z});var m=r(9300),d=r(5030),t=r(3020),u=r(2457),a=r(9102),g=r(4755),h=r(9985);const f=["f"];function S(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.onDelete())}),t._uU(1,"Delete"),t.qZA()}}let b=(()=>{class e{constructor(n){this.slService=n,this.editMode=!1}ngOnInit(){this.subscription=this.slService.startEditing.subscribe(n=>{this.edidtedItemIndex=n,this.editMode=!0,this.edidtedItem=this.slService.getIngredient(n),this.slForm.setValue({name:this.edidtedItem.name,amount:this.edidtedItem.amount})})}onSubmit(n){const i=n.value,o=new h.o(i.name,i.amount);this.editMode?this.slService.updateIngredient(this.edidtedItemIndex,o):this.slService.addIngredient(o),this.editMode=!1,n.reset()}onClear(){this.slForm.reset(),this.editMode=!1}onDelete(){this.slService.deleteIngredient(this.edidtedItemIndex),this.onClear()}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u._))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-edit"]],viewQuery:function(n,i){if(1&n&&t.Gf(f,5),2&n){let o;t.iGM(o=t.CRH())&&(i.slForm=o.first)}},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],[1,"btn","btn-toolbar"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(o);const c=t.MAs(3);return t.KtG(i.onSubmit(c))}),t.TgZ(4,"div",0)(5,"div",4)(6,"label",5),t._uU(7,"Name"),t.qZA(),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",7)(10,"label",8),t._uU(11,"Amount"),t.qZA(),t._UZ(12,"input",9),t.qZA()(),t.TgZ(13,"div",0)(14,"div",10)(15,"button",11),t._uU(16),t.qZA(),t.YNc(17,S,2,0,"button",12),t.TgZ(18,"button",13),t.NdJ("click",function(){return i.onClear()}),t._uU(19,"Clear"),t.qZA()()()()()()}if(2&n){const o=t.MAs(3);t.xp6(15),t.Q6J("disabled",!o.valid),t.xp6(1),t.Oqu(i.editMode?"Update":"Add"),t.xp6(1),t.Q6J("ngIf",i.editMode)}},dependencies:[d._Y,d.Fj,d.wV,d.JJ,d.JL,d.Q7,d.c5,d.On,d.F,g.O5]}),e})();function v(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"a",4),t.NdJ("click",function(){const p=t.CHM(n).index,c=t.oxw();return t.KtG(c.onEditItem(p))}),t._uU(1),t.qZA()}if(2&e){const n=s.$implicit;t.xp6(1),t.AsE(" ",n.name," (",n.amount,") ")}}let C=(()=>{class e{constructor(n,i){this.slService=n,this.loggingService=i}ngOnInit(){this.ingredients=this.slService.getIngredients(),this.igChangeSub=this.slService.ingredientsChanged.subscribe(n=>{this.ingredients=n}),this.loggingService.printLog("Hello from ShoppingListComponent ngOnInIt")}onEditItem(n){this.slService.startEditing.next(n)}ngOnDestroy(){this.igChangeSub.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u._),t.Y36(a.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-shopping-edit")(3,"hr"),t.TgZ(4,"ul",2),t.YNc(5,v,2,2,"a",3),t.qZA()()()),2&n&&(t.xp6(5),t.Q6J("ngForOf",i.ingredients))},dependencies:[g.sg,b]}),e})();var I=r(4466);let Z=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.u5,m.Bz.forChild([{path:"",component:C}]),I.m]}),e})()}}]);