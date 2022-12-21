import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  Optional,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appMyIf]',
  // This shows how to get reference when we want this to be expored
  exportAs:'appMyIf',
})
export class MyIfDirective implements OnChanges {
  @Input() appMyIf = false
  @Input() template: TemplateRef<{ value: 'testing123', $implicit: 123 }> | undefined;

  // @HostBinding('style.backgroundColor')
  //     backgroundCOlor:string;
  // hilight(color: string) {
  //   this.backgroundColor = color;
  // }

  constructor(
    @Optional() private templateRef: TemplateRef<{ value: 'testing123', $implicit: 123 }>,
    private vc: ViewContainerRef,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.appMyIf) {
      const template = this.templateRef || this.template;
      if (!template) {
        return;
      }
      this.vc.createEmbeddedView(template, {value: 'testing123', $implicit: 123});
    } else {
      this.vc.clear();
    }
  }
}

