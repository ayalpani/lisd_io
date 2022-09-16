import { dripdrop } from "dripdrop";

let isUserInteracting: boolean = false;

export function actionSetIsUserInteracting(value: boolean) {
  if (isUserInteracting === value) return;

  isUserInteracting = value;
  dripdrop.notifySubscribers("isUserInteracting");
}

export function useSubscribeIsUserInteracting() {
  dripdrop.useSubscribe("isUserInteracting");
  return isUserInteracting;
}
