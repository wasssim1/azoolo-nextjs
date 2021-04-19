import React from "react";
import BasicHeader from "../header/BasicHeader";
import FooterBasic from "../footer/FooterBasic";

const BasicLayout = ({children, aboutOverlay}) => {
    return (
        <React.Fragment>
            <BasicHeader aboutOverlay={aboutOverlay}/>
            {children}
            <FooterBasic/>
        </React.Fragment>
    );
};

export default BasicLayout;
