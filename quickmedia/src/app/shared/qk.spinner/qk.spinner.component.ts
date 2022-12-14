import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../qk.spinner.service';

@Component({
  selector: 'qk-spinner',
  templateUrl: './qk.spinner.component.html',
  styleUrls: ['./qk.spinner.component.css']
})
export class QkSpinnerComponent implements OnInit {
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
