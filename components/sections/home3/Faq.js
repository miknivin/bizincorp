'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
  return (
    <section className="faq-section sec-pad">
       <figure className="image-layer"><img src="assets/images/resource/faq-1.png" alt="" /></figure>
      <div className="auto-container">
      <div className="sec-title centred mb_50">
                    <span className="sub-title">FAQ'S</span>
                    <h2>Do You Have Any Business <br />Questions?</h2> 
                </div>
        <div className="row clearfix">
          <div className="col-xl-7 col-lg-12 col-md-12 offset-xl-5 content-column">
            <div className="content-box">
             
              <ul className="accordion-box">
              <li className="accordion block active-block">
              <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
              <div className="icon-box"><i className="icon-34"></i></div>
                  <h4>Can I get assistance with my business setup remotely?
</h4>
              </div>
              <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                      <div className="text"><p>Yes, Biz InCorp offers fully remote support for business setup, visa applications, and more. Our team will guide you through every step, no matter where you are.</p>
                      </div>
                  </div>
              </div>
          </li>
          <li className="accordion block active-block">
              <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                <div className="icon-box"><i className="icon-34"></i></div>
                  <h4>How long does the UAE resident visa process take?
</h4></div>
              <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                      <div className="text"><p>The timeline for a UAE resident visa depends on various factors, such as the type of visa and your specific circumstances. Contact us for a personalized consultation to get an accurate estimate.</p>
                      </div>
                  </div>
              </div>
          </li>
          <li className="accordion block active-block">
              <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                <div className="icon-box"><i className="icon-34"></i></div>
                  <h4>Do you provide attestation services outside Dubai?
</h4></div>
              <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                      <div className="text"><p>Yes, Biz InCorp provides attestation services for over 120 countries, including Dubai-based attestation. Contact us to learn how we can assist with your specific needs.</p>
                      </div>
                  </div>
              </div>
          </li>
          <li className="accordion block active-block">
              <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                <div className="icon-box"><i className="icon-34"></i></div>
                  <h4> Can I consult with you over the phone?</h4></div>
              <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                      <div className="text"><p>Absolutely! We offer phone consultations to discuss your business needs. Schedule a call with our team through our Contact Us page to get started.
</p>
                      </div>
                  </div>
              </div>
          </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_four">
              <div className="image-box ml_30">
                <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-22.png)' }}></div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

