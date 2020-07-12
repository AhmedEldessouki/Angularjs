import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
})
export class ElementComponent implements OnInit {
  // @Input('srvElement" ====> means evercomponent will see it whith that name)
  //  allow any parent component to accesses this element
  @Input() element: {
    type: string;
    name: string;
    content: string;
  };
  constructor() {}

  ngOnInit(): void {}
}
