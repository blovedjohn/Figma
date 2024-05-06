import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ForumIcon from '@mui/icons-material/Forum';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddCardIcon from '@mui/icons-material/AddCard';
function Dashboard(){
    return(
        <div className="Dashboard">
        <p className="text">HYPER</p>
        <div className="crush">
        <p id="cushi" className="crush">NAVIGATION</p>
        <div className='ilo'>
        <p id="calii" className="crush"><HomeIcon className='homei'/>Dashboards</p>
         
         </div>
        <p id='rup' className="crush">Analystics</p>
        <p id="calie" className="crush">Ecommerce</p>
        <p className="crush">Projects</p>
        <p className="crush">CRM</p>
        <p className="crush">E-wallet</p>
        <p id="cush" className="crush">APPS</p>
        <p className="crush"><CalendarTodayIcon className='romi'/>Calender </p>
        <p className="crush"><ForumIcon className='romi'/>Chat</p>
        <p className="crush"><AccessTimeIcon className='romi'/>CRM</p>
        <p className="crush"><Inventory2Icon className='romi'/>E-Commerce </p>
        <p className="crush"><MailOutlineIcon className='romi'/>Email </p>
        <p className="crush"><AddCardIcon className='romi'/>Projects </p>
        </div>
        </div>
    )
}

export default Dashboard;