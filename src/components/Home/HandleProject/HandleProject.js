import React from 'react';

const HandleProject = () => {
    return (
        <div className='section bg-light'>
            <br />
            <h1 className='text-center'>Higher us</h1>
            <div className='row mt-5'>
                <form>
                    <div className="row d-flex justify-content-start">
                        <div className="col-md-3 offset-md-3">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-3 offset-md-3">
                            <input type="text" className="form-control" placeholder="Company" />
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Company ID" />
                        </div>
                    </div>
                    <br />
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-6'>
                            <textarea className="form-control" placeholder='Your message' id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <br />
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-1'>
                            <button className='btn btn-info'>Submit</button>
                        </div>                        
                    </div>
                    <br /><br />                    
                </form>
            </div>
        </div>
    );
};

export default HandleProject;