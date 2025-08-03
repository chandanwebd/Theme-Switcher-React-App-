import React, { JSX } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

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
  return (
    <Row className="pt-3 mt-3 justify-content-center">
      {actions.map((action, idx) => (
        <Col md={3} sm={6} xs={12} key={idx}>
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
  );
};

export default ProfileActions;
