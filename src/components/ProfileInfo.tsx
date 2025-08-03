import React, { JSX } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { useTheme } from '../theme/ThemeContext';

interface SocialIcon {
    icon: JSX.Element;
    link: string;
    target?: string;
    rel?: string;
}

interface Action {
    title: string;
    desc?: JSX.Element;
    icons?: SocialIcon[];
}

const actions: Action[] = [
    {
        title: 'Email',
        desc: (
            <a
                href="mailto:chandanwebd1@gmail.com"
                className="text-decoration-none text-dark"
            >
                chandanwebd1@gmail.com
            </a>
        ),
    },
    {
        title: 'Phone',
        desc: (
            <a
                href="tel:+917559358914"
                className="text-decoration-none text-dark"
            >
                755-9358-914
            </a>
        ),
    },
    {
        title: 'Social Media',
        icons: [
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>,
                link: 'https://wa.me/917559358914'
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>,
                link: 'https://instagram.com/yourprofile'
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg>,
                link: 'https://linkedin.com/in/yourprofile'
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm-.334 3.5a.75.75 0 0 0-.338 1.154l5.614 7.45l-5.915 6.345l-.044.051H6.03l4.83-5.179l3.712 4.928a.75.75 0 0 0 .337.251h4.422a.75.75 0 0 0 .336-1.154l-5.614-7.45L20.017 4.5h-2.05l-4.83 5.18l-3.714-4.928a.75.75 0 0 0-.337-.252zm10.88 13.548L6.431 5.952H8.45l9.114 12.095z" clip-rule="evenodd" /></svg>,
                link: 'https://x.com/lovechandan14?t=P-69iWocIU7xbewatNVCcg&s=09',
                target: '_blank',
                rel: 'noopener noreferrer',
            },
        ],
    },
    {
        title: 'Location',
        desc: (
            <a
                href="https://maps.app.goo.gl/6jfcBbeRJEdPKV386"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
            >
                Mumbai, Maharashtra, India.
            </a>
        ),
    },
];

const ProfileActions: React.FC = () => {
    const { theme } = useTheme();

    const getIconColor = () => {
        switch (theme) {
            case 'theme1':
                return '#000';
            case 'theme2':
                return '#fff';
            case 'theme3':
                return '#000';
            default:
                return '000';
        }
    };

    const actions: Action[] = [
        {
            title: 'Email',
            desc: (
                <a href="mailto:chandanwebd1@gmail.com" className="text-decoration-none text-dark">
                    chandanwebd1@gmail.com
                </a>
            ),
        },
        {
            title: 'Phone',
            desc: (
                <a href="tel:+917559358914" className="text-decoration-none text-dark">
                    755-9358-914
                </a>
            ),
        },
        {
            title: 'Location',
            desc: (
                <a
                    href="https://maps.app.goo.gl/6jfcBbeRJEdPKV386"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                >
                    Mumbai, Maharashtra, India.
                </a>
            ),
        },
    ];

    return (
        <Container>
            <Row className='mt-3' style={{display: 'content'}}>
                {actions.map((action, idx) => (
                    <Col md={3} sm={4} key={idx}>
                        <Card className="p-3 info-cards border-0 mb-3 rounded-4 shadow-sm text-center">
                            <h5 className="fw-semibold">{action.title}</h5>
                            {action.icons ? (
                                <div className="d-flex justify-content-center gap-3 fs-5 mt-2">
                                    {action.icons.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.link}
                                            target={item.target || '_blank'}
                                            rel={item.rel || 'noopener noreferrer'}
                                            className="text-dark"
                                        >
                                            {item.icon}
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <p className="mb-0 fs-6">{action.desc}</p>
                            )}
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProfileActions;
