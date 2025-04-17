import { Component, OnInit } from '@angular/core';
import { cryptoICOList } from 'src/app/core/data';
import { ICOModel } from 'src/app/store/Crypto/crypto_model';

@Component({
  selector: 'app-ico',
  templateUrl: './ico.component.html',
  styleUrls: ['./ico.component.scss']
})

/**
 * ICO Component
 */
export class IcoComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  // Keep the original property names to maintain compatibility with template
  chatMessagesData!: ICOModel[];
  chatMessageDatas: ICOModel[];

  term: any;

  constructor() {
    this.chatMessageDatas = [];
  }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Crypto' },
      { label: 'ICO List', active: true }
    ];

    // Chat Data Get Function
    this._fetchData();
  }

  // Chat Data Fetch
  private _fetchData() {
    this.chatMessagesData = cryptoICOList;
    this.chatMessageDatas = Object.assign([], this.chatMessagesData);
  }

  // Filtering - keep original name to match template
  isstatus?: any
  SearchData() {
    const status = (document.getElementById("choices-single-default2") as HTMLInputElement).value;
    const rating = (document.getElementById("choices-single-default") as HTMLInputElement).value;
    const date = (document.getElementById("isDate") as HTMLInputElement).value;

    // Start with the original data
    let filteredData = [...this.chatMessagesData];

    // Apply filters only if they have values
    if (date) {
      filteredData = filteredData.filter((ico: any) => ico.date === date);
    }

    if (status) {
      filteredData = filteredData.filter((ico: any) => ico.status === status);
    }

    if (rating) {
      filteredData = filteredData.filter((ico: any) => {
        // Check if rating exists and convert both to numbers for comparison
        return ico.rating !== undefined && Number(ico.rating) >= Number(rating);
      });
    }

    // Update filtered data
    this.chatMessageDatas = filteredData;
  }

  /**
   * Reset all filters
   */
  resetFilters(): void {
    // Reset filter input elements
    (document.getElementById("choices-single-default2") as HTMLInputElement).value = '';
    (document.getElementById("choices-single-default") as HTMLInputElement).value = '';
    (document.getElementById("isDate") as HTMLInputElement).value = '';

    // Reset filtered data to original data
    this.chatMessageDatas = [...this.chatMessagesData];
  }
}