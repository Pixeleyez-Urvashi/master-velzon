import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page500',
    templateUrl: './page500.component.html',
    styleUrls: ['./page500.component.scss'],
    standalone: false
})

/**
 * Page500 Component
 */
export class Page500Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.documentElement.setAttribute('data-sidebar-size', 'lg');
  }

}
