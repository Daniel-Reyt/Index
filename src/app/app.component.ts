import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IndexServer';

  webserver = [
    {
      name: 'jurilog',
      status: 'ON',
      url: 'http://51.15.2.21:300'
    }
  ]

  gameserver = [
    {
      text: 'Serveur Minecraft Spigot 1.18.1 avec plugins',
      ip: '51.15.2.21:25567',
      whitelist: 'OFF',
      type: 'serveur survie tranquille entre potes',
      status: 'ON'
    }, 
    {
      text: 'Serveur Minecraft Manhunt 1.18.1',
      ip: '51.15.2.21:25566',
      whitelist: 'OFF',
      type: 'serveur event ManHunt',
      status: 'ON'
    }, 
    {
      text: 'Serveur Minecraft BuildBattle 1.18.1',
      ip: '51.15.2.21:25565',
      whitelist: 'OFF',
      type: 'serveur event BuildBattle',
      status: 'ON'
    }
  ]
}
