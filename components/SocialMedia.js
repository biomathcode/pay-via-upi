import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./Icons";

function SocialMedia() {
  return (
    <div className="flex gap">
      <Link href="https://www.linkedin.com/in/pay-via-upi-034a8b23a" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </Link>

      <Link href="https://www.instagram.com/payviaupi" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
      </Link>
      <Link href="https://twitter.com/PayViaUPI" passHref>
        <a target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
      </Link>
      <Link
        href="https://www.facebook.com/Pav-Via-UPI-104120712308796/"
        passHref
      >
        <a target="_blank" rel="noopener noreferrer">
          <FacebookIcon width="15" />
        </a>
      </Link>
    </div>
  );
}

export default SocialMedia;
