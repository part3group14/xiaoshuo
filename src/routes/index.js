import Login from "../pages/Login";
import Index from "../pages/admin/index/index";
import List from "../pages/admin/products/List";
import PageNotFound from "../pages/PageNotFound";

export const mainRoutes=[{
    path:'/login',
    component:Login
},
{
    path:"/404",
    component:PageNotFound
}
]

export const adminRoutes=[{
    path:'/admin/index',
    component:Index
},
{
    path:'/admin/products',
    component:List,
    exact:true
}
]