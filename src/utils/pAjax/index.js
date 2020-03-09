import userInfo from "@/utils/pAjax/userInfo";
import searchInfo from "@/utils/pAjax/searchInfo";
import hotInfo from "@/utils/pAjax/hotInfo";
const DATA = [
  {path: "/leftNav", data: ["首页", "追番", "友链"], timeout: 3000},
  {
    path: "/getAppSettings", data: {
      style:{
        minWidth: "1500px"
      }
    }
  },
  ...userInfo,
  ...searchInfo,
  ...hotInfo
];

const defaultStatus = {
  timeout: 500
}

function response(code = 200, msg = "", data = null, timeStamp = +new Date()) {
  if (!msg) {
    if (code === 404) msg = "Not Found";
    if (code === 403) msg = "forbidden";
    if (code === 200) msg = "ok"
  }
  return {
    code, msg, data, timeStamp
  }
}

export function ajax(/*String*/url, redirectResponseObj = null) {
  if (redirectResponseObj) {
    let pathObj = redirectResponseObj;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(response(pathObj.code || 200, pathObj.msg, pathObj.data))
      }, pathObj.timeout || defaultStatus.timeout)
    })
  }
  // 1.寻找index
  let index = DATA.findIndex(item => item.path === url);

  // 2.判断index
  if (index === -1) {
    return response(404)
  } else {
    let pathObj = DATA[index];
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(response(pathObj.code || 200, pathObj.msg, pathObj.data))
      }, pathObj.timeout || defaultStatus.timeout)
    })
  }
}



