import { dripdrop } from "dripdrop";

let isDeviceOn: boolean = true;

export function actionSetIsDeviceOn(value: boolean) {
  console.log("actionSetIsDeviceOn", { value });
  if (isDeviceOn === value) return;

  isDeviceOn = value;
  dripdrop.notifySubscribers("isDeviceOn");
}

export function useSubscribeIsDeviceOn() {
  dripdrop.useSubscribe("isDeviceOn");
  return isDeviceOn;
}
