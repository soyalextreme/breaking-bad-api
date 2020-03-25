import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d25 0%,
    #007d25 40%,
    #0f574e 100%
  );

  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.9s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {
  const [frase, setFrase] = useState({});

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const URI = "https://breaking-bad-quotes.herokuapp.com/v1/quotes";
    const api = await fetch(URI);
    const result = await api.json();
    setFrase(result[0]);
  };

  return (
    <Container>
      <Frase frase={frase} />
      <Button onClick={fetchApi}>Get Quote</Button>
    </Container>
  );
}

export default App;
