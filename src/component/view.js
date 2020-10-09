import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function View({ result }) {
    if(result.totalResults>0){
    return (
           <div className="row">
             {
                    result.articles.map((item,index)=>(
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-5 pointer-event ">
                            <a href={item.url} target="_blank"rel="noopener noreferrer">
                            <p className="text-center mt-5">{item.title}</p>
                        <img src={item.urlToImage} alt="img" className="w-100 h-75 mb-5"/>
                        </a>
                        </div>
                    ))
             }
           </div>
    );
            }
            else if(result.status==="ok"&&result.totalResults===0){
                return(
                    <div className="bg-warning w-25 text-light m-auto rounded"> <p className="text-center mt-5 p-3">Sorry not found articles</p></div>
                );
            }
            else{
                return(
                   <Fragment></Fragment>
                );
            }
        
}

export default View;
