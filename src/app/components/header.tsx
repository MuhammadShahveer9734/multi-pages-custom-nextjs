import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="container-fluid w-full bg-[#f4f4f4]">
    <div className="container-nav ">
      <div className="header-nav shake-horizontal">
        <Image
          src="/blogs.png"
          width={160}
          height={160}
          className="logo-nav font-bold"
          alt="Site Logo"
        />

        <ul className="nav">
          
            <li className="p-3 text-xl font font-sans ">
            <Link href={"/"}> Home</Link>
            </li>
          
          
            <li className="p-3 text-xl font font-sans ">
            <Link href={"/about"}> About Us </Link>
            </li>
          
          
            <li className="p-3 text-xl font font-sans ">
            <Link href="#"> Blogs</Link>
            </li>
          
          
            <li className="p-3 text-xl font font-sans ">
            <Link href="#"> Latest New </Link> 
            </li>
          
          
            <li className="p-3 text-xl font font-sans ">
            <Link href="#"> Contact Us </Link>
            </li>
          
        </ul>
      </div>
    </div>
    </div>
  );
}

