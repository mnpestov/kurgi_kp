import React, { useState } from "react";
import './Header.css';
import logo from '../../images/logo.png'
import managerPhoto from '../../images/managerPhoto.png'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Header({managerName,managerJobTitle,managerEmail,managerTel,kpNumber,kpDate,contractNumber,contractDate}) {
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
    // const [managerName, setManagerName] = useState('Павел Кург')
    // const [managerJobTitle, setManagerJobTitle] = useState('Руководитель проекта')
    // const [managerEmail, setManagerEmail] = useState('kurgi-bar@yandex.ru')
    // const [managerTel, setManagerTel] = useState('+7 925 516-31-16')
    // const [kpNumber, setKpNumber] = useState("")
    // const [kpDate, setKpDate] = useState(date)
    // const [contractNumber, setContractNumber] = useState("")
    // const [contractDate, setContractDate] = useState(date)
    // const [startEvent, setStartEvent] = useState(date)
    // const [endEvent, setEndEvent] = useState(date)
    // const [startTime, setStartTime] = useState("")
    // const [endTime, setEndTime] = useState("")
    // const [eventPlace, setEventPlace] = useState("")
    // const [countOfPerson, setCountOfPerson] = useState("")

    // const handleChangeKpNumber = ({ target: { value } }) => {
    //     setKpNumber(value)
    // }
    // const handleChangeKpDate = ({ target: { value } }) => {
    //     const enteredDate = new Date(value)
    //     setKpDate(enteredDate.toLocaleDateString('ru-RU', {
    //         year: 'numeric',
    //         month: 'numeric',
    //         day: 'numeric',
    //     }))
    // }
    // const handleChangeContractNumber = ({ target: { value } }) => {
    //     setContractNumber(value)
    // }
    // const handleChangeContractDate = ({ target: { value } }) => {
    //     setContractDate(value)
    // }
    // const handleChangeStartEvent = ({ target: { value } }) => {
    //     const enteredDate = new Date(value)
    //     setStartEvent(enteredDate.toLocaleDateString('ru-RU', {
    //         year: 'numeric',
    //         month: 'numeric',
    //         day: 'numeric',
    //     }))
    //     setStartTime(enteredDate.toLocaleDateString('ru-RU', {
    //         hour: 'numeric',
    //         minute: 'numeric'
    //     }))
    // }
    // const handleChangeEndEvent = ({ target: { value } }) => {
    //     const enteredDate = new Date(value)
    //     setEndEvent(enteredDate.toLocaleDateString('ru-RU', {
    //         year: 'numeric',
    //         month: 'numeric',
    //         day: 'numeric',
    //     }))
    //     setEndTime(enteredDate.toLocaleDateString('ru-RU', {
    //         hour: 'numeric',
    //         minute: 'numeric'
    //     }))
    // }
    // const handleChangeEventPlace = ({ target: { value } }) => {
    //     setEventPlace(value)
    // }
    // const handleChangeCountOfPerson = ({ target: { value } }) => {
    //     const declination = (value) => {
    //         if (value % 10 == 2 || value % 10 == 3 || value % 10 == 4) {
    //             if (value % 100 != 12 && value % 100 != 13 && value % 100 != 14) {
    //                 return `${value} человека`
    //             }
    //             else {
    //                 return `${value} человек`
    //             }
    //         } else {
    //             return `${value} человек`
    //         }
    //     }
    //     setCountOfPerson(declination(value))
    // }

    return (
        <section className="header">
            {/* <div className="form">
                <label className="label">№ КП</label>
                <input className="input" type="text" placeholder="KP number" name="KpNumber" onChange={handleChangeKpNumber}></input>
                <label className="label">дата КП</label>
                <input type="date" id="kpDate" name="KP-date" min="2000-01-01" max="2030-12-31" onChange={handleChangeKpDate} />
                <label className="label">№ договора</label>
                <input className="input" type="text" placeholder="Contract number" name="ContractNumber" onChange={handleChangeContractNumber}></input>
                <label className="label">дата договора</label>
                <input className="input" type="date" placeholder="Contract Date" name="ContractDate" value={contractDate} min="2000-01-01" max="2030-12-31" onChange={handleChangeContractDate}></input>
                <p> Лист 1</p>
                <label className="label">Дата начала мероприятия</label>
                <input className="input" type="datetime-local" name="StartEvent" min="2000-01-01T00:00" max="2030-12-31T23:59" onChange={handleChangeStartEvent}></input>
                <label className="label">Дата окончания мероприятия</label>
                <input className="input" type="datetime-local" name="EndEvent" min="2000-01-01T00:00" max="2030-12-31T23:59" onChange={handleChangeEndEvent}></input>
                <label className="label">Место проведения</label>
                <input className="input" type="text" placeholder="Место проведения" name="Place" onChange={handleChangeEventPlace}></input>
                <label className="label">Количество персон</label>
                <input className="input" type="text" placeholder="Количество персон" name="Person" onChange={handleChangeCountOfPerson}></input>
                <button onClick={downloadPDF}>Download PDF</button>
            </div> */}
            {/*<div className="preview">*/}
                <div className="list">
                    <div className="logo-container">
                        <img className="logo" src={logo} alt='logo' />
                    </div>
                    <div className="subtitle">
                        <div className="kpNumber">
                            <h1 className="kpNumber_title">
                                <p>{`Коммерческое предложение №  ${kpNumber} от  ${kpDate} `}</p>
                                <p>{`к договору №${contractNumber} от ${contractDate}`}</p>
                                {/* {`Коммерческое предложение №  ${kpNumber} от  ${kpDate} к договору №${contractNumber} от ${contractDate}`} */}
                            </h1>
                        </div>
                        <div className="manager">
                            <div className="manager_infos">
                                <p className="manager_info manager_info__name">{managerName}</p>
                                <p className="manager_info manager_info__job-title">{managerJobTitle}</p>
                                <p className="manager_info manager_info__email">{managerEmail}</p>
                                <p className="manager_info manager_info__tel">{managerTel}</p>
                            </div>
                            <img className="manager_photo" src={managerPhoto} alt="manager photo" />
                        </div>
                    </div>
                </div>
                {/* <div className="list">
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
                </div> */}
            {/*</div>*/}
        </section>

    );

}

export default Header;