import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ScrollSuaveDirective } from './directives/scroll-suave.directive';
import { NgxSplideModule } from 'ngx-splide';
import { LavaAnimationComponent } from './lava-animation/lava-animation.component';

@NgModule({
  declarations: [AppComponent, CarouselComponent, ScrollSuaveDirective, LavaAnimationComponent],
  imports: [BrowserModule, FontAwesomeModule, NgxSplideModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
