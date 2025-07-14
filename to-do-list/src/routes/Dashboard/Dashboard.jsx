import Title from '../../components/title/title.component';
import Footer from '../../components/Footer/Footer';
import { getUsernameFromToken } from '../../utils/jwtUtils';
import './Dashboard.scss';

const Dashboard = () => {

    const username = getUsernameFromToken();
    
    return(
        <div id='dashboard-container'>
            <Title user={username} shrink={'login'}/>
            
            <Footer />
        </div>
    )
}

export default Dashboard;