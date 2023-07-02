import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'home',
    standalone   : true,
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ExampleComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
