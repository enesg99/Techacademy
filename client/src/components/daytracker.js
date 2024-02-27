import React, { useState, useEffect } from 'react';
import './daytracker.css'


function Daytracker() {
    const weekday = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
    const month = ["01","02","03","04","05","06","07","08","09","10","11","12"];

    const [todayDate, setTodayDate] = useState('');

    useEffect(() => {
        const actualDateContainer = new Date();
        const actualDay = actualDateContainer.getDay();
        const actualMonth = actualDateContainer.getMonth();
        const actualYear = actualDateContainer.getFullYear();

        let formattedDate = weekday[actualDay] + ': ' + (actualDay < 10 ? '0' +  actualDay : actualDay) + '.' + month[actualMonth] + '.' + actualYear;
        setTodayDate(formattedDate);
    }, []);

    return (
        <div className='daytrackerContainer'>
            <span id='todayDate'>{todayDate}</span>
            <div className='todaysGoal'>
                <h2>Plan für heute:</h2>
                <h2 style={{marginTop: '-2px'}}>Cardio</h2>
            </div>
        </div>
    )
}

export default Daytracker;