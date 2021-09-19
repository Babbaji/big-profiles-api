
export class NumberUtils {

  constructor() {

  }


  public static sum(numberB: number, numberA: number) {

    numberA = isNaN(numberA) ? 0 : numberA;
    numberB = isNaN(numberB) ? 0 : numberB;
    return numberA + numberB;
  }
}
