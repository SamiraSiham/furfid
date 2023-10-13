import React from 'react';
import { useState } from 'react';
// import { useEffect } from 'react';
import '../../style/tools/select-date.css';
const SelectDate = () => {

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const mois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    const days = [];
    const years = [];
    for (let i = 1; i <= 31; i++) {
        days.push(i);
    }
    var currentYear = new Date().getFullYear();
    for (let i = 1940; i <= currentYear; i++) {
        years.push(i);
    }

    const handleDay = (e) => {
        setDay(e.target.value);
    }
    const handleMonth = (e) => {
        setMonth(e.target.value);
    }
    const handleYear = (e) => {
        setYear(e.target.value);
    }
    return (
        <div className="row">
            <div className="col-md-4">
                <select className='select-date' name="day" id="day" onChange={handleDay}>
                    <option value="" selected disabled>
                        Jour
                    </option>
                    {days.map((value, i) => (
                        <option key={i} value={value}>{value}</option>
                    ))}
                </select>
            </div>
            <div className="col-md-4">
                <select className='select-date' name="month" id="mois" onChange={handleMonth}>
                    <option value="mois" selected disabled>
                        Mois
                    </option>
                    {mois.map((value, i) => (
                        <option key={i} value={value}>{value}</option>
                    ))}
                </select>
            </div>
            <div className="col-md-4">
                <select className='select-date' id="year" name="year" onChange={handleYear}>
                    <option value="" selected disabled>
                        Année
                    </option>
                    {years.map((value, i) => (
                        <option key={i} value={value}>{value}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default SelectDate