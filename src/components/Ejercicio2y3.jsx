import React from 'react';
import { useState } from "react";

const Ejercicio2 = (props) => {
    const [frase, setFrase] = useState("");

    return (
        <div>
            <h2>Hello {props.ejercicio2} {frase} </h2>
            <button
        className="btn btn-primary"
        onClick={() => setFrase("(From changed State)!")}
      >
        Click me
      </button>
        </div>
    );
};

export default Ejercicio2;