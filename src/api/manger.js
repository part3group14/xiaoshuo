
import * as axiosBase from "./index"

// 文章列表的所有请求
// 显示所有的文章
export function getArticles(){
    return axiosBase.get("/articles");
}

// 添加文章

export function addArticle(art){
    return axiosBase.post("/articles",art);
}

// 删除

// 更新