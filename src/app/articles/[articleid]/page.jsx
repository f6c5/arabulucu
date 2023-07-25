"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Comments from "@/components/Comments";

const article = ({ params: { articleId } }) => {
  const [article, setArticle] = useState({});
  const { articles } = useSelector((store) => store.articles);

  useEffect(() => {
    setArticle(articles.find((article) => article.id === parseInt(articleId)));
  }, [articles]);

  return (
    <div className="row jc-center">
      <div className="col-sm-12 col-lg-10 d-flex jc-center mb-4">
        <img
          src="/images/1.png"
          alt={article.title}
          style={{
            height: "500px",
            objectFit: "contain",
            marginBottom: "2rem",
          }}
        />
      </div>
      <div className="col-sm-12 col-lg-10 mb-4">
        <h2 className="border-bottom-2 mb-1 pb-1"> {article.title}</h2>
        <p className="mb-2"> {article.cover}</p>
        <p>{article.content}</p>
      </div>
      <div className="col-sm-12 col-lg-10 mb-4">
        <Comments comments={article.comments} articleId={article.id} />
      </div>
    </div>
  );
};

export default article;
