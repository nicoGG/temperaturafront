import { Component } from '@angular/core';
import { SocketService } from './servicios/socket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rasptemperatura';
  private _tempSub: Subscription;
  temperatura = {
    temperatura: null,
    humedad: null,
    hora: null
  };

  constructor(
    private socketService: SocketService
  ) { }

  ngOnInit() {
    console.log('INICIO');
    this.socketService.obtenerTemperatura()
      .subscribe((temp: any) => {
        this.temperatura = {
          temperatura: null,
          humedad: null,
          hora: null
        };
        this.temperatura = JSON.parse(temp);
        console.log('TEMP ', this.temperatura);
      });
  }
}
