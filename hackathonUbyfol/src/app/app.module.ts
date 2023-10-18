import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ScrollSuaveDirective } from './directives/scroll-suave.directive';
import { NgxSplideModule } from 'ngx-splide';
import { LavaAnimationComponent } from './components/lava-animation/lava-animation.component';
import { Carousel2Component } from './components/carousel2/carousel2.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CarouselComponent, ScrollSuaveDirective, LavaAnimationComponent, Carousel2Component],
  imports: [BrowserModule, FontAwesomeModule, NgxSplideModule, 
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
