import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/style.css';
import avatar from '../assets/personal-infothumb.png';
import { useTheme } from '../theme/ThemeContext';

const HeroSection = () => {
    const { theme } = useTheme();

    const themeClasses = {
        theme1: 'hero-theme1',
        theme2: 'hero-theme2',
        theme3: 'hero-theme3',
    };

    return (
        <section className={`hero-section d-flex align-items-center ${themeClasses[theme]}`}>
            <Container>
                <Row className="align-items-center">
                    <Col md={7} className="text-content">
                        <div className="availability fs-5">
                            Currently Available For work <br />
                            <span className="underline">Worldwide <span>↗</span></span>
                        </div>
                        <h6>
                            <span className="font-weight-bold display-2">Chandan Das</span><br />
                            <span className="designer-text display-5">
                                <span className="highlighted">Software Engineer ✻</span>
                            </span>
                        </h6>

                        <div className="cta-group mt-4 d-flex align-items-center">
                            <Button variant="outline-light" className="me-3 rounded-pill px-4 py-2" href="#aboutme">
                                About me
                            </Button>
                        </div>
                    </Col>

                    <Col md={5} className="image-content text-center mt-4 mt-md-0">
                        <img
                            src={avatar}
                            alt="Creative Designer"
                            className="img-fluid hero-img"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
