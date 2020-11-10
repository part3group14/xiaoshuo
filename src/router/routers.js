//路由配置
import Home from '../pages/Home/index'
import ColumnList from '../pages/ColumnList/index'
import ArticleTypeList from '../pages/ArticleTypeList/index'
import ArticleList from '../pages/ArticleList/index'
import PublicType from '../pages/PublicType/index'
export default [
    {
        title:"首页",
        path:"/",       
        component:Home
    },
    {
        title:"栏目列表",
        path:"/colList",
        component:ColumnList
    },
    {
        title:"文章类型列表",
        path:"/articleTypeList",
        component:ArticleTypeList
    },
    {
        title:"文章列表",
        path:"/articleList",
        component:ArticleList
    },
    {
        title:"公告类型",
        path:"/publicType",
        component:PublicType
    }
    
]
