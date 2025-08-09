import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Welcome to my website
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='text'
              type='text'
              placeholder='Placeholder'
            />
            <Button buttonStyle='btn--outline'>Submit</Button>
          </form>
        </div>
      </section> */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact me:</h2>
            {/* <h2>Email: <Link to='/'>minhdvu02@gmail.com</Link></h2>
            <h2>Phone number: <Link to='/'>+1 613-716-1396</Link></h2> */}
            <h2>Email: minhdvu02@gmail.com</h2>
            <h2>Phone number: +1 613-716-1396</h2>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              MINH DUC VU
              {/* <i class='fab fa-typo3' /> */}
            </Link>
          </div>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href="https://www.facebook.com/MynameisM3"
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link github'
              href="https://github.com/MinhDuc1711"
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link linkedin'
              href="https://www.linkedin.com/in/minh-duc-vu-55814535b/"
              target='_blank'
              rel="noopener noreferrer"
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;