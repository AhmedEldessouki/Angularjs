import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-in-ts',
  template: `
    <h1>from ts</h1>
    <app-server></app-server>
  `,
  styleUrls: ['./html-in-ts.component.scss'],
})
export class HtmlInTsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
