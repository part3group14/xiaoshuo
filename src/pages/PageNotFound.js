import React from "react";

export default class PageNotFound extends React.Component {

    constructor(props){
        super()
        this.state = {
            person:{
            }
        }  
    }

    render = () => {

        return (
            <div>
                <p>404</p>
            </div>
        )
    }
}
