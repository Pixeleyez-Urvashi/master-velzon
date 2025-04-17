import { Component } from '@angular/core';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})

/**
 * Pricing Component
 */
export class PricingComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Pricing', active: true }
    ];
  }
}
