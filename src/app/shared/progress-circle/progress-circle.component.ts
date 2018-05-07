import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'pm-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.css'],
})
export class ProgressCircleComponent implements OnChanges{
  dataProgress: number;
  dataDisplay: number = 66;
  @Input() salary: number;

  onClick():void {
    console.log("Clicked")
  }

  ngOnChanges(): void {
    this.dataProgress = Math.round(this.salary / 20000 * 100);
    this.dataDisplay = this.salary / 1000;
  }
}
