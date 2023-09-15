import request from "./request";

/**
 * 获取博客列表数据
 */
export function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return request.get("/blog", {
    params: {
      page,
      limit,
      categoryid,
    },
  });
}

/**
 * 获取博客分类
 */
export function getBlogTypes() {
  return request.get("/blogtype");
}
