import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";

const Contenedor = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  border-color: #fff;
  max-width: 800px;
  background-color: white;

  @media (min-width: 692px) {
    margin-top: 15rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Frase = ({ frase }) => {
  return (
    <Contenedor>
      <h1>{frase.quote}</h1>
      <p>{frase.author}</p>
    </Contenedor>
  );
};

Frase.propType = {
  frase: PropTypes.object.isRequired
};

export default Frase;
