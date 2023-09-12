import request from "./request";

const API = {
  BANNER_URL: '/banner'
}

export const getBannerList = () => {
  return request.get(API.BANNER_URL)
}