import Image from "next/image";
import React from "react";
import "./card.css";

const Card = ({ result }) => {
  return (
    <div className="card">
      <Image
        className="cardImage"
        src={`https://image.tmdb.org/t/p/original/${result?.backdrop_path || result?.poster_path}`}
        width={220}
        height={180}
      />
      <h2 className="cardTitle">{result?.original_title}</h2>
      <p className="cardOverview">{result?.overview}</p>
      <div className="extra">
        <div className="date">{result?.release_date}</div>
        <div className="like">{result?.vote_count}</div>
      </div>
    </div>
  );
};

export default Card;
