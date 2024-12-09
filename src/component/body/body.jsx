import headerImage from "../../assets/header-image.png";
import file from "../../assets/file.png";
import task from "../../assets/task.png";
import security from "../../assets/security.png";
import candle from "../../assets/candle.png";
import faqImage from "../../assets/faq-image.png";
import user from "../../assets/user.png";
import notification from "../../assets/bell.png";
import { Bullet } from "../../svg";
function Body() {
  return (
    <div className="body">
      <div className="body-header">
        <div>
          <p className="body-header-md">
            Welcome to the <br />
            Financial Statements Portal
          </p>
          <p className="body-header-sm">
            The most comprehensive financial statements in Nigeria
          </p>
        </div>
        <button className="action-button">Get Started</button>
      </div>

      <div className="body-header-img">
        <img className="body-header-img" src={headerImage} alt="header image" />
      </div>
      <div className="body-header-text">
        EFFICIENT FINANCIAL STATEMENTS FILING IS ESSENTIAL FOR TRANSPARENCY,
        ACCOUNTABILITY, AND REGULATORY COMPLIANCE. THE NATIONAL REPOSITORY FOR
        FINANCIAL STATEMENTS IS AN INITIATIVE OF THE FINANCIAL REPORTING COUNCIL
        OF NIGERIA DEDICATED TO SIMPLIFYING AND STREAMLINING THE FILING PROCESS
        FOR ENTITIES/ORGANIZATIONS IN NIGERIA . OPERATED UNDER THE OVERSIGHT OF
        THE FINANCIAL REPORTING COUNCIL (FRC), OUR PLATFORM ENSURES YOUR
        SUBMISSIONS MEET THE HIGHEST STANDARDS OF ACCURACY AND COMPLIANCE.
      </div>
      <div className="body-grid">
        <div className="heading">
          <Bullet />
          <p className="heading-1">
            Why Use Financial
            <br /> Statements Portal?
          </p>
        </div>
        <div className="body-grid-items">
          <div className="body-grid-item">
            <img src={file} alt="file image" width={76} />
            <div className="body-grid-item-text">
              <p className="body-grid-item-text-md">
                Comprehensive
                <br /> Support for Diverse Filers
              </p>
              <ul className="body-grid-item-text-sm">
                <p>
                  We cater to a wide range of entities,
                  <br /> including:
                </p>
                <br />
                <li>- Public Interest Entities (PIEs)</li>
                <li>- Professional Firms</li>
                <li>- Not-for-Profit Organizations</li>
                <li>- Public and Private Sector Entities</li>
              </ul>
            </div>
          </div>
          <div className="body-grid-item">
            <img src={task} alt="file image" width={76} />
            <div className="body-grid-item-text">
              <p className="body-grid-item-text-md">Seamless Compliance</p>
              <p className="body-grid-item-text-sm">
                Stay aligned with the requirements of the FRC Act, reducing the
                risks of penalties or regulatory discrepancies. Our service
                ensures every submission adheres to Nigeria’s corporate
                governance and financial reporting standards.
              </p>
            </div>
          </div>
          <div className="body-grid-item">
            <img src={security} alt="file image" width={76} />
            <div className="body-grid-item-text">
              <p className="body-grid-item-text-md">Advanced Security</p>
              <p className="body-grid-item-text-sm">
                We prioritize the security of your financial data. All
                submissions are encrypted and stored in compliance with federal
                data protection regulations.
              </p>
            </div>
          </div>
          <div className="body-grid-item">
            <img src={user} alt="file image" width={76} />
            <div className="body-grid-item-text">
              <p className="body-grid-item-text-md">User-Centric Experience</p>
              <p className="body-grid-item-text-sm">
                Navigate an intuitive platform that simplifies document
                submission. Whether you’re uploading annual financial statements
                or corporate governance reports, our portal ensures a smooth
                process with real-time tracking.
              </p>
            </div>
          </div>
          <div className="body-grid-item">
            <img src={notification} alt="file image" width={76} />
            <div className="body-grid-item-text">
              <p className="body-grid-item-text-md">Timely Notifications</p>
              <p className="body-grid-item-text-sm">
                Receive updates at every stage— from submission acknowledgment
                <br />
                to approval notifications.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="body-roadmap">
        <div className="heading">
          <Bullet />
          <p className="heading-1">How It Works</p>
        </div>
        <div className="body-roadmap-items">
          <div className="body-roadmap-item">
            <p className="body-roadmap-item-text-md">STEP 01</p>
            <img src={candle} alt="candle image" width={22} />
            <div className="body-roadmap-item-text-body">
              <p className="body-roadmap-item-text-sm">Log On</p>
              <p className="body-roadmap-item-text-xs">
                Log on the portal with
                <br /> Your Registered FRC Number
              </p>
            </div>
          </div>
          <div className="body-roadmap-item">
            <p className="body-roadmap-item-text-md">STEP 02</p>
            <img src={candle} alt="candle image" width={22} />
            <div className="body-roadmap-item-text-body">
              <p className="body-roadmap-item-text-sm">Upload Documents</p>
              <p className="body-roadmap-item-text-xs">
                Submit your financial reports via our secure portal.
              </p>
            </div>
          </div>
          <div className="body-roadmap-item">
            <p className="body-roadmap-item-text-md">STEP 03</p>
            <img src={candle} alt="candle image" width={22} />
            <div className="body-roadmap-item-text-body">
              <p className="body-roadmap-item-text-sm">Verification & Review</p>
              <p className="body-roadmap-item-text-xs">
                Our team ensures all filings meet regulatory standards.
              </p>
            </div>
          </div>
          <div className="body-roadmap-item">
            <p className="body-roadmap-item-text-md">STEP 04</p>
            <img src={candle} alt="candle image" width={22} />
            <div className="body-roadmap-item-text-body">
              <p className="body-roadmap-item-text-sm">
                Approval & Notification
              </p>
              <p className="body-roadmap-item-text-xs">
                Once approved, receive an official notification for your
                records.
              </p>
            </div>
          </div>
          <div className="body-roadmap-items-divider"></div>
        </div>
        <button className="action-button">Get Started</button>
      </div>
      <div className="body-faq">
        <div className="heading">
          <Bullet />
          <p className="heading-1">Frequently Asked Questions (FAQ)</p>
        </div>
        <div className="body-faq-cont">
          <img src={faqImage} alt="fax image" height={321} />
          <div className="body-faq-items">
            <div className="body-faq-item">
              <div className="body-faq-item-md">
                Who needs to file financial statements through this service?
              </div>
              <p className="body-faq-item-sm">
                All entities classified under Public Interest Entities,
                professional firms, and specific private and public sector
                organizations must comply with FRC guidelines by submitting
                their financial documents.
              </p>
            </div>
            <div className="body-faq-item">
              <div className="body-faq-item-md">
                What documents are required?
              </div>
              <p className="body-faq-item-sm">
                Typically, entities must submit: Annual Financial Statements
              </p>
            </div>
            <div className="body-faq-item">
              <div className="body-faq-item-md">
                How secure is the platform?
              </div>
              <p className="body-faq-item-sm">
                Our platform uses advanced encryption to protect your data. All
                submissions are stored securely and accessed only by authorized
                personnel.
              </p>
            </div>
            <div className="body-faq-item">
              <div className="body-faq-item-md">
                What happens after I submit my documents?
              </div>
              <p className="body-faq-item-sm">
                Your submission undergoes a vetting process to ensure compliance
                with FRC standards. You will be notified of the status through
                email.
              </p>
            </div>
            <div className="body-faq-item">
              <div className="body-faq-item-md">
                What happens after I submit my documents?
              </div>
              <p className="body-faq-item-sm">
                In case of rejection, you will receive detailed feedback with
                corrective actions. Resubmit the corrected documents to complete
                the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
