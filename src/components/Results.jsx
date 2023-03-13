import React from "react";

const Results = ({results}) => {
  return (
    <>
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </>
  );
};

export default Results;
