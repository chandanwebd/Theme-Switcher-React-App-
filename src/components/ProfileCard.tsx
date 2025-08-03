import { Card } from 'react-bootstrap';
import { useTheme } from '../theme/ThemeContext'; // adjust path if needed
import ProfileActions from './ProfileActions';

const ProfileCard = () => {
  const { theme } = useTheme();

  return (
    <Card className={`overflow-hidden border-0 ${theme}`}>
      <Card.Body>
        <ProfileActions />
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
