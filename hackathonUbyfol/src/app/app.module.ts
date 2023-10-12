import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ScrollSuaveDirective } from './directives/scroll-suave.directive';
import { NgxSplideModule } from 'ngx-splide';

@NgModule({
  declarations: [AppComponent, CarouselComponent, ScrollSuaveDirective],
  imports: [BrowserModule, FontAwesomeModule,NgxSplideModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
