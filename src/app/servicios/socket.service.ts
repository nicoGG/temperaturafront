import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = 'http://192.168.2.4:4000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public obtenerTemperatura = () => {
    // this.socket.emit('temperatura');
    return Observable.create((observer) => {
      this.socket.on('temperatura', (temp) => {
        observer.next(temp);
      });
    });
  }
}
