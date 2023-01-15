import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <section className='section footer bg-dark text-white'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-xs-12'>
                            <h5>About Company</h5>
                            <hr />
                            <p style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit dolor, dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing...</p>
                        </div>
                        <div className='col-md-4'>
                            <h5>Quick Links</h5>
                            <hr />
                            <div><Link className='text-white' to="/" style={{textDecoration: "none"}}>Home</Link></div>
                            <div><Link className='text-white' to="/about" style={{textDecoration: "none"}}>SE Liimaus</Link></div>
                            <div><Link className='text-white' to="/contact" style={{textDecoration: "none"}}>Contact</Link></div>
                        </div>
                        <div className='col-md-4'>
                            <h5>Contact Information</h5>
                            <hr />
                            <div><p className='text-white mb-1'>#9, Latolankatu, Joensuu</p></div>
                            <div><p className='text-white mb-1'>+358 400000000</p></div>
                            <div><p className='text-white mb-1'>email@domain.com</p></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;