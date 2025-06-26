import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Job Portal</h6>
    <p className='text-gray-200'>Job Portal is your trusted freelance  marketplace to <br></br> post  and find  quality work with confidence.</p>
  </nav>
  <nav>
    <h6 className="footer-title">Contact Us</h6>
    <p>Email : <Link className='text-blue-300 hover:underline'>support@jobportal.com</Link></p>
    <p>Phone : <Link className='text-blue-300 hover:underline'>+1234-56789</Link></p>
    <p>address : 123 Freelance Ave, Silicon Valley, CA</p>
  </nav>
  <nav>
    <h6 className="footer-title">Useful Links</h6>
    {/* <Link>Terms & Conditions</Link>
    <Link>Privacy Policy</Link> */}
    <div className='flex gap-3 pt-2'>
    <Link to='https://facebook.com'><FaFacebook size={25}/></Link>
    <Link to='https://instagram.com'><FaInstagram size={25}/></Link>
    <Link to='https://www.linkedin.com/'><FaLinkedin size={25}/></Link>

    </div>
  </nav>
</footer>
    );
};

export default Footer;