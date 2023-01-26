// domain.com/news/some-dynamic-value-here

import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;
  return (
    <>
      <div>News sub page</div>
      <div>URL parameter: {newsId}</div>
    </>
  );
};

export default DetailPage;
