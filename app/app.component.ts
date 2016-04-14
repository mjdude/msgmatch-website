import {Component} from 'angular2/core';
import {bootstrap}         from 'angular2/platform/browser';
import {ROUTER_PROVIDERS}  from 'angular2/router';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

@Component({
    selector: 'my-app',
    // template:
    //         `
    //         <h1>Hello Angular</h1>
    //         <courses></courses>
    //         <authors></authors>
    //         `,
    templateUrl: 'app/app.template.html',
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent { }
