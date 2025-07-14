import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import './title.styles.scss';
import Button from '../Button/Button';

const Title = ({user, shrink}) => {
    
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        navigate('/');
    }
    
    return(
        <div id="titleBar" className={shrink ? 'shrink' : ''}>
            <h1>ToDoEase</h1>
            <h3>Welcome{user ? `, ${user}` : ''} to your personal productivity companion.</h3>
            <h5>Manage your daily tasks, deadlines, and goals securely and efficiently.</h5>
            {user &&
                <Button onClick={handleLogout}>
                    <FiLogOut />
                </Button>
            }
        </div>
    )
}

export default Title;