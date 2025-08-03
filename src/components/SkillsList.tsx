import React from 'react';
import { Button } from 'react-bootstrap';
import { useTheme } from '../theme/ThemeContext';

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Next.js',
    'TypeScript',
    'Flutter',
    'Bootstrap',
    'Tailwind',
    'Python',
    'UI/UX Design',
    'WordPress',
    'Figma',
];

const SkillsList = () => {
    const { theme } = useTheme();

    const getButtonVariant = () => {
        switch (theme) {
            case 'theme1':
                return 'outline-dark';
            case 'theme2':
                return 'outline-light';
            case 'theme3':
                return 'outline-secondary';
            default:
                return 'outline-primary';
        }
    };

    return (
        <div
            className="d-flex flex-wrap align-items-center justify-content-center gap-3 mt-2 w-100"
            style={{ maxWidth: '1000px' }}
        >
            {skills.map((skill, idx) => (
                <Button
                    key={idx}
                    variant={getButtonVariant()}
                    className="rounded-pill px-4 py-2 skill-btn"
                >
                    {skill}
                </Button>
            ))}
        </div>
    );
};

export default SkillsList;
