import request from '../utils/request';
export function getList(){
    return request({
        url:"/api/getList",
        method:"post",
        
    })
}
export function getDetail(data){
    return request({
        url:"/api/getDetail",
        method:"post",
        data
    })
}
export function getAdd(data){
    return request({
        url:"/api/getAdd",
        method:"post",
        data
    })
}