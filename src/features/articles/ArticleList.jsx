import { useGetArticlesQuery } from "./articleApi";

export default function ArticleList() {
  const m = useGetArticlesQuery();
  console.log(m);
  return <div></div>;
}
