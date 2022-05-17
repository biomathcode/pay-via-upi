// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = req.query;
  console.log(data);
  const svgdata = `<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="400"
      height="180"
    >
      <rect
        x="50"
        y="20"
        rx="20"
        ry="20"
        width="150"
        height="150"
        style="fill:red;stroke: black;stroke-width:5;opacity:0.5"
      />
    <text stroke="100" x="20" y="35">${data.text}</text>

    </svg>
  `;
  res.setHeader("content-type", "image/svg+xml");
  res.status(200).send(svgdata);
}
