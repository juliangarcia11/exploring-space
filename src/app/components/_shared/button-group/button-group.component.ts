import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

/**
 * Creates a set of buttons to be displayed in a group where the first and last button
 * have rounded edges and each button is separated via a border.
 *
 * Must be provided [buttons] attribute corresponding to the @Input structure below
 */

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.sass']
})
export class ButtonGroupComponent implements OnInit {
  @Input()
    buttons: ButtonGroupObject[];

  @Output() btnClicked = new EventEmitter();

  private items: ButtonGroupObject[] = [];

  constructor() {}

  ngOnInit() {
    for (const btn of this.buttons) {
      if (!btn.value || (btn.value && btn.value.length < 0)) {
        btn.value = btn.label;
      }

      this.items.push(new ButtonGroupObject(btn));
    }
  }

  clicked($event) {
    this.btnClicked.emit($event);
  }
}

class ButtonGroupObject {
  label: string;
  value: string;
  icon: string; // class to be applied to the <i> tag

  constructor(json: object) {
    Object.assign(this, json);
  }
}
