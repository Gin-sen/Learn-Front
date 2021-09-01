import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  error: number;
  errorList: Array<{title: string, description: string, linked: boolean, link?: string, linkTxt?: string}> = [
    {title: 'Page not Found', description: 'The page you called for don\'t exist.', linked: false},
    // {title: '', description: '', linked: true, link: '', linkTxt: ''}, use this line to create new error type
  ];

  constructor(private route: ActivatedRoute) {
    this.error = 0;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.error = params.error !== undefined && Number(params.error) < this.errorList.length ? Number(params.error) : 0;
    });
  }

}
