import React, { useState } from "react";
import './Kp.css';
import logo from '../../images/logo.png'

function Kp({startEvent,endEvent,startTime,endTime,eventPlace,countOfPerson,}) {
    // const current = new Date();
    // const options = {
    //     hour: 'numeric', minute: 'numeric', second: 'numeric',
    //     timeZoneName: 'long'
    // }
    // const date = current.toLocaleDateString('ru-RU', {
    //     year: 'numeric',
    //     month: 'numeric',
    //     day: 'numeric',
    // });
    // const [startEvent, setStartEvent] = useState(date)
    // const [endEvent, setEndEvent] = useState(date)
    // const [startTime, setStartTime] = useState("")
    // const [endTime, setEndTime] = useState("")
    // const [eventPlace, setEventPlace] = useState("")
    // const [countOfPerson, setCountOfPerson] = useState("")

    return (
                <div className="list">
                    <div className="top">
                        <div className="left">
                            <div className="list__logo-container">
                                <img className="list__logo" src={logo} alt="logo" />
                            </div>
                            <div className="list__title-container">
                                <h2 className="list__title">Фудтраки StreetFOOD</h2>
                            </div>
                            <div className="list__subtitle-container">
                                <p className="list__subtitle list__subtitle_place">{`${startEvent}-${endEvent} место: ${eventPlace};`}</p>
                                <p className="list__subtitle list__subtitle_person">{`кол-во персон: ${countOfPerson}`}</p>
                                <p className="list__subtitle list__subtitle_time">{`время мероприятия: ${startTime.slice(-6)} (${startEvent.slice(0,5)}) -${endTime.slice(-6)} (${endEvent.slice(0,5)}) `}</p>
                            </div>
                        </div>
                        <div className="right">
                            <p className="table__column">Количество, шт</p>
                            <p className="table__column">Стоимость</p>
                            <p className="table__column">Цена, руб</p>
                        </div>
                    </div>
                    <div className="middle"></div>
                    <div className="bottom"></div>
                </div>
    );

}

export default Kp;