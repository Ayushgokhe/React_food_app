import React from 'react';

const Contact = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Sign up</h1>
            </div>
            <div className='container'>
                <div className='col-md-6 col-10 mx-auto'>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Enter Name</label>
                            <input type="text" className="form-control" placeholder='Enter your Name' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder='Enter your Email' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Number</label>
                            <input type="number" className="form-control" placeholder='Enter your Number' />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;