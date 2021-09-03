import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Color, Label} from "ng2-charts";
import {ChartDataSets, ChartType, RadialChartOptions} from "chart.js";
import jsonForm from '../../../../assets/personnaliteV2.json'

@Component({
  selector: 'app-personality-form-result',
  templateUrl: './personality-form-result.component.html',
  styleUrls: ['./personality-form-result.component.scss']
})
export class PersonalityFormResultComponent implements OnInit {

  @Output() close = new EventEmitter<boolean>();
  @Input() result: any = {};
  moyennes = jsonForm.moyennes;
  asp: number[];
  nt: number[];
  res: number[];



  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[];
  public radarChartData: ChartDataSets[] = [];
  public radarChartType: ChartType = 'radar';

  constructor() {

    this.asp = [];
    this.nt = [];
    this.res = [];
    this.radarChartLabels = [];
  }

  ngOnInit(): void {
    this.moyennes.forEach((moyenne) => {
      this.radarChartLabels.push(moyenne.type);
      this.asp.push(moyenne.valeur_aspie);
      this.nt.push(moyenne.valeur_NT);
      this.res.push(this.result[moyenne.type]);
    });

    console.log(this.res);
    this.radarChartData.push({data: this.asp, label: "ASPIE"});
    this.radarChartData.push({data: this.nt, label: "NT"});
    this.radarChartData.push({data: this.res, label: "YOU"});
  }

}
