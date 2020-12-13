import React from "react";
import "./Panel.css";

const Panel = (props) => {
    return (
        <div className="panel">{props.val}</div>
    );
};

export default Panel;
