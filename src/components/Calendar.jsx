import React from "react";
import Event from './Event'
import '../App.css';

const Calendar = () => {
    return (
        <div className ="calendar">
            <table>
                
                <tbody>
                <tr>
                      <Event event="Gym" detail="Train your body" color="bg" link="https://www.usf.edu/" 
                   image="https://i.postimg.cc/br4NYL81/1.png" />
                   <Event event="Basketball" detail="Play at the stadium" color="bg" link="https://www.usf.edu/" 
                   image="https://i.postimg.cc/Gt4m160c/2.png" />
                   <Event event="Swimming Pool" detail="Have a swim at the pool" color="bg" link="https://www.usf.edu/" 
                   image="https://i.postimg.cc/V6GkpmVG/3.png" />
                   <Event event="Volleyball" detail="Enjoy volleyball with the club" color="bg" link="https://www.usf.edu/" 
                   image="https://i.postimg.cc/yNKxSfRP/4.png" />
                    </tr>
              <tr>
              <Event event="Badminton" detail="Rule the badminton court" color="bg" link="https://www.usf.edu/" 
                   image="https://i.postimg.cc/QMqtgpkr/5.png" />
                   <Event event="Tennis" detail="Become a tennis champion" color="bg" link="https://www.usf.edu/" 
                   image="https://i.postimg.cc/nzcL3C09/6.png" />
                   <Event event="Pingpong" detail="Show your pingpong Prowess" color="bg" link="https://www.usf.edu/" 
                   image="https://i.postimg.cc/v824StRY/7.png" />
                   <Event event="Track Field" detail="Enjoy a run" color="bg" link="https://www.usf.edu/" 
                   image="https://i.postimg.cc/YqJht2qT/8.png" />
              </tr>
              <tr>
              <Event event="Soccer" detail="Join the soccer team" color="bg" link="https://www.usf.edu/" 
                   image="https://i.postimg.cc/fRmky4Vy/9.png" />
                   <Event event="Hockey" detail="Join if you also like hockey" color="bg" link="https://www.usf.edu/" 
                   image="https://i.postimg.cc/Qt0FDpHq/10.png" />
              </tr>
              <tr>
               
                <td></td>
              </tr>
              <tr>
                
                <td></td>
              </tr>
              <tr>

                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                
                <td></td>
              </tr>
              <tr>
                
                <td></td>
              </tr>
                </tbody>
            </table>
        </div>
    )  
}
export default Calendar;