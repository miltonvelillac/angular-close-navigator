import { Directive, HostListener } from '@angular/core';
import { QueryAfterCloseService } from '../services/query-after-close.service';

@Directive({
  selector: '[appCloseNavigator]'
})
export class CloseNavigatorDirective {

  constructor(private queryAfterCloseService: QueryAfterCloseService) { }

  @HostListener('window:beforeunload', ['$event'])
  doBeforeClose($event): void {
    $event.returnValue = true;
  }

  @HostListener('window:unload')
  doAfterClose(): void {
    this.queryAfterCloseService.logout().subscribe();
  }

}
