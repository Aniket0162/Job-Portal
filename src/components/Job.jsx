import react from "react";
import jobData from "../apidata/jobdata";


function Job(props) {

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>This is Our Job Page</h1>

            <div className="job">
                <h3 className="ms-3">Show Jobs:</h3>


    <div className="row">
      {jobData.map((job, index) => (
        <div key={index} className="col-md-6 mb-4">
          <div className="jobs card h-100 shadow-sm border-0" style={{ borderRadius: '20px' }}>
            <div className="row g-0 align-items-center">

              {/* Left Section */}
              <div className="col-md-6 ms-2">
                <div className="card-body">
                  <h3 className="job-name fw-bold mb-1">{job.jobRole}</h3>
                  <h5 className="card-title fw-bold mb-1">{job.company}</h5>
                  <p className="card-text mb-1 mt-3">
                    ⭐ {job.star} | <span className="text-muted">({job.reviews} reviews)</span>
                  </p>
                  <p className="card-text text-muted mb-3">
                    <small>Posted {job.posted}</small>
                  </p>
                  <div className="container text-left">
                    <div className="row">
                      {job.experience} | {job.salary} | {job.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Logo */}
              <div className="col-md-5 text-end p-2">
                <p style={{fontSize: '5rem',color:'#ff5858',marginLeft:'8rem',border:'3px solid black',textAlign:'center',borderRadius:'2rem',fontWeight:'500',background: 'linear-gradient(#f6d5f7,#fbe9d7)'}}> {job.company.charAt(0)}</p>
              </div>

              <div className="container ms-2">
                <p>{job.company} Full Time Employee Benefits (Not applicable for Intern or Contract Roles)...</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>





                <div>

        
{/*             ////With out Api hard coded data ////
                <div className="container mt-4">
                    <div className="row">
                        {/* <!-- Card 1 --> 
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '20px' }}>
                                <div className="row g-0 align-items-center">

                                    {/* Left Section - Company Info 
                                    <div className="col-md-6 ms-2">
                                        <div className="card-body">
                                            <h3 className="job-name fw-bold mb-1">Intern CTM</h3>
                                            <h5 className="card-title fw-bold mb-1">Phonepe</h5>
                                            <p className="card-text mb-1 mt-3">
                                                ⭐ 3.7 | <span className="text-muted">(55 reviews)</span>
                                            </p>
                                            <p className="card-text text-muted mb-3">
                                                <small>Last updated 3 mins ago</small>
                                            </p>


                                            <div className="container text-left">
                                                <div className="row">
                                                    0-1 Yrs | Salary | Location
                                                    {/* <div className="col">0-1 Yrs | Salary | Location</div> 
                                                    {/* <div className="col">Salary</div>
                                                        <div className="col">Location</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Right Section - Logo 
                                    <div className="col-md-5 text-end">
                                        <img
                                            src="https://media.licdn.com/dms/image/v2/C510BAQHr9P24LW2xLA/company-logo_200_200/company-logo_200_200/0/1630566445038/pennywise_solutions_pvt_ltd_logo?e=2147483647&v=beta&t=A3qeVVMUF5m8qA_MrKOJIfq1lQ17_ajF5Fs7yEPk4jc"
                                            alt="Company Logo"
                                            className="img-fluid"
                                            style={{
                                                maxHeight: '150px',
                                                borderRadius: '15px',
                                                border: '1px solid #ccc',
                                                objectFit: 'contain',
                                            }}
                                        />

                                    </div>
                                    <div className="container ms-2">
                                        <p className="">PhonePe Full Time Employee Benefits (Not applicable for Intern or Contract Roles) indiv... </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                       {/* <!-- Card 2 --> 
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '20px' }}>
                                <div className="row g-0 align-items-center">

                                    {/* Left Section - Company Info 
                                    <div className="col-md-6 ms-2">
                                        <div className="card-body">
                                            <h3 className="job-name fw-bold mb-1">Intern CTM</h3>
                                            <h5 className="card-title fw-bold mb-1">Phonepe</h5>
                                            <p className="card-text mb-1 mt-3">
                                                ⭐ 3.7 | <span className="text-muted">(55 reviews)</span>
                                            </p>
                                            <p className="card-text text-muted mb-3">
                                                <small>Last updated 3 mins ago</small>
                                            </p>


                                            <div className="container text-left">
                                                <div className="row">
                                                    0-1 Yrs | Salary | Location
                                                    {/* <div className="col">0-1 Yrs | Salary | Location</div> */}
                                                    {/* <div className="col">Salary</div>
                                                        <div className="col">Location</div> 
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Right Section - Logo 
                                    <div className="col-md-5 text-end">
                                        <img
                                            src="https://media.licdn.com/dms/image/v2/C510BAQHr9P24LW2xLA/company-logo_200_200/company-logo_200_200/0/1630566445038/pennywise_solutions_pvt_ltd_logo?e=2147483647&v=beta&t=A3qeVVMUF5m8qA_MrKOJIfq1lQ17_ajF5Fs7yEPk4jc"
                                            alt="Company Logo"
                                            className="img-fluid"
                                            style={{
                                                maxHeight: '150px',
                                                borderRadius: '15px',
                                                border: '1px solid #ccc',
                                                objectFit: 'contain',
                                            }}
                                        />

                                    </div>
                                    <div className="container ms-2">
                                        <p className="">PhonePe Full Time Employee Benefits (Not applicable for Intern or Contract Roles) indiv... </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card 1 --> 
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '20px' }}>
                                <div className="row g-0 align-items-center">

                                    {/* Left Section - Company Info
                                    <div className="col-md-6 ms-2">
                                        <div className="card-body">
                                            <h3 className="job-name fw-bold mb-1">Intern CTM</h3>
                                            <h5 className="card-title fw-bold mb-1">Phonepe</h5>
                                            <p className="card-text mb-1 mt-3">
                                                ⭐ 3.7 | <span className="text-muted">(55 reviews)</span>
                                            </p>
                                            <p className="card-text text-muted mb-3">
                                                <small>Last updated 3 mins ago</small>
                                            </p>


                                            <div className="container text-left">
                                                <div className="row">
                                                    0-1 Yrs | Salary | Location
                                                    {/* <div className="col">0-1 Yrs | Salary | Location</div> 
                                                    {/* <div className="col">Salary</div>
                                                        <div className="col">Location</div> 
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Right Section - Logo *
                                    <div className="col-md-5 text-end">
                                        <img
                                            src="https://media.licdn.com/dms/image/v2/C510BAQHr9P24LW2xLA/company-logo_200_200/company-logo_200_200/0/1630566445038/pennywise_solutions_pvt_ltd_logo?e=2147483647&v=beta&t=A3qeVVMUF5m8qA_MrKOJIfq1lQ17_ajF5Fs7yEPk4jc"
                                            alt="Company Logo"
                                            className="img-fluid"
                                            style={{
                                                maxHeight: '150px',
                                                borderRadius: '15px',
                                                border: '1px solid #ccc',
                                                objectFit: 'contain',
                                            }}
                                        />

                                    </div>
                                    <div className="container ms-2">
                                        <p className="">PhonePe Full Time Employee Benefits (Not applicable for Intern or Contract Roles) indiv... </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                       {/* <!-- Card 2 --> 
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '20px' }}>
                                <div className="row g-0 align-items-center">

                                    {/* Left Section - Company Info 
                                    <div className="col-md-6 ms-2">
                                        <div className="card-body">
                                            <h3 className="job-name fw-bold mb-1">Intern CTM</h3>
                                            <h5 className="card-title fw-bold mb-1">Phonepe</h5>
                                            <p className="card-text mb-1 mt-3">
                                                ⭐ 3.7 | <span className="text-muted">(55 reviews)</span>
                                            </p>
                                            <p className="card-text text-muted mb-3">
                                                <small>Last updated 3 mins ago</small>
                                            </p>


                                            <div className="container text-left">
                                                <div className="row">
                                                    0-1 Yrs | Salary | Location
                                                    {/* <div className="col">0-1 Yrs | Salary | Location</div> 
                                                    {/* <div className="col">Salary</div>
                                                        <div className="col">Location</div> 
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Right Section - Logo 
                                    <div className="col-md-5 text-end">
                                        <img
                                            src="https://media.licdn.com/dms/image/v2/C510BAQHr9P24LW2xLA/company-logo_200_200/company-logo_200_200/0/1630566445038/pennywise_solutions_pvt_ltd_logo?e=2147483647&v=beta&t=A3qeVVMUF5m8qA_MrKOJIfq1lQ17_ajF5Fs7yEPk4jc"
                                            alt="Company Logo"
                                            className="img-fluid"
                                            style={{
                                                maxHeight: '150px',
                                                borderRadius: '15px',
                                                border: '1px solid #ccc',
                                                objectFit: 'contain',
                                            }}
                                        />

                                    </div>
                                    <div className="container ms-2">
                                        <p className="">PhonePe Full Time Employee Benefits (Not applicable for Intern or Contract Roles) indiv... </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}


                    {/* </div>
                </div> */}
                </div>



            </div>
        </div>
    );
}

export default Job;

