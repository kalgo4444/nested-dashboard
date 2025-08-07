import React from "react";

const Article = ({ articledata }) => {
  return (
    <ul className="grid grid-cols-4 gap-5">
      {articledata?.map((article) => (
        <li key={article.id}>
          <article className="border p-2 rounded-md shadow-md bg-white min-h-[150px] flex flex-col gap-2">
            <span className="mb-3 text-2xl text-blue-400 font-semibold">
              {article.title}
            </span>
            <p className="mb-3 text-lg font-medium">{article.description}</p>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(Article);
