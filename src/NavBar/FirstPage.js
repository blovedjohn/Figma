import DateRangeIcon from '@mui/icons-material/DateRange'; 
import FilterListIcon from '@mui/icons-material/FilterList';
import LoopIcon from '@mui/icons-material/Loop';

function FirstPage(){
    return(
        <div className='datap'>
           <p id='bor'>Dashboard</p>
           <div className='datimes'>
           <p id='data'>05/02/2024</p>
           <div className='dok'>
           <DateRangeIcon className='icon'/>
           <LoopIcon className='icon'/>
           <FilterListIcon className='icon'/>
        </div>
        </div>
        </div>
    )
}

export default FirstPage;