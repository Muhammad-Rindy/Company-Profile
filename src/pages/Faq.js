import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Layout from "../layout";
import { FcSearch } from "react-icons/fc";
import Accordion from "react-bootstrap/Accordion";

export default function Faq() {
  return (
    <Layout>
      <Container className="containerFaq bg-abu">
        <div>
          <br />
          <h1 className="text-center m-5">
            Frequently Asked Questions? <FcSearch />
          </h1>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h5> How can I pay for essential or premium plan? </h5>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h5>
                  Can I cancel my Essentials or Premium plan subscription at any
                  time?
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h5>
                  We need to add new users to our team. How will that be billed?
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h5>
                  My team wants to cancel its subscription. How do we do that?
                  Can we get a refund?
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <h5>
                  My team wants to cancel its subscription. How do we do that?
                  Can we get a refund?
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <h5>
                  My team wants to cancel its subscription. How do we do that?
                  Can we get a refund?
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <h5>
                  My team wants to cancel its subscription. How do we do that?
                  Can we get a refund?
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
      <Footer />
    </Layout>
  );
}
