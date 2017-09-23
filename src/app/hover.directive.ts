import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive ({ selector: '[myHover]'})

export class HighlightDirective {

    @Input() rating:number;

    constructor( private el: ElementRef) {
        el.nativeElement.style.backgroundColor='';
    }

    @HostListener('mouseenter') onMouseEnter() {
     
     if(this.rating>7)
     this.highlight("pink");
     else if(this.rating>3 && this.rating<8)
     this.highlight("lightgreen")
     else
     this.highlight("lightslategray")
    }

    @HostListener('mouseleave') onMouseLeave() {
      
      this.highlight("");
    }


    private highlight (color:string) {
    
        this.el.nativeElement.style.backgroundColor=color;

    }
}