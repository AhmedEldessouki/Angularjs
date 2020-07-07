import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'serve not created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}
  onCreateServer() {
    this.serverCreationStatus = 'server was created';
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
