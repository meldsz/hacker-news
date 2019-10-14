import { Component } from '@angular/core';
import NewsService from "../../services/news-data.service";
import { endpoints } from '../../utils/endpoints';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title: string;
  public breadcrumb: string;
  public newsData: any;
  public pageNumber: number;
  public isProgressBarVisible: boolean;
  
  constructor(private _newsService: NewsService) {
    this.title = 'hacker-news';
    this.breadcrumb = 'Top News';
    this.newsData = [];
    this.pageNumber = 0;
    this.isProgressBarVisible = false;
  }

  // get the news data when the component loads
  ngOnInit() {
    this.getTopNews('Top');
  }

  getTopNews(category: string) {
    // set endpoint and breadcrumb based on the news category
    let url = endpoints.topStories;
    switch (category) {
      case 'Best':
        url = endpoints.bestStories;
        this.breadcrumb = 'Best Stories';
        break;
      case 'Ask':
        url = endpoints.askStories;
        this.breadcrumb = 'Ask Hacker News';
        break;
      case 'New':
        url = endpoints.newStories;
        this.breadcrumb = 'New Stories';
        break;
      case 'Show':
        url = endpoints.showStories;
        this.breadcrumb = 'Show Stories';
        break;
      case 'Jobs':
        url = endpoints.jobStories;
        this.breadcrumb = 'Jobs';
        break;
      case 'Top':
      default:
        url = endpoints.topStories;
        this.breadcrumb = 'Top Stories';
        break;
    }
    // display the progress bar
    this.isProgressBarVisible = true;
    this._newsService.getStories(url).subscribe(stories => {
      this.newsData = stories.map(item => {
        return item;
      });
      // do not display the progress bar
      this.isProgressBarVisible = false;
    });
  }

}
