import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-err',
  templateUrl: './field-err.component.html',
  styleUrls: ['./field-err.component.scss'],
})
export class FieldErrComponent implements OnInit {
  @Input() showErr: boolean;
  @Input() msgErr: string;

  constructor() {}

  ngOnInit(): void {}
}
