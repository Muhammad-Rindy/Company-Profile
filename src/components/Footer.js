import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="containerDua">
        <div className="rowDua">
          <div className="footer-col">
            <h4 className="text-center">About Us</h4>
            <ul>
              <li>
                <a href="#">Story</a>
              </li>
              <li>
                <a href="#">Clients</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-center">Services</h4>
            <ul>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Consulting</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-center">Contact Us</h4>
            <ul>
              <li>
                <a href="#">BtmS</a>
              </li>
              <li>
                <a href="#">BtmS</a>
              </li>
              <li>
                <a href="#">BtmS</a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-center">Social</h4>
            <ul>
              <li>
                <a href="#">
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookSquare /> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter /> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn /> Linked in
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center border-top py-3 border-dark">
          Privacy Policy • Sitemap • Supports • ©2022 Batam Software Digital
        </p>
      </div>
    </footer>
  );
}
