import React from "react";
import { ReactComponent as CkAutoLogo } from "../../assests/Ck-auto-logo.svg";
import { ReactComponent as CkAutoBG } from "../../assests/cloud-bg.svg";
import { ReactComponent as CkRecognization } from "../../assests/ck-recognized.svg";

export default function InfoSection() {
  return (
    <div className="ck-info-section">
      <div className="ck-info-heading">
        <CkAutoLogo />
        <p>AI-based AWS RI Management Platform</p>
      </div>

      <div className="features">
        <div className="feature">
          <img src="icon-zero-touch.png" alt="Zero-touch" />
          <div>
            <h3>Zero-touch, AI-powered Platform</h3>
            <p>Unlock risk-free coverage with our AI-driven platform</p>
          </div>
        </div>

        <div className="feature">
          <img src="icon-fast-setup.png" alt="Fast Setup" />
          <div>
            <h3>Lightning fast Setup</h3>
            <p>Takes less than 5 minutes to set up</p>
          </div>
        </div>

        <div className="feature">
          <img src="icon-savings.png" alt="Savings" />
          <div>
            <h3>See the savings first</h3>
            <p>Configure CUR file to view your savings</p>
          </div>
        </div>

        <div className="feature">
          <img src="icon-pay.png" alt="Pay only" />
          <div>
            <h3>Pay only when you save</h3>
            <p>No credit card required!</p>
          </div>
        </div>
      </div>

      <div className="footer-logos">
        <div className="footer-logos-wrapped">
          <div className="ck-achievements">
            <div>
              <span>12+</span>
              <p>years on AWS</p>
            </div>
            <div>
              <span>300+</span>
              <p>Active Customers</p>
            </div>
            <div>
              <span>$100 Mn+</span>
              <p>of Savings Delivered</p>
            </div>
            <div>
              <span>20%</span>
              <p>Average Savings on Total Bill</p>
            </div>
          </div>
          <div>
            <CkRecognization />
          </div>
        </div>
        {/* <CkAutoBG /> */}
      </div>
    </div>
  );
}
