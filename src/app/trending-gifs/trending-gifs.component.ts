import { Component } from '@angular/core';
import { TrendingGifsService } from '../services/trending-gifs.service';

@Component({
  selector: 'app-trending-gifs',
  templateUrl: './trending-gifs.component.html',
  styleUrls: ['./trending-gifs.component.scss']
})
export class TrendingGifsComponent {
  gifsData: any[] = [];
  searchText: string = '';
  recordsPerPage: number = 10;
  currentPage: number = 1;

  constructor(private trendingGifyService: TrendingGifsService) { }

  ngOnInit() {
    this.getGifsData();
  }

  searchData() {
    this.currentPage = 1;
    this.getGifsData();
  }

  getGifsData() {
    let startIndex = (this.currentPage - 1) * this.recordsPerPage;
    if (this.searchText) {
      this.trendingGifyService.searchData(this.searchText, startIndex, this.recordsPerPage)
        .subscribe((response: any) => {
          this.gifsData = response.data;
        });
    } else {
      this.trendingGifyService.getGifsData(startIndex, this.recordsPerPage)
        .subscribe((response: any) => {
          this.gifsData = response.data;
        });
    }
  }
  

  loadPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage -1;
      this.getGifsData();
    }
  }
  
  loadNextPage() {
    this.currentPage = this.currentPage+1
    this.getGifsData();
  }
}

