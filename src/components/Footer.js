/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
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
                <a href="javSascript:void(0)">Story</a>
              </li>
              <li>
                <a href="javascript:void(0)">Clients</a>
              </li>
              <li>
                <a href="javascript:void(0)">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-center">Services</h4>
            <ul>
              <li>
                <a href="javascript:void(0)">Marketing</a>
              </li>
              <li>
                <a href="javascript:void(0)">Consulting</a>
              </li>
              <li>
                <a href="javascript:void(0)">Development</a>
              </li>
              <li>
                <a href="javascript:void(0)">Design</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-center">Contact Us</h4>
            <ul>
              <li>
                <a href="javascript:void(0)">BtmS</a>
              </li>
              <li>
                <a href="javascript:void(0)">BtmS</a>
              </li>
              <li>
                <a href="javascript:void(0)">BtmS</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-center">Social</h4>
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <FaFacebookSquare /> Facebook
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <FaTwitter /> Twitter
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
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
