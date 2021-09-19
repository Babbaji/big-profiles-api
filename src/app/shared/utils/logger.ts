import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

export class Logger {

  constructor() {

  }


  /**
   * @param callbackLog
   * @param className
   * @param methodName
   * @param args
   * Metodo per loggare informazioni di differente tipo di log a seconda della callbackLog passata
   */
  private static logData(callbackLog: Function, className: string, methodName: string, ...args: any[]): void {

    if (environment.enabledLoggerService) {
      let message: string = `[Classe: ` + className + `] - [Metodo: ` + methodName + `]`;
      message += !args ? ` - Dato loggato: ` : ``;
      if (environment.enabledLoggerService) {
        callbackLog(message, ...args);
      }
    }
  }


  /**
   *
   * @param className
   * @param methodName
   * @param args
   * Metodo per loggare a livello di log INFO
   */
  static logInfo(className: string, methodName: string, ...args: any[]): void {
    let callbackLog = console.info;
    Logger.logData(callbackLog, className, methodName, args);
  }

  /**
   *
   * @param className
   * @param methodName
   * @param args
   * Metodo per loggare a livello di log DEBUG
   */
  static logDebug(className: string, methodName: string, ...args: any[]): void {
    let callbackLog = console.debug;
    Logger.logData(callbackLog, className, methodName, args);
  }

  /**
   *
   * @param className
   * @param methodName
   * @param args
   * Metodo per loggare a livello di log WARN
   */
  static logWarn(className: string, methodName: string, ...args: any[]): void {
    let callbackLog = console.warn;
    Logger.logData(callbackLog, className, methodName, args);
  }

  /**
   *
   * @param className
   * @param methodName
   * @param args
   * Metodo per loggare a livello di log ERROR
   */
  static logError(className: string, methodName: string, ...args: any[]): void {
    let callbackLog = console.error;
    Logger.logData(callbackLog, className, methodName, args);
  }

}
