import { QueryAfterCloseService } from './services/query-after-close.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private queryAfterCloseService: QueryAfterCloseService) {}

  doBeforeClose(): void {
    const msg = this.doQuery();
    console.log('Message:', msg);
    alert('Hello!!!!');
  }

  doQuery(): void {
    this.queryAfterCloseService.logout().subscribe();
  }

}
