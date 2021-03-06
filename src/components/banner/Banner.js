import React, { Component } from "react";
import { Button } from "reactstrap";

import './Banner.css';

class Banner extends Component {
    
    render() {
        return (
            <div className="Banner">
                <div className="content container">
                    <h2>
                        One Stop Destination For All Your Cleaning Service Needs
                    </h2>
                    <p>
                        Home - Restroom - Kitchen - Office
                    </p>
                    <Button color="primary">Book Your Service</Button>
                </div>
            </div>
        );
    }
}

export default Banner;