import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { RootComponent} from './app.component';
import { MyFirstTemplateComponent } from './my-first-template.component'; 

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        CommonModule
    ],
    exports:[],
    declarations:[RootComponent, MyFirstTemplateComponent ],
    providers:[],
    bootstrap:[RootComponent]
})

export class AppModule {

}
