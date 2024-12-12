import Image from "next/image";
import Link from "next/link";
import { Header } from "./components/header";
import {Footer} from "./components/footer";
// import { data } from "./data";
export default function Responsive() {
  return (
    <div className="main bg-[#ffffff] w-full">
      <Header />
      <div className="parentContainer">
        <div className="childContainer bounce-left">
          <div className="imageContainer">
            <Image
              src="/img-1.jpg"
              width={320}
              height={300}
              className="img object-cover rounded-md"
              alt="Blogs Pictures"
            />
          </div>
          <h1 className="title">BLOGS FOR YOU</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            hic eum quidem, quae amet, iste odio, eos officiis 
          </p>
          <Link href={"/readmore"}><button className="readMore">Read More</button></Link>
        </div>

        <div className="childContainer bounce-left">
          <div className="imageContainer">
            <Image
              src="/img2.jpg"
              width={320}
              height={300}
              className="img object-cover rounded-md"
              alt="Blogs Pictures"
            />
          </div>
          <h1 className="title">BLOGS FOR YOU</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            hic eum quidem, quae amet, iste odio, eos officiis 
          </p>
          <Link href={"/readmore"}><button className="readMore">Read More</button></Link>
        </div>

        <div className="childContainer bounce-left">
          <div className="imageContainer">
            <Image
              src="/img3.jpg"
              width={320}
              height={300}
              className="img object-cover rounded-md"
              alt="Blogs Pictures"
            />
          </div>
          <h1 className="title">BLOGS FOR YOU</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            hic eum quidem, quae amet, iste odio, eos officiis 
          </p>
          <Link href={"/readmore"}><button className="readMore">Read More</button></Link>
        </div>

        <div className="childContainer bounce-right">
          <div className="imageContainer">
            <Image
              src="/img4.jpg"
              width={320}
              height={300}
              className="img object-cover rounded-md"
              alt="Blogs Pictures"
            />
          </div>
          <h1 className="title">BLOGS FOR YOU</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            hic eum quidem, quae amet, iste odio, eos officiis
          </p>
          <Link href={"/readmore"}><button className="readMore">Read More</button></Link>
        </div>

        <div className="childContainer bounce-right">
          <div className="imageContainer">
            <Image
              src="/img5.jpg"
              width={320}
              height={300}
              className="img object-cover rounded-md"
              alt="Blogs Pictures"
            />
          </div>
          <h1 className="title">BLOGS FOR YOU</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            hic eum quidem, quae amet, iste odio, eos officiis 
          </p>
          <Link href={"/readmore"}><button className="readMore">Read More</button></Link>
        </div>

        <div className="childContainer bounce-right">
          <div className="imageContainer">
            <Image
              src="/img6.jpg"
              width={320}
              height={280}
              className="img object-cover rounded-md"
              alt="Blogs Pictures"
            />
          </div>
          <h1 className="title">BLOGS FOR YOU</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            hic eum quidem, quae amet, iste odio, eos officiis 
          </p>
          <Link href={"/readmore"}><button className="readMore">Read More</button></Link>
        </div>





          </div>
      <Footer />
    </div>
  );
}
