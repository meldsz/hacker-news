import { Component, Input  } from '@angular/core';

@Component({
    selector: 'news-content',
    templateUrl: './news-content.component.html',
    styleUrls: ['./news-content.component.css'],
})

export default class NewsContentComponent {
    @Input() newsData: any;
}
