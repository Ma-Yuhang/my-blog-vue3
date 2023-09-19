import request from "./request";

export function getProjects() {
  return request.get("/project");
}