

import React from 'react';
import './About.css'; // Ensure this file is created

const About = () => {
  return (
    <>
      <div className="about-section" style={{ backgroundImage: `url('/images/Group42.jpg')` }}>
        <div className="content">
          <h1 className="title">Maa Foundation</h1>
          <p className="description">
            <span className='highlight'>MAA FOUNDATION</span> is a beacon of hope and empowerment, dedicated to nurturing the potential of orphaned children and fostering the advancement of women through education. With a firm belief in the transformative power of learning, MAA Foundation tirelessly works to bridge the educational gaps in society. Their initiatives range from career counseling and life skills education for students to parenting sessions aimed at guiding children's growth effectively. Embracing the spirit of selflessness and unconditional love, MAA Foundation collaborates with various stakeholders to amplify their impact, ensuring that every project is scalable and replicable, thus extending their reach to more communities in need. Their vision is not only to educate but to instill values and skills that will empower individuals to build a brighter, self-sustaining future.
          </p>
        </div>
      </div>

      <div className="about-section2" style={{ backgroundImage: `url('/images/page2.jpg')` }}>
        <div className="content2">
          <h1 className="title">Founder & President</h1>
          <p className="description">
            <span className='highlight'>Richa Bashistha</span>, a dedicated and compassionate individual, is known for her significant contributions to the Railway Ministry of India. However, her work extends beyond her professional commitments. She is the driving force behind the MAA Foundation, an organization that has been transforming lives and making a difference in society.
          </p>
          <p className="description">
          The <span className='text-primary-base'>Maa Foundation</span>, under Richa's leadership, has been working tirelessly to uplift orphan children and empower women. The foundation offers resources that provide a career counselling program, personality development camps (life skill education), and many more self-improvement tools. For parents, they offer parenting sessions to nurture their children correctly.
          </p>
          <p className="description">
          Richa's vision for the MAA Foundation is not just about providing immediate help. It's about equipping individuals with the skills and knowledge they need to improve their own lives and contribute positively to society. Her work with the foundation reflects her belief in the power of education and the importance of providing equal opportunities for everyone.
          </p>


        </div>
      </div>
    </>
  );
};

export default About;