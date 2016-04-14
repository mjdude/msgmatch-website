import {Component} from 'angular2/core';

@Component({
  selector: 'info',
  template: `
  <div class="bg-info p-y-3 section">

      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <h1 class="display-4 m-y-2 text-inverse">How It Works</h1>
                  <p class="lead pi-draggable pi-item text-xs-left">MSGMATCH is a a text messaging service which acts as a modern day match maker but uses robots instead of humans. We match you with prospective life partners and organise the meetings, so you can search for a spouse,
                      while still keeping up with your busy life!</p>
              </div>
          </div>
          <div class="p-y-2 row">
              <div class="col-lg-4">
                  <img src="img/01.png" class="img-fluid img-rounded m-y center-block">
                  <p class="lead text-inverse text-xs-center">Receive a Text</p>
                  <p class="text-inverse text-xs-center">
                      MSGMATCH will contact you on the number you submit on this site
                  </p>
              </div>
              <div class="col-lg-4">
                  <img src="img/02.png" class="img-fluid img-rounded m-y center-block">
                  <p class="lead text-inverse text-xs-center">Answer 3 Questions</p>
                  <p class="text-inverse text-xs-center">
                      MSGMATCH asks 3 simple questions to understand what you are looking for
                  </p>
              </div>
              <div class="col-lg-4">
                  <img src="img/03.png" class="img-fluid img-rounded m-y center-block">
                  <p class="lead text-inverse text-xs-center">Get Matched</p>
                  <p class="text-inverse text-xs-center">
                      MSGMATCH finds a match and sets up a meeting at a neutral location
                  </p>
              </div>
          </div>
      </div>
  </div>

  `,
})

export class InfoComponent{}
