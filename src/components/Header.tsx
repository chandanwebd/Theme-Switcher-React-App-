import React, { useEffect } from 'react';
import { Navbar, Container, Form, Image, Nav, Spinner } from 'react-bootstrap';
import { useTheme } from '../theme/ThemeContext';
import logo1 from '../assets/logo1.jpg';
import logo2 from '../assets/logo2.jpg';
import logo3 from '../assets/logo3.jpg';
import { ThemeName } from '../theme/ThemeContext';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
    const { theme, setTheme } = useTheme();
    const [showAnimation, setShowAnimation] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (showAnimation) {
            const timer = setTimeout(() => {
                setShowAnimation(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showAnimation]);

    const getLogo = (): string => {
        switch (theme) {
            case 'theme2':
                return logo2;
            case 'theme3':
                return logo3;
            case 'theme1':
            default:
                return logo1;
        }
    };

    const loadLinks = (link: string) => {
        navigate(link);
    };

    return (
        <>
            <Navbar expand="lg" className={`shadow-sm brand-${theme}`} sticky="top">
                <Container fluid className="px-4">
                    <div className="d-flex align-items-center gap-3">
                        <Navbar.Brand className="d-flex align-items-center gap-2">
                            <div
                                key={theme}
                                style={{
                                    transition: 'opacity 0.4s ease-in-out',
                                    opacity: 1,
                                }}
                            >
                                <Image src={getLogo()} alt="Logo" height={50} />
                            </div>
                        </Navbar.Brand>
                    </div>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto mt-2 mt-lg-0">
                            <Nav.Link onClick={() => loadLinks('/')}>Home</Nav.Link>
                            <Nav.Link onClick={() => loadLinks('/about')}>About</Nav.Link>
                            <Nav.Link onClick={() => loadLinks('/contact')}>Contact</Nav.Link>
                        </Nav>

                        <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
                            <Form.Select
                                value={theme}
                                onChange={(e) => {
                                    const selectedTheme = e.target.value as ThemeName;
                                    setTheme(selectedTheme);
                                    localStorage.setItem('theme', selectedTheme);
                                    setShowAnimation(true);
                                }}
                                style={{ maxWidth: 200 }}
                                aria-label="Select Theme"
                            >
                                <option value="theme1">Default</option>
                                <option value="theme2">Dark</option>
                                <option value="theme3">Colorful</option>
                            </Form.Select>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Animated Loading Overlay */}
            {showAnimation && (
                <div className="theme-loading-overlay">
                    <div className="theme-loader">
                        <Spinner animation="border" variant="primary" />
                        <span className="ms-2">Applying theme...</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
