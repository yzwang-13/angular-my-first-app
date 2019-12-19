import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { StylingComponent } from './styling/styling.component';
import { SelectorsAttributesClassComponent } from './selectors-attributes-class/selectors-attributes-class.component';
import {StringInterpolationComponent} from "./string-interpolation/string-interpolation.component";
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    // have to register our self-created server component below
    // because angular doesn't scan all files and doesn't know about it
    // if we don't register it
    ServerComponent,
    ServersComponent,
    InlineTemplateComponent,
    StylingComponent,
    SelectorsAttributesClassComponent,
    StringInterpolationComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // bootstrap: tell angular which component should you be aware of
  //  at the time the whole application starts, in other words which component
  //  would you basically recognize in the index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
