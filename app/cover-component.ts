import {Component} from 'angular2/core';

@Component({
  selector: 'cover',
  template: `
      <div class="section section-fill-height section-opaque-dark">
          <div class="background-image background-image-fixed" style="background-image : url('img/cover-1-dark2.jpg')"></div>
          <div class="container">
              <div class="row">
                  <div class="col-lg-12 col-offset-md-2 text-left">
                      <h1 class="display-4 text-inverse text-xs-center">MSGMATCH</h1>
                      <p class="lead text-inverse text-xs-center">NO APPS | NO PROFILES | JUST GET MATCHED</p>
                  </div>
              </div>
              <div class="col-md-12"><a href="#early-access" class="btn btn-block btn-lg btn-primary">ENTER EARLY ACCESS</a></div>
          </div>
      </div>
  `
})

export class CoverComponent{}
