import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img className="card-img" src={item.image} alt={item.name} />
      <div className="card-body">
        <h5 className="card-title ">{item.name}</h5>
        <p className="text-truncate-6">{item.about}</p>
      </div>
    </div>
  );
};

export default Card;
