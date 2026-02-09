import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-bold mb-6">About Us</h2>{" "}
            <p>
              Music school is a premier institution dedicated to nurturing
              musical talent and fostering creativity.
            </p>{" "}
          </div>
          <div>
            <h2 className="font-bold mb-6">Quick Links</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/course">Course</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-6">Follow Us</h2>
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Instagram</div>
          </div>
          <div>
            <h2 className="font-bold mb-6">Contact Us</h2>
            <p>Email: info@musicschool.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Music Ave, Melody City, USA</p>
          </div>
        </div>
        <p className="text-center mt-8">
          @2024 Music School. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
