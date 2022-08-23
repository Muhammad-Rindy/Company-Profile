import React from "react";
import Footer from "../components/Footer";
import Layout from "../layout";
import Card from "react-bootstrap/Card";

export default function Pictures() {
  return (
    <Layout>
      <br />
      <h1 className="judulGalery">Videos Collection Since 2022</h1>
      <div className="containerGalery">
        <Card className="cardGalery">
          <Card.Img variant="top" src="assets/images/winner.jpg" />
          <Card.Body>
            <Card.Text className="text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardGalery">
          <Card.Img variant="top" src="assets/images/winner.jpg" />
          <Card.Body>
            <Card.Text className="text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardGalery">
          <Card.Img variant="top" src="assets/images/winner.jpg" />
          <Card.Body>
            <Card.Text className="text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardGalery">
          <Card.Img variant="top" src="assets/images/winner.jpg" />
          <Card.Body>
            <Card.Text className="text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardGalery">
          <Card.Img variant="top" src="assets/images/winner.jpg" />
          <Card.Body>
            <Card.Text className="text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardGalery">
          <Card.Img variant="top" src="assets/images/winner.jpg" />
          <Card.Body>
            <Card.Text className="text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </Layout>
  );
}
