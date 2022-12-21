import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  Optional, HostListener
} from '@angular/core';

@Directive({
  selector: '[appMyRouterLink]'
})
export class MyRouterLinkDirective implements OnInit, OnDestroy {



  unsub: (() => void)[] = [];
  viewHasBeenCreated = false;
  // custom directive params
  @Input() appMyRouterLink!: string;
  @Input() template!: TemplateRef<any>;

  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
              // Location of our Directive in the View
              private vc: ViewContainerRef,
              @Optional() private templateRef: TemplateRef<any>,
  ) {
    this.templateRef = templateRef;
    console.log(this.templateRef)
    // Gives us Native element of our directive
    console.log(this.elRef)
    // renderer works in this new environment
    // this.renderer.setAttribute(this.elRef.nativeElement, 'data-test', '123')
    //  logic in angular can be separated in web-worker (extra thread communicating with the main)
    //   the web-worker cannot access DOM (deadlock)
    //   to run angular in another thread we need to communicate with dom elements
    //  putting document.getElementById() in component is illegal and should be avoided
    //  if its absolutely necessary change main.ts by adding providers
    //  We can attach event listeners like this as well
    //  when element is destroyed listenesrs also but we can always clear it ourselves
    this.unsub.push(this.renderer.listen(this.elRef.nativeElement, 'mouseover', this.mouseOverHandler))
    this.unsub.push(this.renderer.listen(this.elRef.nativeElement, 'mouseleave', this.mouseLeaveHandler))
    //  Now to make the routerlink work we just do a push on a click event to do redirect to our path from @Input()
  }

  // making it an arrow function so we dont lose the this
  mouseOverHandler = (e: MouseEvent) => {
    // console.log(e)
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red')
    if (this.viewHasBeenCreated) {
      return;
    }
    this.vc.createEmbeddedView(this.template);
    this.viewHasBeenCreated = true;
  }
  mouseLeaveHandler = (e: MouseEvent) => {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'initial');
    this.vc.clear();
    this.viewHasBeenCreated = false;
  }

  ngOnDestroy(): void {
    this.unsub?.forEach(fn => fn());
  }

  ngOnInit(): void {
    console.log(this.appMyRouterLink, this.template)
  }
}
