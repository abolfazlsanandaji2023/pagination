import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSetClass]'
})
export class SetClassDirective {
@Input('appSetClass') set objInput(params:any){
  console.log(params);
  for (let key in params) {
    console.log(key);
    if(params[key]){
      this.elementRef.nativeElement.classList.add(key);
    }  else
    this.elementRef.nativeElement.classList.remove(key);  
  }
}
  constructor(private elementRef:ElementRef ) {
   
   }

}
