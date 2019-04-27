import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  name = new FormControl('',[
    Validators.required,
    Validators.minLength(4),
    forbiddenNameValidator(/[0-9]/)
]);
  constructor() { }

  ngOnInit() {
  }

}
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}