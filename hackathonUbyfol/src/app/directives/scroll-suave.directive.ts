import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollSuave]'
})
export class ScrollSuaveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    const targetId = this.el.nativeElement.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const yOffset = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }
}

