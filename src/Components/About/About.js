import React from 'react';

const About = () => {
  return (
    <>
      <div
        dir="ltr"
        className="hidden md:flex items-center ps-20 bg-cover bg-center w-full overflow-hidden h-[600px] md:h-[800px] lg:h-[900px] xl:h-[1000px]"
        style={{ backgroundImage: `url('/images/Group42.jpg')` }}
      >
        <div className='relative lg:w-[480px] xl:w-[700px] bg-opacity-70'>
          <h1 className="lg:text-4xl xl:text-5xl text-primary-base font-semibold">Maa Foundation</h1>

          <p className='xl:text-2xl mt-8 !leading-10 text-justify'>
            <span className='text-primary-base'>MAA FOUNDATION </span>
            is a beacon of hope and empowerment, dedicated to nurturing the potential of orphaned children and fostering the advancement of women through education. With a firm belief in the transformative power of learning, MAA Foundation tirelessly works to bridge the educational gaps in society. Their initiatives range from career counseling and life skills education for students to parenting sessions aimed at guiding children's growth effectively. Embracing the spirit of selflessness and unconditional love, MAA Foundation collaborates with various stakeholders to amplify their impact, ensuring that every project is scalable and replicable, thus extending their reach to more communities in need. Their vision is not only to educate but to instill values and skills that will empower individuals to build a brighter, self-sustaining future.
          </p>
        </div>
      </div>

      {/* 2nd section for large screens */}
      <div
        dir="rtl"
        className="flex items-center  h-[600px] md:h-[800px] lg:h-[900px] xl:h-[1000px] ps-[5.5%] bg-cover bg-center overflow-x-hidden"
        style={{ backgroundImage: `url('/images/page2.jpg')` }}
      >
        <div dir="ltr" className='relative lg:w-[660px] xl:w-[840px] bg-white bg-opacity-70'>
          <h1 className="text-right lg:text-[40px] xl:text-[52px] text-primary-base font-semibold">Founder & President</h1>

          <p className='xl:text-2xl mt-8 text-justify !leading-10'>
            <span className='text-primary-base'>Richa Bashistha</span>, a dedicated and compassionate individual, is known for her significant contributions to the Railway Ministry of India. However, her work extends beyond her professional commitments. She is the driving force behind the MAA Foundation, an organization that has been transforming lives and making a difference in society.
          </p>

          <p className='xl:text-2xl mt-8 text-justify !leading-10'>
            The <span className='text-primary-base'>Maa Foundation</span>, under Richa's leadership, has been working tirelessly to uplift orphan children and empower women. The foundation offers resources that provide a career counselling program, personality development camps (life skill education), and many more self-improvement tools. For parents, they offer parenting sessions to nurture their children correctly.
          </p>

          <p className='xl:text-2xl mt-8 text-justify !leading-10'>
            Richa's vision for the MAA Foundation is not just about providing immediate help. It's about equipping individuals with the skills and knowledge they need to improve their own lives and contribute positively to society. Her work with the foundation reflects her belief in the power of education and the importance of providing equal opportunities for everyone.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
