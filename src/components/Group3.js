import React from 'react';
import Header from "./Header"
import Gallery from "./Gallery";
import ModelViewer from "./ModelViewerAR";
import Description from "./Description";

class Group3 extends React.Component { 
    render() {
        return (
            <div className="Group3">
            <Header />
            <Gallery />
            <ModelViewer />
            <Description />
            </div>
        )
    }
}

export default Group3;
