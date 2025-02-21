import React from 'react';
import Button from './Button';
import trackingMyButtonComp from './trackingMyButtonComp';

const HoC = () => {
    const ButtonTrack = trackingMyButtonComp(Button);
  
    return (
      <div>
        <h1>Welcome to Higher Order Components(HoC)</h1>
        <ButtonTrack value="Login" trackingInfo={{ CustID: "Hello", Password: "password" }} />
        <Button value="Login" />
      </div>
    );
};

export default HoC;
