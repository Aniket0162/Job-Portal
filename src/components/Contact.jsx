import React, { useState } from 'react';

function Contact(props) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        setErrors({});
    };

    const validateForm = (data) => {
        const errors = {};

        if (!data.name.trim()) {
            errors.name = "Name is required";
        } else if (data.name.length < 4) {
            errors.name = "Name must be at least 4 characters long";
        } else if (!/^[A-Za-z\s]+$/.test(data.name)) {
            errors.name = "Name must not contain numbers or special characters";
        }
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(data.email)) {
            errors.email = "Email is invalid";
        }
        if (!data.subject) {
            errors.subject = "Suject must be Field";
        }
        if (!data.message) {
            errors.message = "message is required";
        }
        return errors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateForm(formData);
        setErrors(newErrors);

        // To save Data in Local Storage
        if (Object.keys(newErrors).length === 0) {

            localStorage.setItem("Contact Form Details: ", JSON.stringify(formData));
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
            alert("Query is Submitted successfully");
            console.log("Contact Form Details: ", formData);
            handleReset();
        } else {
            console.log("Query Form submission failed due to validation errors.", formData);
        }
    };


    return (
        <div className='container'>
            <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Get In Touch !!!</h1>


            <div className="row h-100">
                {/* LEFT COLUMN */}
                <div className="col-4 d-flex flex-column align-items-start justify-content-start pt-3 mt-4">
                    <p style={{ marginBottom: '1rem' }}>If you have any Query, feel free to reach out to us.</p>
                    <img src={`${process.env.PUBLIC_URL}/Job_Dekho.png`} alt="Job Dekho" style={{ height: '10rem', width: '12rem', borderRadius: '10px', objectFit: 'cover' }} />
                    <h6 style={{ fontSize: '1.4rem', marginTop: '1rem', textAlign: 'left' }}> Fill out the form and our <br /> team will reach out to you <br /> within 1-2 business days.</h6>
                    <p style={{ fontSize: '0.9rem', textAlign: 'left' }}> Click the button below to schedule a meeting with us.</p>
                    <button className="btn btn-outline-light" style={{ background: 'linear-gradient(#471069,#b57bee)', width: '12rem' }} type="submit">Talk with us</button>
                </div>

                {/* RIGHT COLUMN */}
                <div className="col-8 d-flex align-items-start justify-content-center pt-4" style={{ fontWeight: 'bold' }}>
                    <div className="w-100">
                        <form onSubmit={handleSubmit} className="p-4 rounded shadow" style={{ background: 'linear-gradient(#f5895c,#f1eec8,#d3eef4)' }}>
                            <div className="row mb-3">
                                <div className="col">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" name='name' placeholder="Your name" value={formData.name} onChange={handleChange} />
                                    {errors.name && <span className="error-message" style={{ color: 'red' }}>{errors.name}</span>}
                                </div>
                                <div className="col">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" name='email' placeholder="Your email" value={formData.email} onChange={handleChange} />
                                    {errors.email && <span className="error-message" style={{ color: 'red' }}>{errors.email}</span>}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Subject</label>
                                <input type="text" className="form-control" name='subject' value={formData.subject} onChange={handleChange} placeholder="Subject" />
                                {errors.subject && <span className="error-message" style={{ color: 'red' }}>{errors.subject}</span>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" rows="4" name='message' value={formData.message} onChange={handleChange} placeholder="Your message here"></textarea>
                                {errors.message && <span className="error-message" style={{ color: 'red' }}>{errors.message}</span>}
                            </div>
                            <div className="text-end">
                                <button type="submit" className="btn btn-outline-light px-4" style={{ background: 'linear-gradient(#471069,#b57bee)' }}> Send Message </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className='container'>
                <h1 style={{ marginTop: '6rem', textAlign: 'center' }}>Query List</h1>
                <table className="table mt-4 table-bordered table-hover text-center" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>mark@gmail.com</td>
                            <td>Company not responding</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>Otto</td>
                            <td>otto@gmail.com</td>
                            <td>Delay in Updates</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>John</td>
                            <td>john@gmail.com</td>
                            <td>Site Not responding</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    );
}

export default Contact;