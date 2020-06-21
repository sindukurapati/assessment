import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { DemoChartComponent } from './demo-chart/demo-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    DemoChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),    
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
