import { Injectable } from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {TranslateService} from '@ngx-translate/core';


const placeholder = /__${}__/;

export enum ECheckAndGetReturnTypes {
  string = 'string',
  number = 'number'
}

export type TCheckAndGetTypes = keyof typeof ECheckAndGetReturnTypes;

export class GeneralUtils {

  constructor() {
  }

  static isVoid = function (input: any) {
    return input === 'undefined' || input === undefined || input === null || input === 'null' || input === '' || input === '';
  };

}
