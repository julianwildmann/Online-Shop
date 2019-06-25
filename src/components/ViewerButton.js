import React from 'react';
import { Link } from "react-router-dom";

class ViewerButton extends React.Component { 
    render() {
        return (
          <div className="3DButton">
            <Link to="2dpighli3d">
              <img src="media/3D-starten-icon.png" alt="3D-Button" width="40%" height="auto"/>
            </Link>
          </div>
        )
    }
}

export default ViewerButton;