import React from "react";

const ArticleCard = ({ item }) => {
  return (
    <div className="card">
      <img className="card-img" src={item.image} alt={item.title} />
      <div className="card-body">
        <h5 className="card-title border-bottom-2 pb-1">{item.title}</h5>
        <p className="text-truncate-6">{item.cover}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
