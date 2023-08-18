import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="flex items-center justify-between max-w-[1440px] mx-auto px-6 py-4 sm:px-16">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Car Hub logo"
            className="object-contain"
            width={118}
            height={18}
          />
        </Link>

        <CustomButton
          title="Sign In"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
