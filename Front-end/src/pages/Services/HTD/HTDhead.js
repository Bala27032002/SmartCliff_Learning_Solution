
import React from 'react';
import Serviceui from '../../Courses/ImgconUi';
import Banner from "../../../images/hiredeploy.webp";
const HTDhead= () => {
  const service1 = {
    heading: " Take a proactive approach to the recruitment: HIRE–TRAIN–DEPLOY",
    imgsrc: Banner,
    title: "The Hire-Train-Deploy model is a strategic approach to talent sourcing, training, and deploying. Our experienced hiring consultants shortlist and train candidates to develop niche-specific skills suitable for specific job roles. "
  };

//   const service2 = {
//     heading: "Master of Computer Application",
//     imgsrc: "home2",
//     title: "MCA stands for Master of Computer Applications. It is a postgraduate degree program. MCA programs typically cover advanced topics in computer science, software development, algorithms, database management, networking, and systems analysis."
//   };

//   const service3 = {
//     heading: "Lateral Training",
//     imgsrc: "home3",
//     title: "Lateral training, also known as lateral development or horizontal training, refers to a type of training and development approach that focuses on enhancing skills and knowledge within the same job level or role. It is aimed at broadening the skill"
//   };

//   const service4 = {
//     heading: "Institutional Training",
//     imgsrc: "home4",
//     title: "Institutional training benefits both employees and the organization. It enables employees to acquire new skills, enhance their existing competencies, and stay abreast of industry trends. For the organization, it contributes to a culture of continuous learning."
//   };

  return (
    <div>
      <Serviceui heading={service1.heading} imgsrc={service1.imgsrc} title={service1.title} />
      {/* <Serviceui heading={service2.heading} imgsrc={service2.imgsrc} title={service2.title} />
      <Serviceui heading={service3.heading} imgsrc={service3.imgsrc} title={service3.title} />
      <Serviceui heading={service4.heading} imgsrc={service4.imgsrc} title={service4.title} /> */}
    </div>
  );
};

export default HTDhead;