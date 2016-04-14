import {Component} from 'angular2/core';

@Component({
  selector: 'access',
  template:
  `
  <div class="bg-primary p-y-3 section">
      <div class="container">
          <div class="row">
              <div id= "early-access" class="col-lg-12">
                  <h1 class="display-4 p-y-2 text-inverse">Early Access</h1>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-12">
                  <form class="" draggable="true">
                      <div class="form-group">
                          <label class="lead">To take part in our closed beta enter your email below</label>
                          <input type="email" class="form-control" placeholder="Email">
                      </div>
                      <button type="submit" class="btn btn-info btn-lg text-xs-center">Submit</button>
                  </form>
              </div>

          </div>
      </div>
  </div>
  `,

})

export class AccessComponent{};
