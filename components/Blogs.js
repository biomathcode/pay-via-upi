import Link from "next/link";
import Card from "./Card";

const data = [
  {
    header: "How to add Donate via UPI option on your wix site",
    description:
      "Learn step by step how to add UPI qrcode to get payment on your wix site",
    link: "https://payviaupi.com/wixsite",
    image: "/header.png",
  },
  {
    header: "How to add Pay via UPI option on nextjs site",
    description:
      "Learn step by step how to add UPI qrcode to get payment on your nextjs site",
    link: "blogs/how-to-add-pay-via-upi-button-on-nextjs-site",
    image: "/header.png",
  },
];

function BlogContainer() {
  return (
    <div className="flex column">
      <h2>How to ?</h2>
      {data.map((el) => {
        return (
          <Link href={el.link} key={el.header} passHref>
            <a target="_blank">
              <Card header={el.header} description={el.description} />
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export default BlogContainer;
