import React, { useState } from 'react';
import Contact from './Contact';

function Contactlist(props) {
    const [query ,setQuery] = useState([]); 

    const handleQuerySubmit = (data) => {
            setQuery([...query,data]);
    }
    return (
        <div className='container'>
            <Contact onSubmit={handleQuerySubmit}/>
             <h1 style={{ marginTop: '7rem', textAlign: 'center' }}>Query List</h1>
            {queries.length > 0 && (
            <table className="table mt-5 table-bordered table-hover text-center" style={{borderRadius: '12px', overflow: 'hidden'}}>
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
                    {queries.map((query,index) => (
                    <tr>
                        <th scope="row">{index}</th>
                        <td>{query.name}</td>
                        <td>{query.email}</td>
                        <td>{query.subject}</td>
                        <td>{query.message}</td>
                    </tr>  
                      ))}
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
            )}
        </div>
    );
}

export default Contactlist;