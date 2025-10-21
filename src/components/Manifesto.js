import React, { useContext } from 'react'
import noteContex from '../contex/notes/noteContex'

const Manifesto = () => {
    const contex = useContext(noteContex);
    const { getYear } = contex;
    return (
        <div>
            <header className="manifesto-hero py-5 text-center">
                <div className="container py-5">
                    <h1 className="display-2 fw-bolder text-danger">The Perpetual Manifesto</h1>
                    <p className="lead text-muted fs-4 mt-3">
                        Our unchanging statement on purpose, process, and commitment to the future.
                    </p>
                </div>
            </header>

            <main className="container manifesto-section">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">

                        <article className="text-start">
                            <h2 className="fw-bold mb-4 text-dark">Preamble: The Dawn of Clarity</h2>

                            <p className="fs-5 text-secondary">
                                We exist to challenge the premise of 'good enough.' In a world that prizes speed over substance, we commit to the deliberate path of excellence. This Manifesto is not a mission statement; it is a contract with our future selves and with every community we touch.
                            </p>

                            <h3 className="fw-bold mt-5 mb-3 text-danger">I. On Intentionality</h3>
                            <p>
                                Every action must be justified by an authentic purpose. We reject the tyranny of momentum—the idea that something should be done merely because it can be done. Our resources are finite, and our responsibility is immense. Therefore, **we build only what is essential and enduring**. This principle ensures our work is always a solution, never an obligation.
                            </p>

                            <h3 className="fw-bold mt-5 mb-3 text-danger">II. The Cultivation of Craft</h3>
                            <p>
                                The true value of our work lies in the rigor of its making. We treat code, design, and communication as crafts, demanding mastery and respect. This means embracing continuous learning, valuing humility over ego, and subjecting every creation to the highest standards of quality. **Perfection is unattainable, but the pursuit of it is mandatory.**
                            </p>

                            <blockquote className="blockquote border-start border-5 border-primary ps-4 py-3 my-5 bg-light rounded">
                                <p className="mb-0 fs-5 fst-italic">“The world doesn't need more information. It needs less noise and more wisdom.”</p>
                                <footer className="blockquote-footer mt-2">A Core Tenet, <cite title="Source Title">The Collective Manifesto</cite></footer>
                            </blockquote>

                            <h3 className="fw-bold mt-5 mb-3 text-danger">III. The Responsibility to Community</h3>
                            <p>
                                Our creations are not isolated acts; they integrate into the lives of others. We are accountable not just to our shareholders, but to the ecosystem we inhabit. We commit to transparency, to accessibility in all its forms, and to prioritizing ethical impact over short-term gain. **We are stewards of the digital realm.**
                            </p>
                        </article>

                    </div>
                </div>

                <section className="row justify-content-center pt-5 mt-5 border-top">
                    <h2 className="text-center fw-bold mb-5">Our Core Principles</h2>

                    <div className="col-12 col-md-6 col-xl-4 mb-4">
                        <div className="card p-4 h-100 principle-card shadow-sm border-0">
                            <i className="bi bi-shield-lock-fill text-success fs-2 mb-3"></i>
                            <h4 className="fw-bold text-success">Security by Design</h4>
                            <p className="text-muted">Security is not a feature added at the end; it is the foundation upon which all else is built. We ensure privacy is a fundamental right.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4 mb-4">
                        <div className="card p-4 h-100 principle-card shadow-sm border-0">
                            <i className="bi bi-infinity text-info fs-2 mb-3"></i>
                            <h4 className="fw-bold text-info">Iterative Truth</h4>
                            <p className="text-muted">We accept that our current understanding is temporary. We embrace feedback and adapt, forever seeking a truer, better version of ourselves.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4 mb-4">
                        <div className="card p-4 h-100 principle-card shadow-sm border-0">
                            <i className="bi bi-clock-history text-warning fs-2 mb-3"></i>
                            <h4 className="fw-bold text-warning">Simple Longevity</h4>
                            <p className="text-muted">Complexity is easy; simplicity is hard. We strive for solutions that are so clean they will endure the test of time and changing technology.</p>
                        </div>
                    </div>

                </section>

            </main>

            <footer className="bg-dark text-white py-4 mt-5">
                <div className="container text-center">
                    <p className="mb-0 fs-6">&copy; {getYear()} The Collective. Read the full document offline upon request.</p>
                </div>
            </footer>
        </div>
    )
}

export default Manifesto