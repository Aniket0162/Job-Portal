import React from 'react';
import { Link } from "react-router";
import '../App.css';

function NavBar(props) {
    return (
        <div>
            <nav className="navbar bg-dark sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
                <div className="container-fluid" >
                    <div style={{height:'3rem',width:'3rem', borderRadius:'50%',overflow: 'hidden', boxShadow: '2px 2px 2px gray', border:'2px solid white'}}>
                        {/* <img src="/Logo2.png" style={{height:'4rem',width:'4rem',backgroundSize:'cover',backgroundPosition:'top left', transform:'translateX(-13%) translateY(-15%)',backgroundRepeat:'no-repeat',margin:'0' }} alt="Job Dekho"></img>  */}
                        <img src={`${process.env.PUBLIC_URL}/Logo2.png`} style={{height:'4rem',width:'4rem',backgroundSize:'cover',backgroundPosition:'top left', transform:'translateY(-13%)',transform:'translateX(-13%)',backgroundRepeat:'no-repeat',margin:'0' }} alt="Job Dekho"/>       
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
                            <li className="nav-item active" style={{marginLeft:'2rem',marginTop:'7px'}}>
                                <Link className="nav-link" to ="/" style={{marginLeft:'1rem'}} >Home</Link>
                            </li>
                            <li className="nav-item" style={{marginTop:'7px'}}>
                                <Link className="nav-link" to ="/job" style={{marginLeft:'1rem'}} >Job</Link>
                            </li>
                            {/* <li className="nav-item" style={{marginLeft:'2rem',marginTop:'7px'}}>
                                <Link className="nav-link" to="/about" >About</Link>

                            </li> */}
                            <li className="nav-item" style={{marginLeft:'2rem',marginTop:'7px'}}>
                                <Link className="nav-link" to="/companies" >Companies</Link>

                            </li>
                            <li className="nav-item" style={{marginLeft:'2rem',marginTop:'7px'}}>
                                <Link className="nav-link" to="/services" >Services</Link>
                            </li>
                            <li className="nav-item" style={{marginLeft:'2rem',marginTop:'7px'}}>
                                <Link className="nav-link" to="/contact"  >Contact</Link>
                            </li>

                        </ul>
                        <div className="d-flex">
                            <button  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal" style={{margin:'0.2rem'}}>Login</button>
                            <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#signupModal" style={{margin:'0.2rem'}}>SignUp</button>
                        </div>
                    </div>
                    
                </div>
            </nav>

                {/* <!-- Login Modal --> */}
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{background:'linear-gradient(#b597f6,#96c6ea)'}}>
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Login to CodersWorld </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput5" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput5" placeholder="name@example.com" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput6" className="form-label">Password</label>
                <input type="password" className="model form-control" id="inputPassword" placeholder="Password" />
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Click me out
                </label>
              </div>
              <br />
              <div>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Login</button>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Signup Modal --> */}
      <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{background:'linear-gradient(#ffefc1,#f86594)'}}>
            <div className="modal-header">
              <h5 className="modal-title" id="signupModalLabel">Signup to CodersWorld account </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput3" className="form-label">Confirm Password</label>
                <input type="password" className="signup form-control" id="inputPassword3" placeholder="Password" />
              </div>


              <br />
              <div>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Create Account</button>
              </div>


            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default NavBar;