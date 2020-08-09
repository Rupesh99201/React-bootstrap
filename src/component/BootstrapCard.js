import React, { Component } from 'react';

class BootstrapCard extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return(<div className="card">
             <img src={this.props.image} className ="img-fluid"></img>
            <div className ="card-body">
               
                 <p>
                 Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.
                 </p>
                 <button className="btn btn-dark btn-sm">Read more.</button>
            </div>
        </div>
        );
    }
}

export default BootstrapCard;