import request from "./request";

// 获取博客列表数据
export function getBlogs(page = 1, limit = 10, categoryId = -1) {
  return request.get("/blog", {
    params: {
      page,
      limit,
      categoryId,
    },
  });
}

// 获取博客分类
export function getBlogTypes() {
  return request.get("/blogtype");
}

// 获取单个博客
export function getBlog(id) {
  return request.get(`/blog/${id}`);
}

// 提交评论
export function postComment(commentInfo) {
  return request.post(`/comment`, commentInfo);
}

// 获取所有评论
export function getComments(blogid, page = 1, limit = 10) {
  return request.get("/comment", {
    params: {
      blogid,
      page,
      limit,
    },
  });
}
