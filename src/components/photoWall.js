import React from "react";
import Photo from "./photo";
import {Link} from 'react-router-dom'

const Photowall = (props)=>{
return <div>
            <Link className="addIconPlus" to="/AddPhoto"> </Link>
            <div className="photoGrid">
                {props.posts
                .sort(function(x,y){
                    return y.id - x.id
                })
                .map((post,index) => <Photo key={index} post = {post} onRemovePhoto={props.onRemovePhoto} />)}
            </div>
        </div>
}

export default Photowall