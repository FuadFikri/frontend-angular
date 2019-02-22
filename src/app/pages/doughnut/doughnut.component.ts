import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxPieChartModule } from 'devextreme-angular';
import { PopulationByRegion, Service } from './doughnut.service';
import { PercentPipe } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css'],
  providers: [Service]
})
export class DoughnutComponent implements OnInit {
  pipe: any = new PercentPipe("en-US");
    
  populationByRegions: PopulationByRegion[];

  constructor(service: Service) {
      this.populationByRegions = service.getPopulationByRegions();
  }

  customizeTooltip = (arg: any) => {
      return {
          text: arg.valueText + " - " + this.pipe.transform(arg.percent, "1.2-2")
      };
  }
  ngOnInit() {
  }

}

// platformBrowserDynamic().bootstrapModule(AppModule);
