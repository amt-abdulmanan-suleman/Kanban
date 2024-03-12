import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

type InputValue = string | number | undefined;
type InputType = 'text' | 'email' | 'number';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="form-control">
        <label [for]="inputId" *ngIf="label">{{label}}</label>
        <input [type]="text" [value]="value" [id]="inputId">
    </div>
  `,
  styles: `
    .form-control{
      display: block;
      margin-bottom: 16px;

      label, input{
        display: block;
      }
      input {
        box-sizing: border-box;
        padding: 8px;
        width: 100%;
      }
    }
  `
})
export class InputComponent {
  @Input() inputId = Math.random().toString(16);
  @Input() label = '';
  @Input() text:InputType = 'text';
  @Input() value: InputValue;
}
