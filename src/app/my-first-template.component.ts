import { Component, Input } from '@angular/core';


@Component({
    selector:'my-first-template',
    template: `
                     {{test}}
                    <br>
                    <br>
                    <input type="text" placeholder="Name" [(ngModel)]="test">
                `  
})

export class MyFirstTemplateComponent {
    test: string = 'My Name is Rajnish';
}