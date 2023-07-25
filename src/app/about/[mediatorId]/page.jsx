"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const mediator = ({ params: { mediatorId }, params }) => {
  const [mediator, setMediator] = useState({});

  const { mediators } = useSelector((store) => store.mediators);
  console.log(params);
  useEffect(() => {
    setMediator(
      mediators.find((mediator) => mediator.id === parseInt(mediatorId))
    );
  }, [mediators]);

  return (
    <div className="row">
      <div className="col-sm-12 col-lg-4 d-flex jc-center">
        <div className="avatar">
          <img src={mediator.image} alt={mediator.name} />
        </div>
      </div>
      <div className="col-sm-12 col-lg-8">
        <div className="row">
          <h2 className="border-bottom-2 mb-1 mt-3 pb-1"> {mediator.name}</h2>
          <p> {mediator.about}</p>
          <h2 className="border-bottom-2 mb-1 mt-3 pb-1">Aldığı Görevler</h2>
          {mediator.tasks?.map((task) => (
            <p key={task.id}>{task.title}</p>
          ))}

          <h2 className="border-bottom-2 mb-1 mt-3 pb-1">İletişim</h2>
          <p>E-Mail: {mediator.email}</p>
          <p>Tel: {mediator.tel}</p>
        </div>
      </div>
    </div>
  );
};

export default mediator;
