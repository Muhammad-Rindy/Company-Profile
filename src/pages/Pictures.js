import React from "react";
import Footer from "../components/Footer";
import Layout from "../layout";

export default function Pictures() {
  return (
    <Layout>
      <br />
      <br />
      <div className="bg-abu">
        <h1 className="judulGalery">Pictures Collection Since 2022</h1>
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
        <br />
      </div>
      <Footer />
    </Layout>
  );
}
