import request from "./request";

export function getSetting() {
  return request.get("/setting");
}