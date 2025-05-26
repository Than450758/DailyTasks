
import React from "react";




const Card1 = () => {
  return (
    <div className="steps-container">
      <div className="step">
        <div className="step-number">1</div>
        <h3>Setup Font Awesome</h3>
        <p>After creating a Kit, copy your Kit’s unique code into the <code>&lt;head&gt;</code> of your page.</p>
      </div>
      <div className="step">
        <div className="step-number">2</div>
        <h3>Add Icons</h3>
        <p>Start placing icons in your HTML’s <code>&lt;body&gt;</code> using our <a href="#">simple syntax</a>.</p>
      </div>
      <div className="step">
        <div className="step-number">3</div>
        <h3>Make it Awesome</h3>
        <p>It’s time to rock and roll! <a href="#">Color</a>, <a href="#">size</a>, <a href="#">rotate</a>, <a href="#">animate</a>, & <a href="#">power transform</a> icons with ease!</p>
      </div>
    </div>
  );
};

export default Card1;


