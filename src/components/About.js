import { useContext } from "react";
import { Link } from "react-router-dom"
import noteContex from "../contex/notes/noteContex"


export default function About() {
  const context = useContext(noteContex);
  const {getYear} = context;
  return (
    <>
      <div>
        <header className="bg-primary text-white text-center py-5 mb-5">
          <div className="container">
            <h1 className="display-3 fw-light">Building the Future, Responsively.</h1>
            <p className="lead">Our commitment to excellence drives every decision we make, from code to customer service.</p>
            <Link exact="true" to="/manifesto" className="btn btn-light btn-lg mt-3">Read Our Manifesto &rarr;</Link>
          </div>
        </header>

        <main className="container">

          <section className="row py-5 border-bottom">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold text-primary mb-3">Our Story</h2>
              <p>Founded in **2016** by a small team of developers, our company was built on the principle of accessibility. We saw a gap in the market for high-quality, scalable solutions that genuinely put the user first.</p>
              <p>Today, we've grown into a global team, yet we still operate with the same lean, iterative approach we started with. Our success is measured not just by profits, but by the positive impact we have on our clients' operations.</p>
            </div>

            <div className="col-md-6">
              <h2 className="fw-bold text-secondary mb-3">Key Milestones</h2>

              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <i className="bi bi-rocket-fill text-success fs-5 me-3"></i>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold d-flex">Company Launch</div>
                    Secured initial seed funding and launched our V1 platform.
                  </div>
                  <span className="badge bg-secondary">2016</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <i className="bi bi-people-fill text-success fs-5 me-3"></i>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold d-flex">Global Expansion</div>
                    Opened our first international office in Dublin.
                  </div>
                  <span className="badge bg-secondary">2020</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <i className="bi bi-award-fill text-success fs-5 me-3"></i>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold d-flex">Industry Recognition</div>
                    Awarded "Most Innovative Tech Solution" by Tech Monthly.
                  </div>
                  <span className="badge bg-secondary">2023</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="py-5">
            <h2 className="text-center fw-bold mb-5">Our Core Principles</h2>

            <div className="row text-center g-4">

              <div className="col-sm-6 col-lg-4">
                <div className="card p-3 border-0 shadow-sm h-100">
                  <div className="card-body">
                    <i className="bi bi-lightbulb-fill icon-large mb-3"></i>
                    <h3 className="card-title text-dark">Innovation</h3>
                    <p className="card-text text-muted">We maintain a relentless focus on research and development to deliver solutions that are ahead of the curve.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="card p-3 border-0 shadow-sm h-100">
                  <div className="card-body">
                    <i className="bi bi-patch-check-fill icon-large mb-3"></i>
                    <h3 className="card-title text-dark">Integrity</h3>
                    <p className="card-text text-muted">Transparency and ethical practices guide all our client relationships and internal operations.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                <div className="card p-3 border-0 shadow-sm h-100">
                  <div className="card-body">
                    <i className="bi bi-tree-fill icon-large mb-3"></i>
                    <h3 className="card-title text-dark">Sustainability</h3>
                    <p className="card-text text-muted">We are committed to building not just successful products, but a sustainable future for our planet.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 mx-auto d-none d-sm-block">
                <div className="card p-3 border-0 shadow-sm h-100">
                  <div className="card-body">
                    <i className="bi bi-share-fill icon-large mb-3"></i>
                    <h3 className="card-title text-dark">Collaboration</h3>
                    <p className="card-text text-muted">We believe the best solutions come from diverse teams working together openly and honestly.</p>
                  </div>
                </div>
              </div>

            </div>
          </section>

        </main>

        <footer className="bg-dark text-white py-4 mt-5">
          <div className="container text-center">
            <p className="mb-0">&copy; {getYear()} The Responsive Company. All rights reserved.</p>
          </div>
        </footer>
      </div>

    </>
  )
}
