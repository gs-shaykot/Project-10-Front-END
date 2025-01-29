import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='overflow-x-hidden'>
            <footer className="footer bg-[url('https://i.ibb.co.com/wh1JxWQ/Hexagon-1.png')] bg-cover bg-no-repeat text-white p-5 md:p-10 lg:p-20">
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Latest Events</a>
                    <a className="link link-hover">How it Works</a>
                    <a className="link link-hover">News</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <a className="link link-hover"><FaLocationDot className='text-secondary mr-2 inline' /> Dhaka, Bangladesh</a>
                    <a className="link link-hover"><MdEmail className='text-secondary mr-2 inline' /> support@crowdcube.com</a>
                    <a className="link link-hover"><FaPhoneAlt className='text-secondary mr-2 inline' />+01238947812</a>
                    <a className="link link-hover">Dont Hesitate to knock</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item w-40 md:w-auto" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;