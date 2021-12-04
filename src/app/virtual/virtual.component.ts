import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
})
export class VirtualComponent {
  @ViewChild(CdkVirtualScrollViewport)
  scroller!: CdkVirtualScrollViewport;

  personas = Array(500).fill(0);

  constructor() {
    console.log(this.personas);
  }

  irFinal() {
    this.scroller.scrollToIndex(this.personas.length);
  }
  irMitad() {
    this.scroller.scrollToIndex(this.personas.length / 2);
  }
  irInicio() {
    this.scroller.scrollToIndex(0);
  }
}
