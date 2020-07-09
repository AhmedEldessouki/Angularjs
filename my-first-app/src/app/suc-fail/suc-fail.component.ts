import { Component } from '@angular/core';

@Component({
  selector: 'app-suc-fail',
  templateUrl: './suc-fail.component.html',
  styleUrls: ['./suc-fail.component.scss'],
})
export class SucFailComponent {
  showSucFail = true;
  log = [];

  // tslint:disable-next-line: typedef
  onToggle() {
    this.showSucFail = !this.showSucFail;
    this.log.push(this.log.length + 1);
  }
}
