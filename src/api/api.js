// import { store } from "../redux/storeConfig/store";

// import { history } from "../history";
// import { setLoginFlag } from "../redux/actions/auth/loginAction";

// const axios = require("axios");

// // const mainUrl = 'http://esnetwork.zignuts.com/api/';
// const mainUrl = "https://edumeet.zignuts.dev/api/";
// // const mainUrl = "http://74ed5be51ec9.ngrok.io/";
// // const mainUrl = 'http://localhost:1337/';

// export const api = async (endpoint, data, type) => {
//   var res;
//   if (type !== "postWithoutToken") {
//     var token = store.getState().auth.login.loginUser.token;
//     console.log("TOKEN", token);
//   }

//   switch (type) {
//     case "post":
//       await axios({
//         data: data,
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         url: mainUrl + endpoint,
//       })
//         .then(function (response) {
//           res = response;
//         })
//         .catch((err) => {
//           if (
//             err.response.status === 401 ||
//             err.response.status === 403 ||
//             err.response.status === 503
//           ) {
//             localStorage.removeItem("es");
//             store.dispatch(setLoginFlag(false));
//             store.dispatch(setLoginUser({}));
//             history.push("/login");
//           } else {
//             console.log("==========", err);

//             res = err.response;
//           }
//         });
//       break;
//     case "get":
//       await axios({
//         method: "get",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         url: mainUrl + endpoint,
//       })
//         .then(function (response) {
//           res = response;
//         })
//         .catch((err) => {
//           console.log("Error", err);

//           if (
//             err.response.status === 401 ||
//             err.response.status === 403 ||
//             err.response.status === 503
//           ) {
//             localStorage.removeItem("es");
//             store.dispatch(setLoginFlag(false));
//             store.dispatch(setLoginUser({}));
//             history.push("/login");
//           } else {
//             res = err.response;
//           }
//         });
//       break;
//     case "put":
//       await axios({
//         method: "put",
//         data: data,
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         url: mainUrl + endpoint,
//       })
//         .then(function (response) {
//           res = response;
//         })
//         .catch((err) => {
//           if (
//             err.response.status === 401 ||
//             err.response.status === 403 ||
//             err.response.status === 503
//           ) {
//             localStorage.removeItem("adam-wa-mishmish");
//             store.dispatch(setLoginFlag(false));
//             store.dispatch(setLoginUser({}));
//             history.push("/pages/login");
//           } else {
//             res = err.response;
//           }
//         });
//       break;
//     case "delete":
//       await axios({
//         data: data,
//         method: "delete",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         url: mainUrl + endpoint,
//       })
//         .then(function (response) {
//           res = response;
//         })
//         .catch((err) => {
//           if (
//             err.response.status === 401 ||
//             err.response.status === 403 ||
//             err.response.status === 503
//           ) {
//             localStorage.removeItem("es");
//             store.dispatch(setLoginFlag(false));
//             store.dispatch(setLoginUser({}));
//             history.push("/login");
//           } else {
//             res = err.response;
//           }
//         });
//       break;
//     case "patch":
//       await axios({
//         data: data,
//         method: "patch",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         url: mainUrl + endpoint,
//       })
//         .then(function (response) {
//           res = response;
//         })
//         .catch((err) => {
//           if (
//             err.response.status === 401 ||
//             err.response.status === 403 ||
//             err.response.status === 503
//           ) {
//             localStorage.removeItem("es");
//             store.dispatch(setLoginFlag(false));
//             store.dispatch(setLoginUser({}));
//             history.push("/login");
//           } else {
//             res = err.response;
//           }
//         });
//       break;
//     case "postWithoutToken":
//       await axios({
//         method: "post",
//         data: data,
//         headers: {
//           "Content-Type": "application/json",
//         },
//         url: mainUrl + endpoint,
//       })
//         .then(function (response) {
//           res = response;
//         })
//         .catch((err) => {
//           res = err.response;
//         });
//       break;
//     case "postFileDownload":
//       await axios({
//         method: "post",
//         data: data,
//         headers: {
//           "Content-Type": "application/json",
//           "x-auth": token,
//         },

//         url: mainUrl + endpoint,
//       })
//         .then(function (response) {
//           const url = window.URL.createObjectURL(
//             new Blob([response.data.data])
//           );
//           // const url = window.URL.createObjectURL(response.data.data);
//           const link = document.createElement("a");
//           link.href = url;
//           link.setAttribute("download", "file.csv");
//           document.body.appendChild(link);
//           link.click();
//         })
//         .catch((err) => {
//           res = err.response;
//         });
//       break;
//     default:
//       return true;
//   }

//   // var parsdata = await checkData(res);
//   return res;
// };

// export const checkData = (data) => {
//   return true;
// };
