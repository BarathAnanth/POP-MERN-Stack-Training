import { useState } from "react";

const About = () => {
  const [resumeLink] = useState("your-google-drive-link-here");

  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div>
          <p className="description">
            Hello! My name is Barath Ananth S G, and I am currently pursuing a
            Bachelor's degree in Computer Science and Engineering at St.
            Joseph's Institute of Technology, OMR, Chennai - 119. I have a
            strong interest in UI/UX design and am actively learning to enhance
            my skills in this field. I am also a member of HOPE - House of
            Programming Expertise, a student initiative at our college aimed at
            improving problem-solving skills. My passion lies in exploring
            technological advancements and applying my knowledge to create
            intuitive and engaging user experiences.
          </p>
        </div>
        <a
          href="https://drive.google.com/file/u/1/d/14UMAxBzApz5a0d4QMCQRZ99bbEDCRD79/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default About;
