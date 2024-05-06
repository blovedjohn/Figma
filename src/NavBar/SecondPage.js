import SsidChartIcon from '@mui/icons-material/SsidChart';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupIcon from '@mui/icons-material/Group';

function SecondPage(){
    return(

        <nav className='Ge'>

    <div className='work'>

        <div className='fex'>
        <div className='Details'>

        <div className='stip'>
           <p>Customers</p>
           <GroupIcon className='icone'/>
           </div>
           <p id='numi'>36,254</p>
           

           
           <div className='stip'>
           <p id='green'>5.27%</p>
           <p id='laa'>since last month</p>
        </div>
        </div>




        
        <div className='Debs'>
        <div className='stip'>
            <p>Order</p>
            <AddShoppingCartIcon className='iconst'/>
            </div>
           <p id='numi'>5,543</p>
           
           <div className='stip'>
            <p id='blue'>1.08%</p>
            <p id='laa'>since last month</p>
            </div>
        </div>
        </div>





        <div className='josh'>
        <div className='lots'>
        <div className='stip'>
           <p>REVENUE</p>
           <AttachMoneyIcon className='icons'/>
           </div>
           <p id='numi'>6,254</p>
           
           <div className='stip'>
           <p id='blue'>5.27%</p>
           <p id='laa'>since last month</p>
        </div>
        </div>
        



        <div className='melto'>
        <div className='stip'>
           <p>Growth</p>
           <SsidChartIcon className='iconst'/>
           </div>
           <p id='numi'>30,56</p>
           
           <div className='stip'>
           <p id='green'> 5.27%</p>
           <p id='laa'>since last month</p>
        </div>
        </div>
        </div>
        </div>



        <div className='General'>
        <div className='Cost'>
        <div className='Room'>
        <p>PROJECTIONS VS ACTUALS </p>
        <DragIndicatorIcon className='drag'/>
        </div>
        <div className='six'>
        <p className='six'>200k</p>
        <p className='six'>160k</p>
        <p className='six'>120k</p>
        <p className='six'>80k</p>
        <p className='six'>40k</p>
        <p className='six'>0k</p>
        </div>
        </div>

        <div className='Months'>
        <p className='Months'>JAN</p>
        <p className='Months'>FEB</p>
        <p className='Months'>MAR</p>
        <p className='Months'>APR</p>
        <p className='Months'>MAY</p>
        <p className='Months'>JUN</p>
        <p className='Months'>JUL</p>
        <p className='Months'>AUG</p>
        <p className='Months'>SEP</p>
        <p className='Months'>OCT</p>
        <p className='Months'>NOV</p>
        <p className='Months'>DEC</p>
        </div>
        </div>
        
</nav>
        
        
    );
        
    }
      export default SecondPage;