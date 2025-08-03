import { Button } from "@material-tailwind/react";
import { useGetArticlesQuery, useLazyGetArticlesQuery } from "./articleApi";

export default function ArticleList() {
  const { isLoading, error, data } = useGetArticlesQuery();
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.data}</h1>;
  // console.log(error);
  // const [getArticles, { isLoading, error, data }] = useLazyGetArticlesQuery();
  return (
    <div className="p-5">
      {/* <Button onClick={() => getArticles()}>Get Articles</Button> */}
      {data &&
        data.map((article) => {
          return (
            <div key={article.id} className="p-3 space-y-3">
              <img src={article.image} alt="profile" className="" />
              <h1>{article.title}</h1>
              <p>{article.detail}</p>
            </div>
          );
        })}
    </div>
  );
}
