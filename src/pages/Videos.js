import React from "react";
import Footer from "../components/Footer";
import Layout from "../layout";

export default function Videos() {
  return (
    <Layout>
      <br />
      <br />
      <div className="bodyGalery bg-abu">
        <h1 className="judulGalery">My Videos</h1>
        <div className="containerGalery">
          <div className="cardGalery">
            <img
              src="assets/images/company.jpg"
              alt="gambar"
              className="w-100 h-100"
            />
            <div className="img-title">
              <h3 className="textH3Galery">Martin</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                cumque saepe sed odio quas minima, ullam cupiditate amet harum,
                expedita nostrum vel repudiandae. Porro, accusantium distinctio?
                Repudiandae nemo optio cupiditate.
              </p>
            </div>
          </div>
          <div className="cardGalery">
            <img
              src="assets/images/company.jpg"
              alt="gambar"
              className="w-100 h-100"
            />
            <div className="img-title">
              <h3 className="textH3Galery">Martin</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                cumque saepe sed odio quas minima, ullam cupiditate amet harum,
                expedita nostrum vel repudiandae. Porro, accusantium distinctio?
                Repudiandae nemo optio cupiditate.
              </p>
            </div>
          </div>
          <div className="cardGalery">
            <img
              src="assets/images/company.jpg"
              alt="gambar"
              className="w-100 h-100"
            />
            <div className="img-title">
              <h3 className="textH3Galery">Martin</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                cumque saepe sed odio quas minima, ullam cupiditate amet harum,
                expedita nostrum vel repudiandae. Porro, accusantium distinctio?
                Repudiandae nemo optio cupiditate.
              </p>
            </div>
          </div>
          <div className="cardGalery">
            <img
              src="assets/images/company.jpg"
              alt="gambar"
              className="w-100 h-100"
            />
            <div className="img-title">
              <h3 className="textH3Galery">Martin</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                cumque saepe sed odio quas minima, ullam cupiditate amet harum,
                expedita nostrum vel repudiandae. Porro, accusantium distinctio?
                Repudiandae nemo optio cupiditate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
