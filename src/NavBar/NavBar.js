import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

function NavBar(){
    return(
          <div className="Navi">

          <div className='ficos'>
              <DehazeIcon  className='acci'/>
              <div className='deh'>
              <p><SearchIcon className='place'/><input 
              placeholder='search....' id='okay'/></p>
              <p id='eng'>Search</p>
              </div>
              </div>
            
              <div className='fik'>
              <img src='./image/flag.png' alt='' className='flag'/>
               <p className='fik' id='lish'>English</p>
               <NotificationsNoneIcon className='fik'/>
               <ZoomOutMapIcon className='fik'/>
               <SettingsIcon className='fik'/>
           <DarkModeIcon className='fik'/> 
           <FullscreenIcon className='fik'/>
           <img src='./image/johnn.jpg' alt='' id='Johnn-image'/>
           
           
           <div className='stop'>
           <p>Domnic Keller</p>
           <p id='tins'>Founder</p>  
           </div>
           </div>
           </div>
    )
}
export default NavBar;

