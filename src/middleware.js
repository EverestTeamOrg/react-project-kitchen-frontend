import { setTokenAxios } from "./api";

const localStorageMiddleware = (store) => (next) => (action) => {

  // TODO: фулфилдится при 500, 400. При ошибке пудет падать стор изза отсутств. нужных полей.
  // надо обработать ошибки
  const goodActions =
    action.type === "LOGIN/fulfilled" || action.type === "SIGNUP/fulfilled";

  const badActions =
    action.type === "LOGOUT" ||
    action.type === "LOGIN/rejected" ||
    action.type === "SIGNUP/rejected" ||
    action.type === "AUTH/rejected";

  if (goodActions) {
    if(action.payload?.isAxiosError) {
      console.log('isAxiosError');
      localStorage.setItem("jwt", "");
      setTokenAxios(null);
    } else {
      localStorage.setItem("jwt", action.payload?.user?.token);
      setTokenAxios(action.payload?.user?.token);
    }
    
  }
  if (badActions) {
    localStorage.setItem("jwt", "");
    setTokenAxios(null);
  }
  next(action);
};

export { localStorageMiddleware };
