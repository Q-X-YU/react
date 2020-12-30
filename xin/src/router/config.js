import Add from '../pages/Add/index';
import Class from '../pages/Class/index';
import Layout from '../pages/Layout/index';
import Main from '../pages/Main/index';
import Detail from '../pages/Detail/index'

const routes = [
    {
        path: "/layout",
        component: Layout,
        children: [
            {
                path: "/layout/add",
                component: Add,
                title:"添加"
            },
            {
                path:"/layout/main",
                component:Main,
                title:"主页"
            },
            {
                path:"/layout/class",
                component:Class,
                title:"分类"
            },
           
        ]
    },

    {
        path: "/detail/:id",
        component: Detail
    },
    {
        from:"/",
        to:"/layout/main"
    }
]
export default routes;