import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { setting } from 'src/app/settings/setting';

@Directive({
  selector: '[appSetColorDatePlaceholder]'
})
export class SetColorDatePlaceholderDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
    ) { }

  @Input() set appSetColorDatePlaceholder(date: Date) {
    let color: string = setting.stringConstants.color.red;

    if (SetColorDatePlaceholderDirective.getDayResidual(date) < 7 ) {
      color = setting.stringConstants.color.blue;
    } else if (SetColorDatePlaceholderDirective.getMonthResidual(date) < 1) {
      color = setting.stringConstants.color.green;
    }

    this.renderer.setStyle(this.elementRef.nativeElement, 'background', color);
  }

  private static getDayResidual(date: Date): number {
    const dateNow = new Date();

    return Math.abs(dateNow.getTime() - date.getTime()) / (1000 * 3600 * 24);
  }

  private static getMonthResidual(date: Date): number {
    const dateNow = new Date();

    const yearResidual = dateNow.getFullYear() - date.getFullYear();
    const monthResidual = dateNow.getMonth() - date.getMonth();
    const dayIncrement = dateNow.getDate() - date.getDate() > 0 ? 0 : -1;

    return yearResidual * 12 + monthResidual + dayIncrement;
  }
}
