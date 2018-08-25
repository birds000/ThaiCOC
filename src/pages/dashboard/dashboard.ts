import { ReferstatusPage } from './../referstatus/referstatus';
import { WorklistPage } from './../worklist/worklist';
import { RecievePage } from './../recieve/recieve';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  chartOptions1: any;
  chartOptions2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeChart1();
    this.initializeChart2();
  }

  initializeChart1() {
    this.chartOptions1 = {
      chart: {
        height: 180,
        width: 180,
        margin: [0, 0, 0, 0],
        alignTicks: false,
        plotBackgroundColor: null,
        plotBackground: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: {point.percentage:.1f}%'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          colors: ['#638291', '#fdbb2d'],
          dataLabels: {
            enabled: true,
            format: '{point.name}<br>{point.percentage:.1f} %',
            distance: -30,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 1
            }
          }
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Brands',
        data: [
          { name: '185 คน', y: 35.30 },
          { name: '339 คน', y: 64.70 },
        ]
      }]
    }
  }

  initializeChart2() {
    this.chartOptions2 = {
      chart: {
        height: 180,
        width: 180,
        margin: [0, 0, 0, 0],
        alignTicks: false,
        plotBackgroundColor: null,
        plotBackground: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: {point.percentage:.1f}%'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          colors: ['#a3c586', '#9ad0f4'],
          dataLabels: {
            enabled: true,
            format: '{point.name}<br>{point.percentage:.1f} %',
            distance: -30,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 1
            }
          }
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Brands',
        data: [
          { name: '154 คน', y: 45.43 },
          { name: '185 คน', y: 54.57 },
        ]
      }]
    }
  }

  gotoRecieve() {
    this.navCtrl.setRoot(RecievePage);
  }

  gotoWorklist() {
    this.navCtrl.setRoot(WorklistPage);
  }

  gotoRefer() {
    this.navCtrl.setRoot(ReferstatusPage);
  }

}