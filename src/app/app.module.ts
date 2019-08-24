import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//COMPONENTES
import {
  MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSnackBarModule, MatCardModule, MatInputModule, MatGridListModule,
  MatDialogModule, MatProgressSpinnerModule, MatTabsModule, MatCheckboxModule, MatTooltipModule, MatExpansionModule
} from '@angular/material';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SocketService } from './servicios/socket.service';
const config: SocketIoConfig = { url: 'http://192.168.2.4:4000', options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    // SocketIoModule.forRoot(config)
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
