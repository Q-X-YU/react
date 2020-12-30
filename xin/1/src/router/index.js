import React from 'react';
import {Redirect,Route,Switch} from 'react-router-dom';
const RouteView=(props)=>{
  return <Switch>
      {
          props.routes.map((item,index)=>item.path?
          <Route key={index} path={item.path} render={(pro)=><item.component routes={item.children?item.children:[]} {...pro}>
            <RouteView routes={item.children}/>
          </item.component>}>

          </Route>
          :<Redirect {...item} key={index}/>
          )
      }
  </Switch>
}
export default RouteView