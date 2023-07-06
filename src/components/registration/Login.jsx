import React from 'react'

const Login = () => {
    return (
        <>
         
            <div className='container'>
                <div id="loginModal" style={{width: "600px", margin: 'auto'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="text-center">
                                <h5 className="text-center fw-bold fs-3" id="exampleModalLabel">Login</h5>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" style={{backgroundColor: '#5adbb5', fontSize: '20px', fontWeight: '600'}} className="btn btn-outline w-100 ">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> </div>
        </>
    )
}

export default Login