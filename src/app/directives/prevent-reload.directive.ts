import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appPreventReload]'
})
export class PreventReloadDirective {
  @Input() appPreventReload: string | undefined; 

  constructor(private router: Router) { }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    const currentUrl = this.router.url;
    console.log("ROUTE", currentUrl)
    console.log("Value", this.appPreventReload)
    if (currentUrl === this.appPreventReload) {
      event.preventDefault();
      console.log("Succeess");
      
    }
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.setCursor('pointer');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setCursor('default');
  }
  private setCursor(cursorType: string) {
    document.body.style.cursor = cursorType;
  }
}
