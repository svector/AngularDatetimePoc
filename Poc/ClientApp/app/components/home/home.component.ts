import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.component.html'),
    styles: ['/deep/ .dropdown-menu {background- color: #bbbbbb;min-width: 220px;}']
})
export class HomeComponent {
    value: Date;
}
