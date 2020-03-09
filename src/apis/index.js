import {ajax} from "@/utils/pAjax/index"


export let getUserInfoAPI = ajax("/getUserInfo");

export let getSearchInfoAPI = ajax("/getSearchInfo");
