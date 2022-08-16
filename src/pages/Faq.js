import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Layout from "../layout";
import { FcSearch } from "react-icons/fc";

export default function Faq() {
  const faqTag = document.querySelectorAll(".faq");

  // Hide other elements and change icon.
  const hideTag = () => {
    faqTag.forEach((item) => {
      item.classList.remove("open");
      item.children[1].innerHTML = "&#43;";
    });
  };

  // Toggle targeted element to show with froEach Loop.
  faqTag.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.className === "btn") {
        hideTag();
        e.target.parentElement.classList.toggle("open");
        e.target.innerHTML = "&#8722;";
      }
    });
  });

  return (
    <Layout>
      <Container className="containerFaq bg-abu">
        <main>
          <h1>
            Frequently Asked Questions? <FcSearch />
          </h1>

          <div className="faq open">
            <div className="faq_text">
              <h3>How can I pay for essential or premium plan?</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <span className="btn">&#8722;</span>
          </div>

          <div className="faq">
            <div className="faq_text">
              <h3>
                Can I cancel my Essentials or Premium plan subscription at any
                time?
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <span className="btn">&#43;</span>
          </div>

          <div className="faq">
            <div className="faq_text">
              <h3>
                We need to add new users to our team. How will that be billed?
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <span className="btn">&#43;</span>
          </div>

          <div className="faq">
            <div className="faq_text">
              <h3>
                My team wants to cancel its subscription. How do we do that? Can
                we get a refund?
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <span className="btn">&#43;</span>
          </div>

          <div className="faq">
            <div className="faq_text">
              <h3>
                Do you offer discounts for non-profit organisations or
                educational institutions?
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <span className="btn">&#43;</span>
          </div>
        </main>
      </Container>
      <Footer />
    </Layout>
  );
}
