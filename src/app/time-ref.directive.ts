import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[appTimeRef]'
})
export class TimeRefDirective {
@Input('appTimeRef') set render(time:number){
  for (let a = 0; a < time; a++) {
    this.vcRef.createEmbeddedView(this.templateRef,{index:a,color:'red'});
  }
}
  constructor(private templateRef:TemplateRef<any>,private vcRef:ViewContainerRef) {   
   }
}
