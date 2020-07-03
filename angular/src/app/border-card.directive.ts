import { Directive, ElementRef, HostListener, Host } from '@angular/core';

@Directive({ 
  selector: '[gameBorderCard]' 
})

export class gameBorderCard {
  constructor(private el: ElementRef) {
    this.setBorder('#f5f5f5');
    this.setHeight(32);
   }

   @HostListener('mouseenter') onMouseEnter() {
     this.setBorder('#4a4342');
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

   private setBorder(color: string) {
     let border = 'solid 4px ' + color;
     this.el.nativeElement.style.border = border;
   }

   private setHeight(height: number) {
     this.el.nativeElement.style.height = height + 'rem';
   }
}