import request from "./request";

export function getAbout() {
  return request.get("/about");
}