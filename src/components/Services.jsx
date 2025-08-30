import React from 'react';
import company from '../apidata/companydata';
import { Link } from "react-router";

function Services(props) {
    return (

        <div className='container'>
            {/* Section = 1 */}
            <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Move ahead in career, faster</h1>
            <p style={{ textAlign: 'center', fontSize: '1.4rem' }}>with our paid services</p>

            {/* Section = 2 */}
            <div className="head">
                <div className="card-group p-2" >

                    <div className="service card me-3" style={{ borderRadius: '0' }}>
                        <img src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-curriculum-vitae-design-with-magnifying-glass-appraisal-biography-magnifying-glass-vector-png-image_37588188.png" className="resume card-img-top" alt="Resume Image" style={{ height: '13rem', objectFit: 'contain' }}/>
                        {/* <img src="https://i.pinimg.com/736x/33/64/d0/3364d010b370943c36f1faac890b74bc.jpg" className="resume card-img-top" alt="Resume Image" style={{ height: '13rem', objectFit: 'contain' }}/> */}
                        <div className="card-body">
                            <h5 className="card-title">Resume display</h5>
                            <h5 className="card-text"><small className="text-body-secondary"> Increase your Profile Visibility to recruiters up to 3 times. </small>
                            </h5>
                            <p className="card-text"><small className="text-body-secondary">Get a Featured Profile, Stand out and get noticed in recruiter eyes.</small> </p>
                            <span className="card-text"><small className="text-body-secondary">Subscription starts from</small></span>
                            <p className="card-text d-flex justify-content-between align-items-center"><small className="text-body-secondary"> Rs. 890 for 1 Months</small>
                                <button className="btn btn-outline-primary btn-sm">Know More</button>
                            </p>
                        </div>
                    </div>

                     <div className="service card me-3" style={{ borderRadius: '0' }}>
                        {/* <img src="../Emp.png" className="resume2 card-img-top" alt="PRIORITY APPLICANT" style={{ height: '13rem', objectFit: 'contain' }} /> */}
                        <img src={`${process.env.PUBLIC_URL}/Emp.png`} className="resume2 card-img-top" alt="PRIORITY APPLICANT" style={{ height: '13rem', objectFit: 'contain' }} />
                        <div className="card-body">
                            <h5 className="card-title">PRIORITY APPLICANT</h5>
                            <h5 className="card-text"><small className="text-body-secondary"> Be a Priority Applicant & increase your chance of getting a call. </small>
                            </h5>
                            <p className="card-text"><small className="text-body-secondary">Be the first one to apply and catch recruiter attention.Don't miss your chance!</small> </p>
                            <span className="card-text"><small className="text-body-secondary">Subscription starts from</small></span>
                            <p className="card-text d-flex justify-content-between align-items-center"><small className="text-body-secondary"> Rs. 971 for 3 Months</small>
                                <button className="btn btn-outline-primary btn-sm">Know More</button>
                            </p>
                        </div>
                    </div>

                        <div className="service card me-3" style={{ borderRadius: '0' }}>
                        {/* <img src="../Ai_Mock_Interview.png" className="resume3 card-img-top" alt="Ai Mock Interview" style={{ height: '14rem', objectFit: 'contain' }} /> */}
                        <img src={`${process.env.PUBLIC_URL}/Ai_Mock_Interview.png`} className="resume3 card-img-top" alt="Ai Mock Interview" style={{ height: '14rem', objectFit: 'contain' }} />
                        <div className="card-body">
                            <h5 className="card-title">AI Mock Interview</h5>
                            <h5 className="card-text"><small className="text-body-secondary">Personalised AI driven mock interviews for your profile. </small>
                            </h5>
                            <p className="card-text"><small className="text-body-secondary">Designed to streamline your interview preparation effortlessly.Try for free now!</small> </p>
                            <span className="card-text"><small className="text-body-secondary">Subscription starts from</small></span>
                            <p className="card-text d-flex justify-content-between align-items-center"><small className="text-body-secondary"> Rs. 239 for 3 Months</small>
                                <button className="btn btn-outline-primary btn-sm">Know More</button>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mt-3">
                    <div className="row">

                        {/* Section 2 - Left Side */}
                        <div className="col-md-8 pe-2 d-flex">
                            <div className="service card" style={{ maxWidth: "100%", borderRadius: '0' }}>
                                <div className="row g-0 h-100">
                                    <div className="resumewriting col-md-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        {/* <img src="../Resume_Writting.png" className="img-fluid-start" alt="RESUME WRITING" style={{ height: '100%', width: '100%', clipPath: 'inset(0 4.7rem)' }} /> */}
                                        <img src={`${process.env.PUBLIC_URL}/Resume_Writting.png`} className="img-fluid-start" alt="RESUME WRITING" style={{ height: '100%', width: '100%', clipPath: 'inset(0 4.7rem)' }} />
                                    </div>
                                    <div className="col-md-7">
                                        <div className=" card-body">
                                            <h5 className="card-title">RESUME WRITING</h5>
                                            <h5 className="card-text"><small className="text-body-secondary">Standout from the crowd with our professionally written Resume by expert.</small></h5>
                                            <p className="card-text"><small className="text-body-secondary">Resume that highlights your strengths and showcase your experience.</small></p>
                                            <span className="card-text"><small className="text-body-secondary">Text Resume &nbsp; &nbsp;Visual Resume &nbsp;&nbsp;Resume Score</small></span>
                                            <p className="card-text"><small className="text-body-secondary">Starts from</small></p>
                                            <p className="card-text d-flex justify-content-between align-items-center"><small className="text-body-secondary"> Rs. 1653 only</small><button className="btn btn-outline-primary btn-sm">Know More</button></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 - Right Side */}
                        <div className="col">
                            <div className="service card" style={{ width: "100%", borderRadius: '0' }}>
                                {/* <img src="../AI_resume_writingew.png" className="onlineresume card-img-top" alt="ONLINE RESUME MAKER" style={{ height: '9rem', objectFit: 'contain' }} /> */}
                                <img src={`${process.env.PUBLIC_URL}/AI_resume_writingew.png`} className="onlineresume card-img-top" alt="ONLINE RESUME MAKER" style={{ height: '9rem', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h5 className="card-text">
                                        ONLINE RESUME MAKER
                                    </h5>
                                    <h5 className="card-text"><small className="text-body-secondary">Create a job-winning resume with our simple resume maker </small></h5>
                                    <p className="card-text d-flex justify-content-between align-items-center"><small className="text-body-secondary">Create Resume</small><button className="btn btn-outline-primary btn-sm">Know More</button></p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* Section - 3 */}
                <div className="container p-2">
                    <div className="col d-flex mt-3">
                        <div className="service card w-100" style={{ borderRadius: '0' }}>
                            <div className="row g-0">
                                {/* Left Side Image */}
                                <div className="Subscribe col-md-4 d-flex justify-content-center align-items-center" style={{ borderRight: '2px solid #767677' }}>
                                    {/* <img src="../SUBSCRIBE.png" className="img-fluid" alt="Subscribe" style={{ height: '220px', width: '80%' }} /> */}
                                <img src={`${process.env.PUBLIC_URL}/SUBSCRIBE.png`} className="img-fluid" alt="Subscribe" style={{ height: '220px', width: '80%' }} />

                                </div>

                                {/* Right Side Content */}
                                <div className="col">
                                    <div className="card-body p-2">
                                        <h5 className="card-title mb-2">Subscribe to our Monthly Job Search Plan</h5>
                                        <p className="card-text mb-1">
                                            <small className="text-body-secondary fw-bold">KEY BENEFITS</small>
                                        </p>
                                        <ul className="ps-3 mb-2" style={{ listStyleType: 'none' }}>
                                            <li className="mb-1">
                                                <i className="fa-solid fa-circle-check" style={{ color: '#74C0FC' }}></i>
                                                &nbsp; <small>Rank higher in Recruiter Searches</small>
                                            </li>
                                            <li className="mb-1">
                                                <i className="fa-solid fa-circle-check" style={{ color: '#74C0FC' }}></i>
                                                &nbsp; <small>Priority Access to Jobs</small>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-circle-check" style={{ color: '#74C0FC' }}></i>
                                                &nbsp; <small>Send message to Recruiter anytime</small>
                                            </li>
                                        </ul>

                                        <div className="d-flex justify-content-between align-items-center ms-4">
                                            <button className="btn btn-sm btn-outline-primary">Know More</button>
                                            <div className="text-end">
                                                <p className="mb-0 me-2">
                                                    <small className="text-body-secondary">Subscription starts from</small>
                                                </p>
                                                <p className="mb-0 me-2">
                                                    <small className="text-body-secondary fw-bold">Rs. 890 Per month</small>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*Section - 4 */}

                <div className="card-group p-2">
                    <div className="service card me-3" style={{ borderRadius: '0' }}>
                        {/* <img src="../JOBS_FOR_YOU.png" className="job2 card-img-top" alt="JOBS FOR YOU" style={{ height: '13rem', objectFit: 'contain' }} /> */}
                        <img src={`${process.env.PUBLIC_URL}/JOBS_FOR_YOU.png`} className="job2 card-img-top" alt="JOBS FOR YOU" style={{ height: '13rem', objectFit: 'contain' }} />
                        <div className="card-body">
                            <h5 className="card-title">JOBS FOR YOU</h5>
                            <h5 className="card-text"><small className="text-body-secondary">Stand out as an Early Applicant with instant access to jobs.</small></h5>
                            <p className="card-text"><small className="text-body-secondary">Our experts will understand your job preference & set alerts. Instant job on SMS.</small></p>
                            <span className="card-text"><small className="text-body-secondary">Subscription starts from</small></span>
                            <p className="card-text d-flex justify-content-between align-items-center"><small className="text-body-secondary"> Rs. 1566 for 3 Months</small><button className="btn btn-outline-primary btn-sm">Know More</button></p>
                        </div>
                    </div>
                    <div className="service card me-3" style={{ borderRadius: '0' }}>
                        {/* <img src="../RECRUITERCONNECTION.png" className="recruiter card-img-top" alt="RECRUITER CONNECTION" style={{ height: '13rem', objectFit: 'contain', width: 'auto' }} /> */}
                        <img src={`${process.env.PUBLIC_URL}/RECRUITERCONNECTION.png`} className="recruiter card-img-top" alt="RECRUITER CONNECTION" style={{ height: '13rem', objectFit: 'contain', width: 'auto' }} />
                        <div className="card-body">
                            <h5 className="card-title">RECRUITER CONNECTION</h5>
                            <h5 className="card-text mt-3"><small className="text-body-secondary mt-2">Send personalized message to recruiters.</small></h5>
                            <p className="card-text mt-2"><small className="text-body-secondary">Search from a database of 1.6 Lakh recruiters and share your Naukri profile.</small></p>
                            <span className="card-text mt-3"><small className="text-body-secondary">Subscription starts from</small></span>
                            <p className="card-text mt-1 d-flex justify-content-between align-items-center"><small className="text-body-secondary"> Rs. 839 for 5 credits</small><button className="btn btn-outline-primary btn-sm">Know More</button></p>
                        </div>
                    </div>
                    <div className="service card" style={{ borderRadius: '0' }}>
                        <img src="https://gradship.com.au/wp-content/uploads/2020/10/Recume-review.png" className="resume4 card-img-top" alt="RESUME CRITIQUERESUME CRITIQUE" style={{ height: '13rem', objectFit: 'contain' }} />
                        <div className="card-body">
                            <h5 className="card-title">RESUME CRITIQUERESUME CRITIQUE</h5>
                            <h5 className="card-text"><small className="text-body-secondary">Get your resume reviewed and improve your job application. </small></h5>
                            <p className="card-text"><small className="text-body-secondary">Our experts will analyze your resume and send a detailed report.</small></p>
                            <span className="card-text"><small className="text-body-secondary">Subscription starts from</small></span>
                            <p className="card-text d-flex justify-content-between align-items-center"><small className="text-body-secondary"> Rs. 1071 only </small><button className="btn btn-outline-primary btn-sm">Know More</button></p>
                        </div>
                    </div>
                </div>


                <div className="container mt-3">
                    <div className="services card" style={{ borderRadius: '0' }}>
                        <div className="card-header" style={{ borderTopLeftRadius: '0', borderTopRightRadius: '0', background: 'white' }}>
                            See Samples
                        </div>
                        <div className="card-body" style={{ borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }}>
                            <figure>
                                <p>View select text resume, visual resume and cover letter samples across industries.</p>
                                <div className="links">
                                    <Link style={{ textDecoration: 'none', marginRight: '1rem', fontStyle: 'italic' }}>Text Resume</Link>
                                    <Link style={{ textDecoration: 'none', marginRight: '1rem', fontStyle: 'italic' }}>Visual Resume</Link>
                                    <Link style={{ textDecoration: 'none', marginRight: '1rem', fontStyle: 'italic' }}>Cover Letter</Link>
                                </div>
                            </figure>
                        </div>
                    </div>

                </div>

                {/* section = 4 */}
                <div className="container mt-4">
                    <div className="services card mt-3" style={{ borderRadius: '0' }}>
                        <div className="card-header">
                            <h3>Career Advice</h3>
                        </div>
                        <div className="card-body">
                            <figure>
                                <div className="container text-center">
                                    <div className="row">
                                        <div className="col" >
                                            <h6 style={{ textAlign: 'start' }}>Most Viewed Articles</h6>
                                            <p style={{ color: 'blue', textAlign: 'start' }}>How to Answer “Tell me about</p>
                                            <p style={{ color: 'blue', textAlign: 'start' }}>yourself” Question!</p>
                                            <p style={{ color: 'blue', textAlign: 'start' }}>Tips to Make an Impressive CV</p>
                                            <p style={{ color: 'blue', textAlign: 'start' }}>Does Your Resume Have The Magic</p>
                                            <p style={{ color: 'blue', textAlign: 'start' }}>Keywords?</p>
                                        </div>
                                        <div className="col">
                                            <h6 style={{ textAlign: 'start' }}>Cover Letter Writing</h6>
                                            <p style={{ color: 'blue', textAlign: 'start' }}>7 Ways to Make your Cover Letter</p>
                                            <p style={{ color: 'blue', textAlign: 'start' }}>Recruiter Friendly</p>
                                            <p style={{ color: 'blue', textAlign: 'start' }}>Common Cover letter mistakes to avoid!</p>
                                            <p style={{ textAlign: 'start' }}>Certification</p>
                                            <p style={{ color: 'blue', textAlign: 'start' }}>Aptitude Tests! Know your strengths & weaknesses</p>
                                            <p style={{ color: 'blue', textAlign: 'start' }}>Background Verification – What Employers Will Discover</p>
                                        </div>
                                        <div className="col">
                                            <h6 style={{ textAlign: 'start' }}>Appraisals and Promotions</h6>
                                            <p style={{ color: 'blue', textAlign: 'start' }}>Looking for a Promotion?</p>
                                            <p style={{ color: 'blue', textAlign: 'start' }}>Dealing With A Bad Appraisal</p>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    );
}

export default Services;