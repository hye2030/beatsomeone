import { atom } from 'recoil';

// 전역상태를 만든고, export 해준다.
export const isModal = atom({
  key: 'isModal',
  default: "login",
});