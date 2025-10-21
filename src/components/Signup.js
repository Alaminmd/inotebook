import { Link, useNavigate } from "react-router-dom"
import noteContex from "../contex/notes/noteContex"
import { useContext } from "react";

const Signup = () => {

  const context = useContext(noteContex);
  const { createaccount, setcreateaccount } = context;
  const navigate = useNavigate();
  const onChange = (e) => {
    setcreateaccount({ ...createaccount, [e.target.name]: e.target.value })
  };
  const handleCreateAccount = async (e) => {
    e.preventDefault();
    const host = "http://localhost:5000";
    const url = `${host}/api/auth/create-user`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: createaccount.name, email: createaccount.email, passWord: createaccount.password, number: createaccount.number })
      });
      const result = await response.json();
      if (result.success === true) {
        alert("Account Create Successful...");
        setcreateaccount({ name: "", email: "", password: "", number: "" });
        navigate("/login");
      } else {
        alert("User Already Exits or Enter a valid Information!")
      }

    } catch (error) {
      console.error(error.message);
      alert("Server Down! Please, try again after 10 minute.")
    }


  };
  return (
    <div className='body'>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 col-sm-12">
            <div className="card shadow-lg p-4 custom-card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4 custom-title">
                  Join Our Community
                </h2>

                <form onSubmit={handleCreateAccount}>
                  <div className="mb-3 form-floating">
                    <input type="text" className="form-control custom-input" id="floatingUsername" placeholder="Full Name" required autoComplete="full-name" name="name" value={createaccount.name} onChange={onChange} />
                    <label htmlFor="floatingUsername">Full Name</label>
                  </div>

                  <div className="mb-3 form-floating">
                    <input type="email" className="form-control custom-input" id="floatingEmail" placeholder="uniqueName@example.com" required autoComplete="new-email" name="email" value={createaccount.email} onChange={onChange} />
                    <label htmlFor="floatingEmail">Email address</label>
                  </div>

                  <div className="mb-3 form-floating">
                    <input type="password" className="form-control custom-input" id="floatingPassword" placeholder="Password" required autoComplete="new-password" name="password" value={createaccount.password} onChange={onChange} />
                    <label htmlFor="floatingPassword" autoComplete="on" >Password</label>
                  </div>

                  <div className="mb-4 form-floating">
                    <input type="number" className="form-control custom-input" id="floatingNumber" placeholder="Your Number" required autoComplete="number" name="number" value={createaccount.number} onChange={onChange} />
                    <label htmlFor="floatingConfirmPassword">Phone Number</label>
                  </div>

                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" autoComplete="check-box" />
                    <label className="form-check-label text-muted" htmlFor="flexCheckDefault">
                      I agree to the <a href="/" className="text-decoration-none">Terms and Conditions</a>
                    </label>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary custom-btn text-dark">
                      Create Account
                    </button>
                  </div>
                </form>

                <p className="text-center mt-4 mb-0 text-muted">
                  Already a member? <Link exact="true" to="/login" className="text-decoration-none fw-bold">Sign In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid confirmation-box mb-3">
        <div className="row w-100 justify-content-center max-width">

          <div className="col-12 col-md-12 col-lg-12 ">

            <div className="p-4 p-md-5 text-center bg-white border border-success rounded-4 shadow-lg">

              <i className="bi bi-check-circle-fill text-success display-1 mb-4"></i>

              <h1 className="display-4 fw-bold text-dark mb-3">
                You're All Set! 🎉
              </h1>

              <p className="lead text-secondary mb-4">
                Thank you for joining **The Responsive iNoteBook**.
              </p>
              <blockquote>
                Stop collecting files and start curating knowledge. iNotebook isn't just a place to take notes; it's your personal, future-proof command center where scattered thoughts are instantly transformed into a cohesive, searchable, and always-synced library. Join now to trade digital clutter for true clarity and own your creative process.
              </blockquote>



            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup