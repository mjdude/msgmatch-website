import {Component} from 'angular2/core';
import {CoverComponent} from './cover-component';
import {InfoComponent} from './info-component';
import {AccessComponent} from './access-component';
import {ContactComponent} from './contact-component';
import {LocationComponent} from './location-component';

@Component({
    selector: 'my-app',
  template:
  `
  <cover></cover>
  <info></info>
  <access></access>
  <contact></contact>
  <location></location>
  `,
  directives: [CoverComponent, InfoComponent, AccessComponent, ContactComponent, LocationComponent]
})
export class AppComponent { }
