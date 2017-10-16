import { Component } from '@angular/core';


@Component({
    selector:'my-app',
    template:`
        <h1>Edureka Angular 2.0</h1>
        {{test}}
        <br>
        <br>
        <input type="text" placeholder="Name" [(ngModel)]="test">
    `
})


export class RootComponent {
    test: string = "My name is Rajnish";
}