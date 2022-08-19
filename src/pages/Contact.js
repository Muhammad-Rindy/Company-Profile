import React from "react";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import Layout from "../layout";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <Layout>
      <div className="contactDua">
        <div className="position-relative vh-100">
          <img
            src="assets/images/company.jpg"
            alt="gambar"
            className="heroImageContact"
          />
          <div className="position-absolute top-50 start-50 translate-middle">
            <section className="contact">
              <div className="content">
                <h2 className="display-3 fw-bold">Contact Us</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem quo recusandaasase, consequuntur inventore eius,
                  molestiae autem, expedita odit porro mollitia eos perspiciatis
                  labore ipsum architecto neque vitae nam laudantium nesciunt.
                </p>
              </div>

              <div className="boxContact">
                <div className="contactInfo">
                  <div className="box">
                    <div className="icon">
                      <FiMapPin />
                    </div>
                    <div className="text">
                      <h3>Address</h3>
                      <p>Batam Centre</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="icon">
                      <MdOutlineMail />
                    </div>
                    <div className="text">
                      <h3>E-mail</h3>
                      <p>muhammadrindy2705@gmail.com</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="icon">
                      <HiOutlinePhone />
                    </div>
                    <div className="text">
                      <h3>Phone</h3>
                      <p>01124-12114-54</p>
                    </div>
                  </div>
                </div>

                <div className="contactForm">
                  <form>
                    <h2 className="text-center">Send Message</h2>
                    <div className="inputBox">
                      <input type="text" name="" required="required" />
                      <span>Full Name</span>
                    </div>
                    <div className="inputBox">
                      <input type="text" name="" required="required" />
                      <span>Email</span>
                    </div>
                    <div className="inputBox">
                      <textarea required="required"></textarea>
                      <span>Write Your Message ...</span>
                    </div>
                    <div className="inputBox">
                      <input
                        type="submit"
                        name=""
                        value="Send"
                        className="fw-bold"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
