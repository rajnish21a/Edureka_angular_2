import {
  Component
} from '@angular/core';

import {
  MyFirstTemplateComponent
} from './my-first-template.component';


@Component({
  selector: 'my-app',
  template: `
        <div id='container'>
            <header>
                <h1>Edureka Angular 2.0</h1>
            </header>
            <body>
                <my-first-template></my-first-template>
                <div>
                
                </div>
            </body>
            <footer></footer>
        </div>
    `
})


export class RootComponent {

}
