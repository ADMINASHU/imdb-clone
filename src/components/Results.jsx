import React from "react";

export default function Results({ results }) {
  return (
    <>
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </>
  );
}
