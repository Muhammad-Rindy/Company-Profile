import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../layout";
import Card from "react-bootstrap/Card";

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
      <section className="section container bg-abu">
        <Container>
          <h1 className="text-center">About Me</h1>
          <hr />
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
          <br />
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
      </section>
      <section className="section bg-abu">
        <h1 className="text-center">Galery</h1>
        <div className="imagesGalery">
          <Card style={{ width: "45rem" }} className="galeriImage">
            <Card.Img variant="top" src="assets/images/winner.jpg" />
            <Card.Body>
              <Card.Title className="text-center">Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-secondary" type="button">
                  Pictures
                </button>
              </div>
            </Card.Body>
          </Card>

          <Card style={{ width: "45rem" }} className="galeriImage">
            <Card.Img variant="top" src="assets/images/winner.jpg" />
            <Card.Body>
              <Card.Title className="text-center">Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-secondary" type="button">
                  Video
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>
      <h4 className="topArtikel">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        molestiae quia, ut sequi nihil libero enim magni optio voluptate,
        facilis quam. Veritatis eius quae debitis id quasi repellat eveniet
        expedita!
      </h4>

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
    </Layout>
  );
}
