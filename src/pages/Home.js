import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../layout";

export default function Home() {
  return (
    <Layout>
      <div className="position-relative vh-100">
        <img
          src="assets/images/company.jpg"
          alt="gambar"
          className="heroImage w-100 h-100"
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="text-light display-3 fw-bold">
            Batam Software Digital
          </h1>
        </div>
      </div>
      <section className="section bg-gray-dark">
        <Container>
          <h1 className="text-center">Tentang Kami</h1>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            fuga magni velit optio! Laborum amet libero quidem assumenda earum
            vel placeat iure optio? Quia numquam praesentium exercitationem
            unde, libero ullam? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Assumenda aliquam obcaecati quaerat enim similique
            dolorem reprehenderit modi, fuga fugit dolores repudiandae cumque
            provident tempore nemo. Harum et aliquam nisi? Doloribus! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            eveniet esse ipsum quam consequuntur? Harum quas quia mollitia
            ratione earum ad. Tempora illo cumque unde quas quasi. Eligendi,
            nihil inventore? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Obcaecati quisquam quia est rem? Ipsum, aliquid error? Neque
            porro mollitia facere nesciunt nostrum, architecto cumque obcaecati
            necessitatibus rerum delectus, veniam earum. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Culpa iusto minima sed minus cum
            atque porro mollitia totam quibusdam deleniti! Quisquam illo soluta
            unde, amet quos consequatur nesciunt alias aliquid.
          </p>
        </Container>
      </section>
    </Layout>
  );
}
