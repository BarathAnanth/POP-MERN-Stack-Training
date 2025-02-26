import React from "react";

const trackingMyButtonComp = (Component) => {
  return (props) => {
    const handleClick = () => {
      alert("The Tracking info on Clicking this Button: " + JSON.stringify(props.trackingInfo));
    };
    
    return (
      <div>
        <form>
          Email: <input type="text" />
          Password: <input type="text" />
          <Component {...props} onClick={handleClick} />
        </form>
      </div>
    );
  };
};

export default trackingMyButtonComp;
