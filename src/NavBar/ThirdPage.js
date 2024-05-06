import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ThirdPage(){

    return(

        <nav className='Head-flex'>

        
        <div className='revenu'>
        <p id='erev'>REVENUE <DragIndicatorIcon className='Dragind'/></p>


        <div className='off'>
        <div className='set'>
        <p id='small'>Current week</p>
        <p id='big'>$58,254</p>
        </div>

        <div  className='sets'>
        <p id='small'>previous week</p>
        <p id='big'>$69,524</p>
        </div>
        </div>
    
        <div className='Amount'>

        <div className='tip'>
          <p>36K</p>
          <div className='tipo'>
          <p>Today's Earning: $2,562.30</p>
          <p>Etiam ultricies nisi vel augue. Curabitur ullamcorper <br/> ultricies nisi. Nam eget dui. Etiam rhoncus..</p>
          </div>
          </div>
           
          <div className='view'>
          <p>27K</p>
          <p id='com'>View comments <ArrowForwardIcon className='arrow'/></p>
          </div>

          <p>18K</p>
          <p>9K</p>
          <p>ok</p>
      </div>

        <div className='Weeks'>
          <p className='Weeks'>MON</p>
          <p className='Weeks'>TUE</p>
          <p className='Weeks'>WED</p>
          <p className='Weeks'>THU</p>
          <p className='Weeks'>FRI</p>
          <p className='Weeks'>SAT</p>
          <p className='Weeks'>SUN</p>
          </div>
          </div>
        

          
          
          <div className='seco'>
          <div className='vv'>
          <p id='star'>REVENUE BY LOCATION <DragIndicatorIcon className='Dragine'/></p>
          <p>New York</p>

          <div className='vol'>
          <div className='bett'>
          </div>
          <div className='beti'>
          </div>
          <p>72k</p>
          </div>

          <p>San Francisco</p>

          
          
          <div className='vol'>
          <div className='betes'>
          </div>
          <div className='bets'>
          </div>
          <p>39k</p>
          </div>

          <p>Sydney</p>

          

          
          <div className='vol'>
          <div className='betes'>
          </div>
          <div className='bets'>
          </div>
          <p>25k</p>
          </div>

          <p>Singerpore</p>

          

          
          <div className='vol'>
          <div className='bety'>
          </div>
          <div className='betl'>
          </div>
          <p>61k</p>
          </div>
          </div>

          </div>
        </nav>
    
    )
}
export default ThirdPage;