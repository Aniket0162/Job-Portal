import React from "react";

function Footer(props) {
    return (
        <div>
<section >
  <footer className="bg-body-#26272b text-center mt-5 ">
    <div className="container p-2">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">Footer Content</h5>
          <p className="font-italic">
          Empowering future developers with hands-on coding education, anytime, anywhere. Learn to code through real-world projects, guided by industry experts.Interactive, project-based coding education designed for modern learners.Your journey to becoming a confident coder starts here....
          </p>
           <label htmlFor="" className="fs-4">Call our Counselors :<a href="" className="fst-italic">+91 999 888 7777</a>&nbsp;/<a href="" className="fst-italic"> +91 67890 12345</a></label>
        </div>
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h3 className="">Quick Links</h3>
        <ul className="footer-links list-unstyled">
          <div className="container col-3" style={{textAlign:'left',fontSize:'1.3rem',padding:'5px'}}>
             <li ><a href="/" className="text-decoration-none ">Home</a></li>
             <li ><a href="/job" className="text-decoration-none ">Job</a></li>
          <li><a href="/about" className="text-decoration-none ">About</a></li>
          <li><a href="/services" className="text-decoration-none ">Services</a></li>
          <li><a href="/contact" className="text-decoration-none ">Contact</a></li>
          <li><a href="/companies" className="text-decoration-none ">Company</a></li>
          </div>
        </ul>
      </div>
     
      </div>
    </div>
        


    <div className="row-md-4 mb-3 mt-3 icons text-center" style={{fontSize:'30px',padding:'0.7rem'}}>
        <h4 className="text-md">Follow Us</h4>
        <ul className="list-inline social-icons">
          <li className="list-inline-item p-2"><a href="/facebook" className="text-white"><i className="fa-brands fa-square-facebook"></i></a></li>
          <li className="list-inline-item p-2"><a href="/twitter" className="text-white"><i className="fa-brands fa-twitter"></i></a></li>
          <li className="list-inline-item p-2"><a href="/instagram" className="text-white"><i className="fa-brands fa-instagram"></i></a></li>
          <li className="list-inline-item p-2"><a href="/github" className="text-white"><i className="fa-brands fa-github"></i></a></li>
        </ul>
      </div>



    <hr/>
   
    
    <div className="text-center p-3" style={{backgroundColor:`rgba(0, 0, 0, 0.05)`}}>
      © 2020 Copyright:
      <a className="text-primary-body text"> AM-interprise.com</a>
    </div>
    
  </footer>
  
</section>
        </div>
    );
}

export default Footer;
