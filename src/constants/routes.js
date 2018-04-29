const prodUrl = "/zozzy/firebase-auth-demo";
const localhostUrl = "";

const url = process.env.NODE_ENV === "production" ? prodUrl : localhostUrl;

export const LANDING = `${url}/`;
export const SIGN_UP = `${url}/signup`;
export const SIGN_IN = `${url}/signin`;
export const PASSWORD_FORGET = `${url}/pw-forget`;
export const HOME = `${url}/home`;
export const ACCOUNT = `${url}/account`;
