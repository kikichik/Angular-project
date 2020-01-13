import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropDownDirective {
  @HostBinding('class.show') isOpen = true;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
