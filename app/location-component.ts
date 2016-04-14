import {Component} from 'angular2/core';

@Component({
  selector: 'location',
  template:
  `
  <div class="p-y-3 section">
      <div class="background-image" style="background-image : url('http://maps.googleapis.com/maps/api/staticmap?center=folsom+london&amp;zoom=13&amp;size=640x200&amp;sensor=false&amp;scale=2')"></div>
      <div class="container">
          <div class="row">
              <div class="col-lg-4">
                  <div class="card bg-info" draggable="true">
                      <div class="card-block">
                          <address>
                                  <strong>MSGMATCH</strong>
                                  <br>United Kingdom
                                  <br>London,
                                  <br>
                                  <abbr title="Email">mail: </abbr>hello@msgmatch.com</address>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  `,
})

export class LocationComponent{}
