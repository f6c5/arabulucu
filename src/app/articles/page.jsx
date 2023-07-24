"use client";

import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Article = () => {
  const { articles } = useSelector((store) => store.articles);

  const [search, setSearch] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    setFilteredArticles(
      articles.filter(
        (article) =>
          article.title.toLowerCase().includes(search.toLowerCase()) ||
          article.cover.toLowerCase().includes(search.toLowerCase()) ||
          article.content.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="d-flex jc-center">
      <div className="col-sm-12 col-lg-10">
        <h1 className="text-center mt-8 border-bottom-2 pb-2 mb-2">
          Makalelerimiz
        </h1>
        <div className="d-flex jc-end">
          <div className="input my-2">
            <input
              type="text"
              value={search}
              placeholder=" "
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "400px" }}
            />
            <label>Makalelerde Ara</label>
          </div>
        </div>
        <div className="card-container">
          {filteredArticles.map((item) => (
            <Link key={item.id} href={`/articles/${item.id}`}>
              <ArticleCard item={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
