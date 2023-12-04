import { Component, Injectable,HostListener} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
// import {Subject} from 'rxjs';

// @Injectable()
// export class CustomPaginatorIntl {
//   constructor(private paginator: MatPaginatorIntl) {
//     this.paginator = this.getCustomPaginator();
//   }

//   getCustomPaginator(): MatPaginatorIntl {
//     const customPaginator = new MatPaginatorIntl();

//     customPaginator.firstPageLabel = 'First page';
//     customPaginator.itemsPerPageLabel = 'Items per page:';
//     customPaginator.lastPageLabel = 'Last page';
//     customPaginator.nextPageLabel = 'Next page';
//     customPaginator.previousPageLabel = 'Previous page';

//     customPaginator.getRangeLabel = (page: number, pageSize: number, length: number): string => {
//       if (length === 0 || pageSize === 0) {
//         return `0 of ${length}`;
//       }

//       const startIndex = page * pageSize;
//       const endIndex = Math.min(startIndex + pageSize, length);

//       return `${startIndex + 1} - ${endIndex} of ${length}`;
//     };

//     return customPaginator;
//   }
// }
@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
  // providers: [{ provide: MatPaginatorIntl, useClass: CustomPaginatorIntl  }],
})
export class GridListComponent {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Determine when to display the button based on scroll position
    this.showScrollButton = window.pageYOffset > 100;
  }

  scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
    cards = [
        {
            title: 'Notice Board',
            description: 'Important notices and announcements.'
            // Add more properties as needed
        },
        {
            title: 'Search Scholarship',
            description: 'Find scholarships for your education.'
            // Add more properties as needed
        },
        {
            title: 'Education Loan',
            description: 'Information about education loans.'
            // Add more properties as needed
        }
        // Add more cards as necessary
    ];
    items: any[] = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Orange' },
      // Add more items here...
    ];
    searchTerm: string = '';
    scholarships: any[] = []; 
    constructor() {
      // this.filteredItems = this.items;
    }
  
    ngOnInit(): void {
      // Fetch scholarship data from an API or set predefined data
      // Example: Assuming this.scholarships is populated with fetched scholarship data
      this.scholarships = [
        { name: 'MahaDBT', amount: 1000, deadline: '2023-12-31', link: 'Link 1' },
        { name: 'Leena Poonawala Scholarship', amount: 1500, deadline: '2023-11-30', link: 'Link 2' },
        { name: 'Perdue Scholarship', amount: 5500, deadline: '2023-11-30', link: 'Link 3' },
        { name: 'Kotak Kanya Scholarships', amount: 6500, deadline: '2023-11-30', link: 'Link 4' },
        
        // Add more scholarship objects here...
      ];
    }
    filterScholarships() {
      return this.scholarships.filter(scholarship =>
        scholarship.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
}