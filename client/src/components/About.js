import React from 'react'; 
import Footer from './Footer'; 
import myportrait from '../assets/Turambe.jpg';
import '../mycss/About.css'; 

function About() {
  return (
    <div>
        <div className="profile-container">
            <h1>ABOUT ME</h1>
            <div className="profile-details">
                
                <p>
                    Almost everything we use and interact with today utilizes some form of computer science. 
                    Think about it: What device are you on while reading this story? What framework runs 
                    the website this story is on? How is your device connected to the internet that connects 
                    you to us?! We're just getting started. Due to computer science, society has undergone 
                    a number of changes. Artificial intelligence, for instance. AI helps doctors detect 
                    diseases. Using self-driving cars reduces the use of fossil fuels and takes your hands off 
                    the wheel. Programs that project the spread of forest fires and the most efficient way to 
                    combat them, and so on.<br/><br/> Currently, our planet is going through a period of unprecedented change, 
                    which is changing the way we live and work. Any job that can be automated will be replaced 
                    by new technology. To move ahead, we'll need more skills. These shifts aren't new, 
                    and they will continue to become more pronounced.<br/><br/>
                    How can you ensure that you have a fair shot at success in this new expanding economy?
                    In today's digital era, the demand for skilled tech professionals is at an all-time high. 
                    ode has become the language of the 21st century, driving innovation and shaping the future of industries worldwide.<br/><br/> 
                    Recognizing the transformative power of technology, I chose to pursue a career in the dynamic field of computer programming. 
                    Whether through formal education or alternative learning paths, I've dedicated myself to mastering the latest technologies 
                    and staying ahead of the curve. <br/><br/> By continuously honing my skills and embracing the ever-evolving tech landscape, 
                    I'm poised to make significant contributions to your organization's success.<br /> <br/>
                    Let's embark on a journey to elevate your digital presence! If you're seeking a dedicated and 
                    versatile MERN stack developer who thrives on challenges and is committed to delivering excellence, 
                    I'm ready to turn your vision into reality. Let's build something extraordinary together!
                </p>
            </div>
            
            <div className="profile-picture">
                <img src={myportrait} alt="my Profile" />
            </div>
            
            <div className="profile-social">
                <h2>Social Links</h2>
                <ul>
                    <li className='links'><a href="https://github.com/Jaycee90" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li className='links'><a href="https://www.linkedin.com/in/Jayce90/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    {/* Add more social links as needed */}
                </ul>
            </div>

            <div className="profile-education">
                <h2>Education</h2>
                <p>
                    <strong>Bachelor of Science in Computer Science</strong><br />
                    Texas State University – San Marcos, Texas<br />
                    <strong>Minor:</strong> Mathematics<br />
                    <strong>Overall GPA:</strong> 3.89<br />
                    <strong>Relevant Coursework:</strong> Data Structures, Computer Architecture, Object-Oriented Programming.<br />
                    <strong>Honors:</strong> Scholastic Excellence Award, Bobcat Select Transfer Scholarship, ACC Foundation Scholarship, Phi Theta Kappa Honor, multiple Dean's List certificates.
                </p>
            </div>

            <div className="tools-section">
              <h2>Tools & Technologies</h2>
              <ul className="tools-list">
                <li><strong>Programming Languages:</strong> C/C++, Java, Python</li>
                <li><strong>Web Development:</strong> HTML & CSS, JavaScript, Node.js, Express.js, React.js</li>
                <li><strong>Databases:</strong> MongoDB, MySQL, SQL Server</li>
                <li><strong>IDEs & Tools:</strong> Visual Studio Code,InteliJ, Eclipse, Chrome, Postman</li>
                <li><strong>Other Tools:</strong> MongoDB Atlas, Compass, Git, Bitbucket, Jira, Jenkins</li>
                <li><strong>Methodologies:</strong> Agile (Scrum), Sprint Planning, Agile Project Management</li>
              </ul>
            </div>

        </div>
        <Footer />
    </div>
  );
}

export default About;