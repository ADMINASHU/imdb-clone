import React from "react";
import Card from "./Card";
import "./result.css";

const Results = ({ results }) => {
  return (
    <div className="grid">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
