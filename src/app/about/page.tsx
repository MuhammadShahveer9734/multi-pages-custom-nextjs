import { Header } from "../components/header";
import {Footer} from "../components/footer";

export default function About() {
  return (
    <div>
      <Header />
      <div className="container-1">
        <main className="main-1">
          <h1 className="title-1">About Us</h1>
          <p className="description-1">
            Welcome to <strong>Blog Name</strong>, a space where we explore
            topics like lifestyle, technology, travel, and more. Our
            mission is to provide insightful, engaging, and practical content
            that inspires and informs our readers.
          </p>
          <p className="description-1">
            Whether you're here to learn something new, find a fresh
            perspective, or simply enjoy a good read, we’ve got you covered. We
            believe in the power of storytelling and staying curious. Join us as
            we dive into the latest trends, share personal experiences, and
            offer expert tips, while building a community of passionate
            individuals. Let’s grow, learn, and discover together!
          </p>
        </main>
      </div>
      <Footer />
    </div>
  );
}
