import Link from "next/link";
import Card from "./Card";

const data = [
  {
    header: "Nextjs: How to add Pay via UPI option on nextjs site",
    description:
      "Learn step by step how to add UPI qrcode to get payment on your nextjs site",
    link: "blogs/how-to-add-pay-via-upi-widget-on-nextjs-site",
    image: "/How-to-add-pay-via-upi-widget-on-nextjs-site.jpeg",
  },
  {
    header: "React: How to add Pay via UPI option on React site",
    description: "add UPI donation option to your react site ",
    link: " blogs/how-to-add-pay-via-upi-widget-on-create-react-app",
    image: "/How-to-add-pay-via-upi-widget-on-react-site.jpeg",
  },
  {
    header: "HTML CSS: How to add Pay via UPI option on html css site",
    description: "add UPI donation option to your html css  site ",
    link: " blogs/how-to-add-pay-via-upi-widget-on-html-css-site",
    image: "/How-to-add-pay-via-upi-widget-on-html-css-site.jpeg",
  },
];

function BlogContainer() {
  return (
    <article className="flex column">
      <h2>How to ?</h2>
      {data.map((el) => {
        return (
          <Link href={el.link} key={el.header} passHref>
            <a target="_blank">
              <Card
                header={el.header}
                description={el.description}
                image={el.image}
              />
            </a>
          </Link>
        );
      })}
    </article>
  );
}

export default BlogContainer;
