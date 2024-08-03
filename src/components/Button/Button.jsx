import React from "react";

const Button = (props) => {
    retutn (
        <button {...props} className={'button ' + props.className}/>
    );
};

export default Button