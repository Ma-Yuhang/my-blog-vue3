import request from "./request";

export function getMessages(page = 1, limit = 10) {
  return request.get("/message", {
    params: {
      page,
      limit,
    },
  });
}

export function postMessage(msgInfo) {
  return request.post("/message", msgInfo);
}