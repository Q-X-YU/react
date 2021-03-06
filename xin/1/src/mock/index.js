import Mock from 'mockjs';
const data=Mock.mock({
    "list|10":[{
       "title":"@ctitle",
       "id":"@id",
       "children":[{
           "info":"@cword(10,20)",
           "background":"@color",
           "id":"@id"
       }]
    }]
})
Mock.mock("/api/getList",'post',(req)=>{
    return {
        code:"00000",
        msg:"请求成功",
        data
    }
})
Mock.mock("/api/getDetail",'post',(req)=>{
    //注意注意id一定要解构 否则newLIst为空
    const {id}=JSON.parse(req.body);
    console.log(id,'id')
    const newList=data.list.find(item=>item.id===id)
    console.log(newList,'new')
    return {
        code:"00000",
        msg:"请求成功",
        data:newList
    }
})