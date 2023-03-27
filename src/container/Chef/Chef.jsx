import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">We are not the best but we are trying our best to offer our customers best services .</p>
        </div>
        <p className="p__opensans"> We have adequate employees who are all qualified each one in his/her field of specialization.Catering services is one of the best services we offer. </p>
      </div>

      <div className="app__chef-sign">
        <p>Nickson Okwemba</p>
        <p className="p__opensans">Chef & Founder</p>
        <br/>
        
      </div>
    </div>
  </div>
);

export default Chef;
