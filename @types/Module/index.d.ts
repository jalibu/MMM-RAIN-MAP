declare module Module {
  export function register(
    moduleName: string,
    moduleProperties: {
      runtimeData?: any;
      defaults?: any;
      getDom?: Function;
      getHeader?: Function;
      getScripts?: Function;
      getStyles?: Function;
      getTemplate?: Function;
      getTemplateData?: Function;
      getTranslations?: Function;
      loadData?: Function;
      notificationReceived?: Function;
      scheduleUpdate?: Function;
      socketNotificationReceived?: Function;
      start?: Function;
      play?: Function;
      tick?: Function;
    }
  ): void;
}

declare const config: any
declare const moment: Function