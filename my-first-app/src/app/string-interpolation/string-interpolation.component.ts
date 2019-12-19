import {Component} from "@angular/core";

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html'
})

export class StringInterpolationComponent {
  serverId = 10;
  serverStatus = 'offline';

  getServerStatus(){
      return this.serverStatus= 'online';
  }
}
