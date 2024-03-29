import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";
import useTitle from "../../hook/useTitle";

const Category = () => {
  useTitle("Home");
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div className="mt-3">
      {id && <h4>This the category News: {categoryNews.length}</h4>}
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
