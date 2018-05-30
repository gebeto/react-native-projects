export const DOMAIN = "http://192.168.0.103:9003";
export const LOGIN = "12345";
export const PASSWORD = "12345";

export const API = (url) => fetch(`${DOMAIN}${url}`, {
	redirect: "manual",
	method: "POST",
	credentials: 'include',
	headers: {
	  'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
	  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
	},
	body: `login=${LOGIN}&passwd=${PASSWORD}&submit=Войти`
}).then(resp => resp.json());