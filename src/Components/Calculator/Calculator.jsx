import React, {useState} from "react";
import Panel from "../Panel/Panel";
import solve from "../../algorithm";
import "./Calculator.css";

const Calculator = () => {
  const [expr, setExpr] = useState("0");

  const handleClick = e => {
    // handle clear
    if (e.target.value === "clear") {
      setExpr("0");
    }
    // Given an expression, handle the computation
    else if (e.target.value === "=") {
      const ans = solve(expr);
      setExpr(ans);
    }
    else if (expr === "0") {
      setExpr(e.target.value);
    }
    else {
      setExpr(expr + e.target.value);
    }
  };
  return (
    <div>
      <Panel val={expr}/>
      <div>
        <button className="button" onClick={handleClick} value="(">(</button>
        <button className="button" onClick={handleClick} value=")">)</button>
        <button className="button" onClick={handleClick} value="clear">clear</button>
        <button className="button" onClick={handleClick} value="÷">÷</button>
      </div>
      <div>
        <button className="button" onClick={handleClick} value="7">7</button>
        <button className="button" onClick={handleClick} value="8">8</button>
        <button className="button" onClick={handleClick} value="9">9</button>
        <button className="button" onClick={handleClick} value="×">×</button>
      </div>

      <div>
        <button className="button" onClick={handleClick} value="4">4</button>
        <button className="button" onClick={handleClick} value="5">5</button>
        <button className="button" onClick={handleClick} value="6">6</button>
        <button className="button" onClick={handleClick} value="+">+</button>
      </div>

      <div>
        <button className="button" onClick={handleClick} value="1">1</button>
        <button className="button" onClick={handleClick} value="2">2</button>
        <button className="button" onClick={handleClick} value="3">3</button>
        <button className="button" onClick={handleClick} value="-">-</button>
      </div>
      <div>
        <button className="button-zero" onClick={handleClick} value="0">0</button>
        <button className="button" onClick={handleClick} value="=">=</button>
      </div>
    </div>
  );
};

export default Calculator;
