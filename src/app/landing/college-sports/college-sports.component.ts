import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
    selector: 'app-college-sports',
    templateUrl: './college-sports.component.html',
    styleUrls: ['./college-sports.component.scss'],
    standalone: false
})

/**
 * college-sports Component
 */
export class CollegeSportsComponent {

  currentSection = 'home';
  isCollapsed = true;

  constructor() { }

  /**
   * Window scroll method
   * Using HostListener to properly handle scroll events
   */
  @HostListener('window:scroll', ['$event'])
  windowScroll(): void {
    const navbar = document.getElementById('navbar');
    const backToTopButton = document.getElementById('back-to-top') as HTMLElement;

    // Update navbar styling based on scroll position
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar?.classList.add('is-sticky');
    } else {
      navbar?.classList.remove('is-sticky');
    }

    // Show or hide back-to-top button based on scroll position
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      if (backToTopButton) {
        backToTopButton.style.display = "block";
      }
    } else {
      if (backToTopButton) {
        backToTopButton.style.display = "none";
      }
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string): void {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu(): void {
    document.getElementById('navbarSupportedContent')?.classList.toggle('show');
    this.isCollapsed = !this.isCollapsed;
  }

  /**
   * When the user clicks on the button, scroll to the top of the document
   */
  topFunction(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}