import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../layout";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <div className="position-relative vh-100" id="home">
        <img
          src="assets/images/company.jpg"
          alt="gambar"
          className="heroImage"
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="fw-bold TextHero">Batam Software Digital</h1>
        </div>
      </div>
      <Container className="boxAbout bg-abu py-5" id="about">
        <h1 className="text-center">About Me</h1>
        <hr />
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          fuga magni velit optio! Laborum amet libero quidem assumenda earum vel
          placeat iure optio? Quia numquam praesentium exercitationem unde,
          libero ullam? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Assumenda aliquam obcaecati quaerat enim similique dolorem
          reprehenderit modi, fuga fugit dolores repudiandae cumque provident
          tempore nemo. Harum et aliquam nisi? Doloribus! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Asperiores eveniet esse ipsum quam
          consequuntur? Harum quas quia mollitia ratione earum ad. Tempora illo
          cumque unde quas quasi. Eligendi, nihil inventore? Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Obcaecati quisquam quia est
          rem? Ipsum, aliquid error? Neque porro mollitia facere nesciunt
          nostrum, architecto cumque obcaecati necessitatibus rerum delectus,
          veniam earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Culpa iusto minima sed minus cum atque porro mollitia totam quibusdam
          deleniti! Quisquam illo soluta unde, amet quos consequatur nesciunt
          alias aliquid.
        </p>
        <br />
        <br />
        <span className="About">
          <img src="assets/images/winner.jpg" className="gambarAbout" />
        </span>
        <span className="About">
          <img src="assets/images/winner.jpg" className="gambarAbout" />
        </span>
        <span className="About">
          <img src="assets/images/winner.jpg" className="gambarAbout" />
        </span>
        <span className="About">
          <img src="assets/images/winner.jpg" className="gambarAbout" />
        </span>
      </Container>

      <h4 className="topArtikel" id="artikel">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        molestiae quia, ut sequi nihil libero enim magni optio voluptate,
        facilis quam. Veritatis eius quae debitis id quasi repellat eveniet
        expedita!
      </h4>
      <Container>
        <div className="boxArtikel">
          <img src="assets/images/winner.jpg" className="gambarArtikel" />

          <p className="tulisanArtikel">
            <h1 className="text-center fw-bold text-uppercase">Title Blog</h1>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            earum necessitatibus eaque? Delectus dignissimos quae et ex
            praesentium nam fugit, asperiores consectetur molestias eius sint,
            aliquam eveniet mollitia enim velit. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Excepturi eum quos nam! Eligendi
            perferendis accusamus tempore laboriosam. Nisi neque rem nobis, nemo
            dicta, molestiae enim expedita nostrum officiis ab ut!
          </p>
        </div>
        <div className="boxArtikel">
          <img src="assets/images/winner.jpg" className="gambarArtikelDua" />

          <p className="tulisanArtikel">
            <h1 className="text-center fw-bold text-uppercase">Title Blog</h1>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            earum necessitatibus eaque? Delectus dignissimos quae et ex
            praesentium nam fugit, asperiores consectetur molestias eius sint,
            aliquam eveniet mollitia enim velit. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Excepturi eum quos nam! Eligendi
            perferendis accusamus tempore laboriosam. Nisi neque rem nobis, nemo
            dicta, molestiae enim expedita nostrum officiis ab ut!
          </p>
        </div>
        <div className="boxArtikel">
          <img src="assets/images/winner.jpg" className="gambarArtikel" />

          <p className="tulisanArtikel">
            <h1 className="text-center fw-bold text-uppercase">Title Blog</h1>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            earum necessitatibus eaque? Delectus dignissimos quae et ex
            praesentium nam fugit, asperiores consectetur molestias eius sint,
            aliquam eveniet mollitia enim velit. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Excepturi eum quos nam! Eligendi
            perferendis accusamus tempore laboriosam. Nisi neque rem nobis, nemo
            dicta, molestiae enim expedita nostrum officiis ab ut!
          </p>
        </div>
      </Container>
      <Footer />
    </Layout>
  );
}
