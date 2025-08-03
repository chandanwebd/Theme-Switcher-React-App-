import React, { useState } from 'react';
import { Container, Tab, Tabs, Image } from 'react-bootstrap';
import avatar from '../assets/me.jpg';
import SkillsList from './SkillsList';
import { useTheme } from '../theme/ThemeContext';
import ProfileCard from './ProfileCard';


const IntroTabsSection = () => {
    const [key, setKey] = useState('about');
    const { theme } = useTheme();

    const themeClasses = {
        theme1: 'tabs-theme1',
        theme2: 'tabs-theme2',
        theme3: 'tabs-theme3',
    };

    return (
        <>
            {/* Moving Marquee */}
            <div className="marquee-section" id='aboutme'>
                <div className="marquee-content">
                    <span>
                        ✻ Interactive Interfaces, Robust Systems ✻ Design - Develop - Deliver ✻ UI/UX Innovation Meets Full-Stack Power ✻
                    </span>
                    <span>
                        ✻ Design-Driven Development, End to End ✻ Where Aesthetics Meet Architecture ✻
                    </span>
                    <span>
                        ✻ Bridging User Experience with Scalable Code ✻ Where Aesthetics Meet Architecture ✻
                    </span>
                </div>
            </div>

            {/* Tabs Section */}
            <section className={`intro-content text-center py-5 ${themeClasses[theme]}`}>
                <Container className="mt-3">
                    <Tabs
                        id="intro-tabs"
                        activeKey={key}
                        onSelect={(k) => setKey(k || 'about')}
                        className="custom-tabs justify-content-center gap-3 mb-4"
                    >
                        <Tab eventKey="about" title="ABOUT ME">
                            <div className='d-flex align-items-center justify-content-center flex-column flex-md-row'>
                                <Image
                                    src={avatar}
                                    roundedCircle
                                    style={{
                                        border: '4px solid #f1f1f1',
                                        width: '120px',
                                        height: '120px',
                                        objectFit: 'cover',
                                    }}
                                />
                                <h2 className="intro-heading px-3 mt-3 mt-md-0">
                                    I'm Chandan Das, a passionate Software Engineer focused on building efficient, user-centric web applications. I love solving complex problems through clean and scalable code.
                                </h2>
                            </div>
                        </Tab>

                        <Tab eventKey="experience" title="EXPERIENCE">
                            <div className='d-flex justify-content-center w-100'>
                                <h2 className="intro-heading px-3">
                                    With 5 years of experience, I’ve led and contributed to robust Job Portals, tailored CRM solutions, and innovative Machine Learning applications. My journey includes impactful work at Niyamla Marketing Services, driving tech solutions that deliver real business value.
                                </h2>
                            </div>
                        </Tab>

                        <Tab eventKey="education" title="EDUCATION">
                            <div className='d-flex justify-content-center w-100'>
                                <h2 className="intro-heading px-3">
                                    With a strong foundation in Computer Science from Anna University and specialized training in Python, React, MongoDB, and Java, I’ve continuously built my skill set through advanced courses in Web Development and Graphic Design. My journey began with academic excellence in Mumbai and evolved into industry-ready expertise through hands-on technical education.
                                </h2>
                            </div>
                        </Tab>

                        <Tab eventKey="skills" title="SKILLS">
                            <div className='d-flex justify-content-center w-100'>
                                <SkillsList />
                            </div>
                        </Tab>
                    </Tabs>
                    <ProfileCard />
                </Container>

            </section>
        </>
    );
};

export default IntroTabsSection;
