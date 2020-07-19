import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostListener('aria-expanded') isOpen = false;
  // tslint:disable-next-line: typedef
  @HostListener('click') toggleOn() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}
}
