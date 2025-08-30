import { Link } from "react-router";
import hiring from "../apidata/hiringdata";


const searchSubmit = (e) => {
        e.preventDefault();
        
        // alert(e.target)
    };


function Home(props) {
    return (
        <div className='container'>
            {/* Section = 1 */}
            <h1 style={{ textAlign: 'center', marginTop: '3rem', fontSize: '4rem', fontWeight: 'bold' }}>Find Your Dream Job</h1>
            <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '2rem' }}>5 lakh+ jobs for you to explore</p>


            <form className="d-flex mt-5 justify-content-center" role="search">
                <input className="form-control me-2 fs-5" type="search" placeholder="Enter skills / designations / companies " aria-label="Search" style={{ width: '40rem', height: '3rem', borderRadius: '50px' }} />
                {/* <button className="btn btn-success" type="submit" style={{ borderRadius: '50px' }} onClick={searchSubmit}>Search</button> */}
                <button className="btn btn-success" type="submit" style={{ borderRadius: '50px' }} >Search</button>
            </form>

            {/* Section = 2 */}
            <div className="img container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '2px 2px 2px gray', border: '2px solid white', marginTop: '4rem', height: '12rem', width: '62rem', borderRadius: '2rem', background: 'linear-gradient(#87f4b5,#93cbf1)', padding: '1rem' }}>
                <div >
                    <h2 style={{ textAlign: 'left', fontSize: '2rem', marginLeft: '0.7rem', padding: '5px', }}> Practice Customised mock interview with AI! </h2>
                    <h4 style={{ textAlign: 'left', fontSize: '2rem', marginLeft: '0.7rem' }}> Get AI answers, tips and insights </h4>
                    <button className="btn btn-outline-light" type="submit" style={{ margin: '0.2rem', marginLeft: '0.7rem', background: 'linear-gradient(#f4d444,#f86ca7)' }}>Start for free</button>
                </div>
                {/* Image on the right */}
                <img src={`${process.env.PUBLIC_URL}/Job_Dekho_2.png`} alt="Mock Interview" style={{ height: '10rem', borderRadius: '1rem' }} />
            </div>




            {/* Section = 3 */}
            <div className="container" style={{ marginTop: '3rem' }}>
                {/* <h1 style={{marginTop:'3rem',textAlign:'center'}}>Top companies hiring now</h1> */}
                <section className='mt-4'>
                    <div className="container text-center">
                        <div>
                            <h1 className='text-center mt-5 mb-4'>Job Category</h1>
                        </div>
                        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mt-3 justify-content-center" >
                            <div className="category col p-2 m-3" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                                <i className="fa-solid fa-house-user fa-2x mt-4" style={{ color: '#f35916' }}></i>
                                <div className="p-2 mt-2"><Link className="nav-link" to="">Remote</Link></div>
                            </div>

                            <div className="category col p-3 m-3" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                                <i className="fa-solid fa-city fa-2x mt-4" style={{ color: '#f35916' }}></i>
                                <div className="p-2 mt-2"><Link className="nav-link" to="">MNC</Link></div>
                            </div>
                            <div className="category col p-3 m-3" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                                <i className="fa-solid fa-chart-simple fa-2x mt-4" style={{ color: '#f35916' }}></i>
                                <div className="p-2 mt-2"><Link className="nav-link" to="">Data Science</Link></div>
                            </div>
                            <div className="category col p-3 m-3" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                                <i className="fa-solid fa-rocket fa-2x mt-4" style={{ color: '#f35916' }}></i>
                                <div className="p-2 mt-2"><Link className="nav-link" to="">StartUp</Link></div>
                            </div>
                            <div className="category col p-3 m-3" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                                <i className="fa-solid fa-people-carry-box fa-2x mt-4" style={{ color: '#f35916' }}></i>
                                <div className="p-2 mt-2"><Link className="nav-link" to="">Supply Chaining</Link></div>
                            </div>
                            <div className="category col p-3 m-3" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                                <i className="fa-solid fa-graduation-cap fa-2x mt-4" style={{ color: '#f35916' }}></i>
                                <div className="p-2 mt-2"><Link className="nav-link" to="">Fresher</Link></div>
                            </div>
                            <div className="category col p-3 m-3" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                                <i className="fa-solid fa-users-viewfinder fa-2x mt-4" style={{ color: '#f35916' }}></i>
                                <div className="p-2 mt-2"><Link className="nav-link" to="">HR</Link></div>
                            </div>
                            <div className="category col p-3 m-3" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                                <i className="fa-solid fa-scroll fa-2x mt-4" style={{ color: '#f35916' }}></i>
                                <div className="p-2 mt-2"><Link className="nav-link" to="">Data Visualization</Link></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/* Section = 4 */}
            <div className="container" style={{ marginTop: '3rem' }}>
                <h1 style={{ marginTop: '3rem', textAlign: 'center' }}>Top companies hiring now</h1>
                <div className="row mt-5">
                    {hiring.map((hiringdata,index) => (
                    <div className=" col-sm-2 mb-3 mb-sm-0">
                        <div className="logo card">
                            <div className="card-body">
                                <h5 className="card-title">{hiringdata.vacancy}</h5>
                                <p className="card-text">{hiringdata.active_hiring}are active hiring</p>
                            </div>
                        </div> 
                    </div>
                    ))}

                    {/* With Out an Api Call Hard Code */}
                    {/* <div className="col-sm-2">
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
                    </div> */}
                </div>
            </div>


            {/* Section = 5 */}
            <div className="container" style={{ marginTop: '3rem', fontFamily: 'Inter, sans-serif' }}>
                <h2 style={{ marginTop: '3rem', textAlign: 'center' }}>Featured companies actively hiring</h2>
                <div className="row mt-5">
                    <div className="col-sm-3" style={{ width: '16.2rem', borderRadius: '12px' }}>
                        <div className="card_Header card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4LWsK7RJpMDtmFwx-8LDYGXOZD8glWaQKQ&s" className="card-img-top d-block mx-auto" alt="..." style={{ height: '80px', width: '80px', marginTop: '0.3rem' }} />
                            <div className="container" style={{ background: 'rgba(190, 247, 176, 0.47)', height: '5.6rem', width: '12rem', padding: '1rem', borderRadius: '10px' }}>
                                <h5 className="card-title text-center">Bread Finance</h5>
                                <p className="card-text text-center">⭐4.1 | 189 reviews</p>
                            </div>
                            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                                <p style={{ textAlign: 'center', marginTop: '8px' }}>Personalizing Experiences with tech.</p>
                                <button className="btn btn-primary">View More</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-3" style={{ width: '16.2rem', borderRadius: '12px' }}>
                        <div className="card_Header card">
                            <img src="https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg" className="card-img-top d-block mx-auto" alt="..." style={{ height: '80px', width: 'auto', marginTop: '0.3rem' }} />
                            <div className="container" style={{ background: 'rgba(254, 180, 168, 0.47)', height: '5.6rem', width: '12rem', padding: '1rem', borderRadius: '10px' }}>
                                <h5 className="card-title text-center">Apple</h5>
                                <p className="card-text text-center">⭐4.3 | 300 reviews</p>
                            </div>
                            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                                <p style={{ textAlign: 'center', marginTop: '8px' }}>Join us. now &nbsp;and &nbsp;Be your self.</p>
                                <button className="btn btn-primary">View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3" style={{ width: '16.2rem', borderRadius: '12px' }}>
                        <div className="card_Header card">
                            <img src="https://i.pinimg.com/736x/70/74/aa/7074aac17ffc573ab035b9305f1b1d92.jpg" className="card-img-top d-block mx-auto" alt="..." style={{ height: '80px', width: '80px', marginTop: '0.3rem' }} />
                            <div className="container" style={{ background: 'rgba(157, 188, 246, 0.27)', height: '5.6rem', width: '12rem', padding: '1rem', borderRadius: '10px' }}>
                                <h5 className="card-title text-center">Empower</h5>
                                <p className="card-text text-center">⭐3.8 | 287 reviews</p>
                            </div>
                            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                                <p style={{ textAlign: 'center', marginTop: '8px' }}>We're a financial services company.</p>
                                <button className="btn btn-primary">View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3" style={{ width: '16.2rem', borderRadius: '12px' }}>
                        <div className="card_Header card">
                            <img src="https://mma.prnewswire.com/media/2490373/Genpact_Logo.jpg?w=2700" className="card-img-top d-block mx-auto" alt="..." style={{ height: '80px', width: '80px', marginTop: '0.3rem' }} />
                            <div className="container" style={{ background: 'rgba(199, 182, 187, 0.47)', height: '5.6rem', width: '12rem', padding: '1rem', borderRadius: '10px' }}>
                                <h5 className="card-title text-center">Genpact</h5>
                                <p className="card-text text-center">⭐3.8 | 35K+ reviews</p>
                            </div>
                            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                                <p style={{ textAlign: 'center', marginTop: '8px' }}>Global professional services firm.</p>
                                <button className="btn btn-primary">View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3" style={{ width: '16.2rem', borderRadius: '12px' }}>
                        <div className="card_Header card">
                            <img src="https://static.thearcweb.com/images/PROD/PROD-261a1d90-d03e-4133-886f-9000e937c6ee.png" className="card-img-top d-block mx-auto" alt="..." style={{ height: '80px', width: '80px', marginTop: '0.3rem' }} />
                            <div className="container" style={{ background: 'rgba(130, 222, 215, 0.47)', height: '5.6rem', width: '12rem', padding: '1rem', borderRadius: '10px' }}>
                                <h5 className="card-title text-center">Reliance Retail</h5>
                                <p className="card-text text-center">⭐3.9 | 23K+ reviews</p>
                            </div>
                            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                                <p style={{ textAlign: 'center', marginTop: '8px' }}>Building India's largest retail company</p>
                                <button className="btn btn-primary">View More</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px', }}>

                    <button className="view btn btn-outline-light mt-4" style={{ width: '20rem', background: 'rgba(14, 251, 231, 0.59)' }}> <a href="/companies" style={{textDecoration:'none'}}>View More</a> </button>
                </div>
            </div>

            {/* Section = 6 */}

            <div className="container" style={{ boxShadow: '5px 5px 20px 6px rgba(37, 44, 45, 0.2)', border: '2px solid white', marginTop: '1.5rem', height: '19.5rem', width: '60rem', borderRadius: '2rem', background: 'linear-gradient(#f6c4ed,#e1dae6)' }}>
                <div className="last row h-100">

                    {/* LEFT COLUMN */}
                    <div className="col-4 d-flex flex-column align-items-center justify-content-start pt-4">
                        <img src={`${process.env.PUBLIC_URL}/Job_Dekho.png`} alt="Job Dekho" style={{ height: '10rem', width: '12rem', borderRadius: '10px', objectFit: 'cover' }} className="img"/>
                        <h5 style={{ fontSize: '1.4rem', marginTop: '1rem', textAlign: 'left' }}>
                            Discover jobs across <br /> popular roles
                        </h5>
                        <p style={{ fontSize: '0.9rem', textAlign: 'left', marginLeft: '3rem' }}>
                            Select a role and we'll show you relevant jobs!
                        </p>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-8 d-flex align-items-top">
                        <div className="row w-100 mt-4">
                            <div className="col-4 mb-3">
                                <div className="job-Roles card">
                                    <div className="card-body">
                                        <h5 className="card-title">Full Stack Developer</h5>
                                        <p className="card-text">18.6K+ Jobs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-3">
                                <div className="job-Roles card">
                                    <div className="card-body">
                                        <h5 className="card-title">Mobile / App Developer</h5>
                                        <p className="card-text">3K+ Jobs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-3">
                                <div className="job-Roles card">
                                    <div className="card-body">
                                        <h5 className="card-title">Front End Developer</h5>
                                        <p className="card-text">5K+ Jobs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-3">
                                <div className="job-Roles card">
                                    <div className="card-body">
                                        <h5 className="card-title">DevOps Engineer</h5>
                                        <p className="card-text">3.1K+ Jobs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-3">
                                <div className="job-Roles card">
                                    <div className="card-body">
                                        <h5 className="card-title">Engineering Manager</h5>
                                        <p className="card-text">1.7K+ Jobs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-3">
                                <div className="job-Roles card">
                                    <div className="card-body">
                                        <h5 className="card-title">Technical Lead Manager</h5>
                                        <p className="card-text">9.9K+ Jobs</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Home;