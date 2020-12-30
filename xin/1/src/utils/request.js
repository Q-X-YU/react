import axios from 'axios';
export default function request(options){
  let {
      url,
      method='get',
      data={},
      params={},
      headers={}
  }=options
  return new Promise((resolve,reject)=>{
     axios({
        url,
        method,
        data,
        params,
        headers
     }).then(res=>{
        resolve(res.data.data)
     }).catch(err=>{
         reject({
             code:"00001",
             msg:"请求失败"
         })
     })
  })
}