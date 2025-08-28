import React from 'react';
import company from '../apidata/companydata';

function Companies(props) {
    return (
        <div className='container'>
            {/* Section = 1 */}
            <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Available Companies</h1>
            <h3>Top companies hiring now : </h3>
            <div className="row mt-4">
                <div className="col-sm-2 mb-3 mb-sm-0">
                    <div className="logo card">
                        <div className="card-body">
                            <h5 className="card-title">MNCs</h5>
                            <p className="card-text">2.1K+are active hiring</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="logo card">
                        <div className="card-body">
                            <h5 className="card-title">Edtech</h5>
                            <p className="card-text">156+ are active hiring</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="logo card">
                        <div className="card-body">
                            <h5 className="card-title">Unicorns</h5>
                            <p className="card-text">97+ are active hiring</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="logo card">
                        <div className="card-body">
                            <h5 className="card-title">Healthcare</h5>
                            <p className="card-text">606+ are active hiring</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="logo card">
                        <div className="card-body">
                            <h5 className="card-title">Internet</h5>
                            <p className="card-text">263+ are active hiring</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="logo card">
                        <div className="card-body">
                            <h5 className="card-title">B2C</h5>
                            <p className="card-text">2.4K+ are active hiring</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr style={{ width: '81rem', marginTop: '3rem', height: '4px', backgroundColor: 'black', border: 'none' }} />

            {/* Section = 2 */}
            <div className="second mt-4">
                <p style={{fontSize:'2rem',fontWeight:'500'}}>Show All the Companies:</p>
            </div>
            <div className="container mt-4">
                <div className="row" style={{justifyContent:'center'}}>
                    {/* <!-- Card 1 --> */}
                    {company.map((company, index) => (
                    <div className="col-md-5 mb-4">
                        <div className="company-card card mb-3" style={{maxWidth: '100%',borderRadius:'25px'}}>
                            <div className="row g-1">
                                <div className="col-md-4">
                                    <div className="container mt-2">
                                    <img src={company.Image} className="img-fluid rounded-start" alt="Card 1" style={{height: '10rem', width: 'auto', borderRadius: '10px',objectFit: 'cover', border:"2px solid black",marginTop:"10px",marginLeft:"8px"}}/>
                                    </div>
                                </div>
                                <div className="col-md-7 mt-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{company.Company}</h5>
                                        <p className="card-text">⭐ {company.Rating} | ( {company.Reviews} )</p>
                                        <p className="card-text"><small className="text-muted">Last updated {company.LastUpdated}</small></p>
                                        <div className="row-md-2">
                                            <div className="d-flex">
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',borderRadius:'11px',padding:'9px',fontSize:'0.8rem', fontWeight:'700'}}>{company.Category[0]}</small></p>
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px',borderRadius:'11px',padding:'9px',fontSize:'0.8rem', fontWeight:'700'}}>{company.Category[1]}</small></p>
                                             </div>
                                       
                                        <p className="card-text"><small className="text-muted"></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
))}



                              {/*    <!--card 1--> */}
                    {/* <div className="col-md-6 mb-4">
                        <div className="card mb-3" style={{maxWidth: '100%',borderRadius:'25px'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div className="container mt-2">
                                    <img src="https://media.licdn.com/dms/image/v2/C510BAQHr9P24LW2xLA/company-logo_200_200/company-logo_200_200/0/1630566445038/pennywise_solutions_pvt_ltd_logo?e=2147483647&v=beta&t=A3qeVVMUF5m8qA_MrKOJIfq1lQ17_ajF5Fs7yEPk4jc" className="img-fluid rounded-start" alt="Card 1" style={{height: 'auto', width: 'auto', borderRadius: '10px',objectFit: 'cover', border:"2px solid black"}}/>
                                    </div>
                                </div>
                                <div className="col-md-8 mt-3">
                                    <div className="card-body">
                                        <h5 className="card-title">PennyWise Solutions</h5>
                                        <p className="card-text">⭐ 3.7 | (55 reviews)</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        <div className="row-md-2">
                                            <div className="d-flex">
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px'}}>Corporate</small></p>
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px'}}>IT Services & Consulting</small></p>
                                             </div>
                                       
                                        <p className="card-text"><small className="text-muted"></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}






                    {/* <!-- Card 2 --> */}
                    {/* <div className="col-md-6 mb-4">
                        <div className="card mb-3"  style={{maxWidth: '100%',borderRadius:'25px'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div className="container mt-2">
                                    <img src="https://media.licdn.com/dms/image/v2/C510BAQHr9P24LW2xLA/company-logo_200_200/company-logo_200_200/0/1630566445038/pennywise_solutions_pvt_ltd_logo?e=2147483647&v=beta&t=A3qeVVMUF5m8qA_MrKOJIfq1lQ17_ajF5Fs7yEPk4jc" className="img-fluid rounded-start" alt="Card 1" style={{height: 'auto', width: 'auto', borderRadius: '10px',objectFit: 'cover', border:"2px solid black"}}/>
                                    </div>
                                </div>
                                <div className="col-md-8 mt-3">
                                       <div className="card-body">
                                        <h5 className="card-title">PennyWise Solutions</h5>
                                        <p className="card-text">⭐ 3.7 | (55 reviews)</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        <div className="row-md-2">
                                            <div className="d-flex">
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px'}}>Corporate</small></p>
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px'}}>IT Services & Consulting</small></p>
                                             </div>
                                       
                                        <p className="card-text"><small className="text-muted"></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <!-- Card 3 --> */}
                    {/* <div className="col-md-6 mb-4">
                        <div className="card mb-3"  style={{maxWidth: '100%',borderRadius:'25px'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div className="container mt-2">
                                    <img src="https://media.licdn.com/dms/image/v2/C510BAQHr9P24LW2xLA/company-logo_200_200/company-logo_200_200/0/1630566445038/pennywise_solutions_pvt_ltd_logo?e=2147483647&v=beta&t=A3qeVVMUF5m8qA_MrKOJIfq1lQ17_ajF5Fs7yEPk4jc" className="img-fluid rounded-start" alt="Card 1" style={{height: 'auto', width: 'auto', borderRadius: '10px',objectFit: 'cover', border:"2px solid black"}}/>
                                    </div>
                                </div>
                                <div className="col-md-8 mt-3">
                                    <div className="card-body">
                                        <h5 className="card-title">PennyWise Solutions</h5>
                                        <p className="card-text">⭐ 3.7 | (55 reviews)</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        <div className="row-md-2">
                                            <div className="d-flex">
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px'}}>Corporate</small></p>
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px'}}>IT Services & Consulting</small></p>
                                             </div>
                                       
                                        <p className="card-text"><small className="text-muted"></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <!-- Card 4 --> */}
                     {/* <div className="col-md-6 mb-4">
                        <div className="card mb-3"  style={{maxWidth: '100%',borderRadius:'25px'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div className="container mt-2">
                                    <img src="https://media.licdn.com/dms/image/v2/C510BAQHr9P24LW2xLA/company-logo_200_200/company-logo_200_200/0/1630566445038/pennywise_solutions_pvt_ltd_logo?e=2147483647&v=beta&t=A3qeVVMUF5m8qA_MrKOJIfq1lQ17_ajF5Fs7yEPk4jc" className="img-fluid rounded-start" alt="Card 1" style={{height: 'auto', width: 'auto', borderRadius: '10px',objectFit: 'cover', border:"2px solid black"}}/>
                                    </div>
                                </div>
                                <div className="col-md-8 mt-3">
                                    <div className="card-body">
                                        <h5 className="card-title">PennyWise Solutions</h5>
                                        <p className="card-text">⭐ 3.7 | (55 reviews)</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        <div className="row-md-2">
                                            <div className="d-flex">
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px'}}>Corporate</small></p>
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px'}}>IT Services & Consulting</small></p>
                                             </div>
                                       
                                        <p className="card-text"><small className="text-muted"></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                      {/* <!-- Card 5 --> */}
                    {/* <div className="col-md-6 mb-4">
                        <div className="card mb-3"  style={{maxWidth: '100%',borderRadius:'25px'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div className="container mt-2">
                                    <img src="https://media.licdn.com/dms/image/v2/C510BAQHr9P24LW2xLA/company-logo_200_200/company-logo_200_200/0/1630566445038/pennywise_solutions_pvt_ltd_logo?e=2147483647&v=beta&t=A3qeVVMUF5m8qA_MrKOJIfq1lQ17_ajF5Fs7yEPk4jc" className="img-fluid rounded-start" alt="Card 1" style={{height: 'auto', width: 'auto', borderRadius: '10px',objectFit: 'cover', border:"2px solid black"}}/>
                                    </div>
                                </div>
                                <div className="col-md-8 mt-3">
                                    <div className="card-body">
                                        <h5 className="card-title">PennyWise Solutions</h5>
                                        <p className="card-text">⭐ 3.7 | (55 reviews)</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        <div className="row-md-2">
                                            <div className="d-flex">
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px'}}>Corporate</small></p>
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px'}}>IT Services & Consulting</small></p>
                                             </div>
                                       
                                        <p className="card-text"><small className="text-muted"></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                     {/* <!-- Card 6 --> */}
                    {/* <div className="col-md-6 mb-4">
                        <div className="card mb-3"  style={{maxWidth: '100%',borderRadius:'25px'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div className="container mt-2">
                                    <img src="https://media.licdn.com/dms/image/v2/C510BAQHr9P24LW2xLA/company-logo_200_200/company-logo_200_200/0/1630566445038/pennywise_solutions_pvt_ltd_logo?e=2147483647&v=beta&t=A3qeVVMUF5m8qA_MrKOJIfq1lQ17_ajF5Fs7yEPk4jc" className="img-fluid rounded-start" alt="Card 1" style={{height: 'auto', width: 'auto', borderRadius: '10px',objectFit: 'cover', border:"2px solid black"}}/>
                                    </div>
                                </div>
                                <div className="col-md-8 mt-3">
                                    <div className="card-body">
                                        <h5 className="card-title">PennyWise Solutions</h5>
                                        <p className="card-text">⭐ 3.7 | (55 reviews)</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        <div className="row-md-2">
                                            <div className="d-flex">
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px'}}>Corporate</small></p>
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px'}}>IT Services & Consulting</small></p>
                                             </div>
                                       
                                        <p className="card-text"><small className="text-muted"></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                     {/* <!-- Card 7 --> */}
                    {/* <div className="col-md-6 mb-4">
                        <div className="card mb-3"  style={{maxWidth: '100%',borderRadius:'25px'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div className="container mt-2">
                                    <img src="https://media.licdn.com/dms/image/v2/C510BAQHr9P24LW2xLA/company-logo_200_200/company-logo_200_200/0/1630566445038/pennywise_solutions_pvt_ltd_logo?e=2147483647&v=beta&t=A3qeVVMUF5m8qA_MrKOJIfq1lQ17_ajF5Fs7yEPk4jc" className="img-fluid rounded-start" alt="Card 1" style={{height: 'auto', width: 'auto', borderRadius: '10px',objectFit: 'cover', border:"2px solid black"}}/>
                                    </div>
                                </div>
                                <div className="col-md-8 mt-3">
                                    <div className="card-body">
                                        <h5 className="card-title">PennyWise Solutions</h5>
                                        <p className="card-text">⭐ 3.7 | (55 reviews)</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        <div className="row-md-2">
                                            <div className="d-flex">
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px'}}>Corporate</small></p>
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px'}}>IT Services & Consulting</small></p>
                                             </div>
                                       
                                        <p className="card-text"><small className="text-muted"></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                     {/* <!-- Card 8 --> */}
                    {/* <div className="col-md-6 mb-4">
                        <div className="card mb-3"  style={{maxWidth: '100%',borderRadius:'25px'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div className="container mt-2">
                                    <img src="https://media.licdn.com/dms/image/v2/C510BAQHr9P24LW2xLA/company-logo_200_200/company-logo_200_200/0/1630566445038/pennywise_solutions_pvt_ltd_logo?e=2147483647&v=beta&t=A3qeVVMUF5m8qA_MrKOJIfq1lQ17_ajF5Fs7yEPk4jc" className="img-fluid rounded-start" alt="Card 1" style={{height: 'auto', width: 'auto', borderRadius: '10px',objectFit: 'cover', border:"2px solid black"}}/>
                                    </div>
                                </div>
                                <div className="col-md-8 mt-3">
                                    <div className="card-body">
                                        <h5 className="card-title">PennyWise Solutions</h5>
                                        <p className="card-text">⭐ 3.7 | (55 reviews)</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        <div className="row-md-2">
                                            <div className="d-flex">
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px'}}>Corporate</small></p>
                                                <p className="card-text"><small className="text-muted" style={{margin:'0.2rem',border:'2px solid black',padding:'5px'}}>IT Services & Consulting</small></p>
                                             </div>
                                       
                                        <p className="card-text"><small className="text-muted"></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>

        </div>
    );
}

export default Companies;