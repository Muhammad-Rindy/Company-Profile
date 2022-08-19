import React from "react";
import Footer from "../components/Footer";
import Layout from "../layout";

export default function Prices() {
  return (
    <Layout>
      <div className="pricing-plan-containerPrices">
        <section className="pricing-plan">
          <div className="pricing-plan__header">
            <h1 className="pricing-plan__title border-bottom border-2 border-dark">
              Starter Plan
            </h1>
            <h2 className="pricing-plan__summary">for those getting started</h2>
          </div>
          <div className="pricing-plan__description">
            <ul className="pricing-plan__list">
              <li className="pricing-plan__features">Feature #1</li>
              <li className="pricing-plan__features">Feature #2</li>
              <li className="pricing-plan__features">Feature #3</li>
            </ul>
          </div>
          <div className="pricing-plan__actions">
            <p className="pricing-plan__cost">$68</p>
            <p className="pricing-plan__text">per month</p>
            <a href="./" className="pricing-plan__button">
              Purchase
            </a>
            <p className="pricing-plan__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              sequi temporibus iste deserunt?
            </p>
          </div>
        </section>
        <section className="pricing-plan pricing-plan--highlighted">
          <div className="pricing-plan__special-text">Recommended</div>
          <div className="pricing-plan__header">
            <h1 className="pricing-plan__title border-bottom border-2 border-dark">
              Starter Plan
            </h1>
            <h2 className="pricing-plan__summary">for those getting started</h2>
          </div>
          <div className="pricing-plan__description">
            <ul className="pricing-plan__list">
              <li className="pricing-plan__features">Feature #1</li>
              <li className="pricing-plan__features">Feature #2</li>
              <li className="pricing-plan__features">Feature #3</li>
            </ul>
          </div>
          <div className="pricing-plan__actions">
            <p className="pricing-plan__cost">$68</p>
            <p className="pricing-plan__text">per month</p>
            <a href="./" className="pricing-plan__button">
              Purchase
            </a>
            <p className="pricing-plan__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              sequi temporibus iste deserunt?
            </p>
          </div>
        </section>
        <section className="pricing-plan">
          <div className="pricing-plan__header">
            <h1 className="pricing-plan__title border-bottom border-2 border-dark">
              Starter Plan
            </h1>
            <h2 className="pricing-plan__summary">for those getting started</h2>
          </div>
          <div className="pricing-plan__description">
            <ul className="pricing-plan__list">
              <li className="pricing-plan__features">Feature #1</li>
              <li className="pricing-plan__features">Feature #2</li>
              <li className="pricing-plan__features">Feature #3</li>
            </ul>
          </div>
          <div className="pricing-plan__actions">
            <p className="pricing-plan__cost">$68</p>
            <p className="pricing-plan__text">per month</p>
            <a href="./" className="pricing-plan__button">
              Purchase
            </a>
            <p className="pricing-plan__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              sequi temporibus iste deserunt?
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </Layout>
  );
}
