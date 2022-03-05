import React from "react";

const Lottie = (props) => {
  return (
    <>
      <lottie-player
        src="https://assets6.lottiefiles.com/datafiles/uIqOUNaohkgyRYQ/data.json"
        background="transparent"
        speed="1"
        class={`${props?.className}`}
        loop
        autoplay
      ></lottie-player>
    </>
  );
};

export default Lottie;