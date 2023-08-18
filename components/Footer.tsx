import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 border-t border-gray-100 mt-5">
      <div
        className="flex max-md:flex-col flex-wrap justify-between gap-5
      px-6 py-10 max-md:px-16"
      >
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="Car Hub logo"
            className="object-contain"
            width={118}
            height={18}
          />
          <p className="text-base text-gray-700">
            Carhub 2023. <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className="footer__link">
              <h3 className="font-bold">{footerlink.title}</h3>
              {footerlink.links.map((item) => (
                <Link key={item.title} href={item.url}>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex justify-between items-center flex-wrap
      px-6 py-10 mt-10 border-t border-gray-100 max-md:px-16"
      >
        <p>@2023 CarHub. All rights reserved.</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
