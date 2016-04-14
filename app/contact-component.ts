import {Component} from 'angular2/core';

@Component({
  selector: 'contact',
  template:
  `
  <div class="bg-primary p-y-3 section">
      <div class="container">
          <div class="row text-xs-center">
              <div class="col-xs-4">
                  <a><i class="fa fa-5x  fa-fw text-inverse fa-phone"></i></a>
              </div>
              <div class="col-xs-4">
                  <a><i class="fa fa-5x fa-fw text-inverse fa-at  "></i></a>
              </div>
              <div class="col-xs-4">
                  <a><i class="fa fa-5x fa-fw text-inverse fa-whatsapp"></i></a>
              </div>
          </div>
      </div>
  </div>
  `,
})

export class ContactComponent{}
