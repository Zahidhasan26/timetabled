import React from "react";
import Event from './Event'
import '../App.css';

const Calendar = () => {
    return (
        <div className ="calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                      <td className="time">8 am</td>
                      <Event event="vs Real Madrid" location='HOME' color="home" />
                      <td></td>
                      <Event event="Practice" location='HOME' color="practice" />
                      <td></td>
                      <td></td>
                      <Event event="vs Real Madrid" location='Away' color="away" />
                      <td></td>
                    </tr>
              <tr>
                <td className="time">9 am</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="time">10 am</td>
                <td></td>
                <Event event="Practice" location='HOME' color="practice" />
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='vs Atletico Madrid' location='HOME' color ='home'/>
              </tr>
              <tr>
                <td className="time">11 am</td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='vs PSG' location='AWAY' color ='away'/>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="time">12 pm</td>
                <Event event="Practice" location='HOME' color="practice" />
                <td></td>
                <Event event="vs practice" location='HOME' color="practice" />
                <td></td>
                <td></td>
                <Event event='vs Atletico Madrid' location='AWAY' color ='away'/>
                <td></td>
              </tr>
              <tr>
                <td className="time">1 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="time">2 pm</td>
                <td></td>
                <Event event="Team Lunch" color="lunch" />
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="time">3 pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="time">4 pm</td>
                <td></td>
                <Event event="vs Manchester City" location='HOME' color="home" />
                <td></td>
                <td></td>
                <Event event="vs PSG" location='HOME' color="home" />
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="time">5 pm</td>
                <Event event="Practice" location='HOME' color="practice" />
                <td></td>
                <Event event="Practice" location='HOME' color="practice" />
                <td></td>
                <td></td>
                <Event event="vs Manchester City" location='AWAY' color="away" />
                <td></td>
              </tr>
                </tbody>
            </table>
        </div>
    )  
}
export default Calendar;