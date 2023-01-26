// domain.com/news
import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <div>News page</div>
      <ul>
        <li>
          <Link href="/news/something-useful">something useful</Link>
        </li>
        <li>
          <Link href="/news/a-second-link">a second link</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
