import Head from "next/head";
import Image from "next/image";
function BlogNextSite() {
  return (
    <div className="flex column center">
      <div style={{ maxWidth: "350px", marginTop: "100px" }}>
        <Head>
          <title>How to add pay via upi Button on nextjs site?</title>
        </Head>
        <article>
          <h2>How to add pay via upi Button on nextjs site?</h2>

          <main>
            <p>
              1. Get the script tag from
              <a src="https://payviaupi.com"> PayViaUPI.com </a>
              add your details UPI ID, name.
            </p>
            <p>
              2. Instead of using the script tag, we will use the Script tag
              provide by Nextjs like this
            </p>
            <Image
              width="400px"
              height="400px"
              src="/snippet.png"
              alt="code snippet"
            />
            <p>
              3. Add strategy attribute to Script tad with value
              &apos;beforeInteractive&apos;
            </p>
            <p>
              4. You are done. You would see the pay via UPI button on the Page
              that you added the Script tag.
            </p>
          </main>
        </article>
      </div>
    </div>
  );
}

export default BlogNextSite;
