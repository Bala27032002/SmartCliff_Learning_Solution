import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import '../styles/HomeStyles.css';

const QuestionAns = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='container' >
    <div className="row">
      <h4 style={{textAlign:"center",color:"#66023b",fontWeight:'600',fontFamily:"serif ",position:'relative',bottom:'2rem'}}>FREQUENTLY ASKED QUESTIONS</h4>
      <div className="col-md-6 col-sm-7">
        <img src="https://www.smartcliff.in/assets/images/faqimage.png" alt="Image" style={{marginLeft:"100px"}} />
      </div>

      <div className="col-md-6 col-sm-5 ">
        <div className="faq-right-widget">
          <div id="accordion" className="accordion">
            <div className="card mb-0">
              {/* Question 1 */}
              <div
                className={`card-header ${openIndex === 0 ? '' : 'collapsed'}`}
                data-toggle="collapse"
                href="#collapse0"
                onClick={() => handleToggle(0)}
              >
                <a className="card-title">
                  How do I register?{' '}
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ float: 'right', color: 'black', fontSize: '25px' }}
                  />
                </a>
              </div>
              <div
                id="collapse0"
                className={`card-body collapse ${openIndex === 0 ? 'show' : ''}`}
                data-parent="#accordion"
              >
                {/* Answer 1 */}
                <p>
                  Registration is available on our website. Just follow these simple steps:
                </p>
                <ul>
                  <li>Click on the signup button on the top right corner.</li>
                  <li>Sign up using your details.</li>
                  <li>Navigate to your desired course.</li>
                  <li>Click the "Buy Now" button on the program page.</li>
                  <li>You will be redirected to the checkout page for payment.</li>
                </ul>
              </div>

              {/* Question 2 */}
              <div
                className={`card-header ${openIndex === 1 ? '' : 'collapsed'}`}
                data-toggle="collapse"
                href="#collapse1"
                onClick={() => handleToggle(1)}
              >
                <a className="card-title">
                  When should I register?
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ float: 'right', color: 'black', fontSize: '25px' }}
                  />
                </a>
              </div>
              <div
                id="collapse1"
                className={`card-body collapse ${openIndex === 1 ? 'show' : ''}`}
                data-parent="#accordion"
              >
                {/* Answer 2 */}
                <p>
                  Most courses are offered every month throughout the year. Certain courses can
                  fill up quickly, so be sure to register early.
                </p>
              </div>

              {/* Question 3 */}
              <div
                className={`card-header ${openIndex === 2 ? '' : 'collapsed'}`}
                data-toggle="collapse"
                href="#collapse2"
                onClick={() => handleToggle(2)}
              >
                <a className="card-title">
                  Do I need specific equipment to take Online Courses?
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ float: 'right', color: 'black', fontSize: '25px' }}
                  />
                </a>
              </div>
              <div
                id="collapse2"
                className={`card-body collapse ${openIndex === 2 ? 'show' : ''}`}
                data-parent="#accordion"
              >
                {/* Answer 3 */}
                <p>
                  You should have an up-to-date web browser such as Chrome, Safari, Firefox, or
                  Internet Explorer. For more detailed information, please see the guides for
                  supported browsers and basic computer specifications. Our Online Courses can be
                  accessed on a mobile or tablet device, although we strongly encourage you to have
                  access to a desktop or laptop computer and a reliable internet connection for
                  certain course components. Former students have told us it is easiest to read
                  discussion threads and complete written assignments on a laptop or desktop
                  computer.
                </p>
              </div>

              {/* More questions and answers... */}

              <div
                className={`card-header ${openIndex === 3 ? '' : 'collapsed'}`}
                data-toggle="collapse"
                href="#collapse3"
                onClick={() => handleToggle(3)}
              >
                <a className="card-title">
                  Do I need to buy textbooks?
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ float: 'right', color: 'black', fontSize: '25px' }}
                  />
                </a>
              </div>
              <div
                id="collapse3"
                className={`card-body collapse ${openIndex === 3 ? 'show' : ''}`}
                data-parent="#accordion"
              >
                {/* Answer 3 */}
                <p>
                  All the reading materials you are required to access are included with your course.
                  Instructors may provide recommended and suggested texts for further exploration.
                </p>
              </div>

              <div
              className={`card-header ${openIndex === 4 ? '' : 'collapsed'}`}
              data-toggle="collapse"
              href="#collapse4"
              onClick={() => handleToggle(4)}
            >
              <a className="card-title">
              What is the admission process?
              </a> <FontAwesomeIcon icon={faAngleDown}  style={{float:"right",color: 'black',fontSize:"25px"}} />
            </div>
            <div
              id="collapse4"
              className={`card-body collapse ${openIndex === 4 ? 'show' : ''}`}
              data-parent="#accordion"
            >
              {/* Answer 4 */}
              <p>
              The application process consists of three simple steps. An offer of admission will be made to the selected candidates and accepted by the candidates upon payment of the admission fee.

Step 1: Submit an application which contains basic information.

Step 2: After we receive your application, we will provide you with a link to take an exam on the HackerEarthor SHL assessment platform.

Step 3: Based on your performance in the test our admissions team will reach out to you with details about the program.              </p>
            </div>


            <div
              className={`card-header ${openIndex === 5 ? '' : 'collapsed'}`}
              data-toggle="collapse"
              href="#collapse4"
              onClick={() => handleToggle(5)}
            >
              <a className="card-title">
              What is the structure of entrance assessments?
              </a> <FontAwesomeIcon icon={faAngleDown}  style={{float:"right",color: 'black',fontSize:"25px"}} />
            </div>
            <div
              id="collapse5"
              className={`card-body collapse ${openIndex === 5 ? 'show' : ''}`}
              data-parent="#accordion"
            >
              {/* Answer 5 */}
              <p>
              This entrance exam will be a blend of aptitude, MCQ, and coding — which will test your technical skills. You should have basic knowledge of the below topics to clear this exam:
<ul>

 <li> Logic reasoning</li>
 <li>Critical thinking</li>
 <li>Java Basics</li>
 <li>Data Structures</li>
 <li>OOPS Concepts</li> </ul>         </p>
            </div>



{/* content 6 */}

            <div
              className={`card-header ${openIndex === 6 ? '' : 'collapsed'}`}
              data-toggle="collapse"
              href="#collapse6"
              onClick={() => handleToggle(6)}
            >
              <a className="card-title">
              Who are the instructors and how are they selected?
              </a> <FontAwesomeIcon icon={faAngleDown}  style={{float:"right",color: 'black',fontSize:"25px"}} />
            </div>
            <div
              id="collapse6"
              className={`card-body collapse ${openIndex === 6 ? 'show' : ''}`}
              data-parent="#accordion"
            >
              {/* Answer 4 */}
              <p>
              All of our highly qualified trainers are industry expert    </p>
            </div>



{/* content 7 */}

            <div
              className={`card-header ${openIndex === 7 ? '' : 'collapsed'}`}
              data-toggle="collapse"
              href="#collapse7"
              onClick={() => handleToggle(7)}
            >
              <a className="card-title">
              Do I need to know programming to join this program?
              </a> <FontAwesomeIcon icon={faAngleDown}  style={{float:"right",color: 'black',fontSize:"25px"}} />
            </div>
            <div
              id="collapse6"
              className={`card-body collapse ${openIndex === 7 ? 'show' : ''}`}
              data-parent="#accordion"
            >
              {/* Answer 4 */}
              <p>
              Yes. Familiarity with concepts of programming in any language is must.  </p>
            </div>

{/* content 8 */}

            <div
              className={`card-header ${openIndex === 8 ? '' : 'collapsed'}`}
              data-toggle="collapse"
              href="#collapse8"
              onClick={() => handleToggle(8)}
            >
              <a className="card-title">
              What is the course duration per day?
              </a> <FontAwesomeIcon icon={faAngleDown}  style={{float:"right",color: 'black',fontSize:"25px"}} />
            </div>
            <div
              id="collapse6"
              className={`card-body collapse ${openIndex === 8 ? 'show' : ''}`}
              data-parent="#accordion"
            >
              {/* Answer 8 */}
              <p>
              Full time batch is highly intensive training with 4 hrs of live instructor led sessions and 4 hrs of assignments and practical.   </p>

</div>
{/* content 9 */}
            <div
              className={`card-header ${openIndex === 9 ? '' : 'collapsed'}`}
              data-toggle="collapse"
              href="#collapse9"
              onClick={() => handleToggle(9)}
            >
              <a className="card-title">
              Is this live training, or will I watch pre-recorded videos?
              </a> <FontAwesomeIcon icon={faAngleDown}  style={{float:"right",color: 'black',fontSize:"25px"}} />
            </div>
            <div
              id="collapse6"
              className={`card-body collapse ${openIndex === 9 ? 'show' : ''}`}
              data-parent="#accordion"
            >
              {/* Answer 4 */}
              <p>
              All the classes are live. They are interactive sessions that enable you to ask questions and participate in discussions during the class time. We do, however, provide recordings of each session you attend for your future reference. </p>
            </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default QuestionAns;