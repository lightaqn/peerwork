import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  by: string;
}

const FooterBase: React.FC = () => {
  return (
    <footer className="flex min-h-full items-center bg-black text-white p-20 gap-8">
      <Image src="/logo2.jpg" height={20} width={20} className="rounded-full" />
      <div className="text-amber-500">
        PeerWork -<span className="text-white mx-3">2023</span>{" "}
      </div>
      <Link href="/terms">Terms and Conditions</Link>

      <Link href="/Privacy">Privacy</Link>
    </footer>
  );
};

export default FooterBase;
