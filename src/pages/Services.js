import React from "react";
import { FaLaptop } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { BiLineChart, BiPaint } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { TbBusinessplan } from "react-icons/tb";
import Footer from "../components/Footer";
import Layout from "../layout";
import { Container } from "react-bootstrap";

export default function Services() {
  return (
    <Layout>
      <br />
      <br />
      <Container>
        <div className="wrapperServices">
          <h1>Our Services</h1>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
            dolorem aliquid eius harum earum eum rem recusandae, vel fuga?
            Architecto delectus deserunt suscipit voluptatem fugiat consequuntur
            veritatis sit perferendis corrupti.
          </p>

          <div className="boxServices">
            <div className="cardServices">
              <h1>
                <BsBarChartLine />
              </h1>
              <h2>Marketing Services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt recusandae, iusto itaque quas inventore corporis esse
                debitis molestias eligendi et ad tempore ducimus saepe ipsam
                aspernatur, voluptates beatae voluptate? Vero.
              </p>
            </div>
            <div className="cardServices">
              <h1>
                <FaLaptop />
              </h1>
              <h2>Web App Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt recusandae, iusto itaque quas inventore corporis esse
                debitis molestias eligendi et ad tempore ducimus saepe ipsam
                aspernatur, voluptates beatae voluptate? Vero.
              </p>
            </div>
            <div className="cardServices">
              <h1>
                <BiLineChart />
              </h1>
              <h2>24/7 Call Center Services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt recusandae, iusto itaque quas inventore corporis esse
                debitis molestias eligendi et ad tempore ducimus saepe ipsam
                aspernatur, voluptates beatae voluptate? Vero.
              </p>
            </div>
            <div className="cardServices">
              <h1>
                <TiMessages />
              </h1>
              <h2>Social Media Marketing</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt recusandae, iusto itaque quas inventore corporis esse
                debitis molestias eligendi et ad tempore ducimus saepe ipsam
                aspernatur, voluptates beatae voluptate? Vero.
              </p>
            </div>
            <div className="cardServices">
              <h1>
                <TbBusinessplan />
              </h1>
              <h2>Corpotare Business</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt recusandae, iusto itaque quas inventore corporis esse
                debitis molestias eligendi et ad tempore ducimus saepe ipsam
                aspernatur, voluptates beatae voluptate? Vero.
              </p>
            </div>
            <div className="cardServices">
              <h1>
                <BiPaint />
              </h1>
              <h2>Creative Consultancy</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt recusandae, iusto itaque quas inventore corporis esse
                debitis molestias eligendi et ad tempore ducimus saepe ipsam
                aspernatur, voluptates beatae voluptate? Vero.
              </p>
            </div>
          </div>
          <br />
          <br />
        </div>
      </Container>
      <Footer />
    </Layout>
  );
}
