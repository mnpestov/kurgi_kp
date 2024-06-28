import React, { useState } from "react";
import './Header.css';
import logo from '../../images/logo.png'
import managerPhoto from '../../images/managerPhoto.png'

function Header() {
    const current = new Date();
    const date = `${current.getDate()}.${current.getMonth() + 1}.${current.getFullYear()}`;
    const [managerName, setManagerName] = useState('Павел Кург')
    const [managerJobTitle, setManagerJobTitle] = useState('Руководитель проекта')
    const [managerEmail, setManagerEmail] = useState('kurgi-bar@yandex.ru')
    const [managerTel, setManagerTel] = useState('+7 925 516-31-16')
    const [kpNumber, setKpNumber] = useState()
    const [kpDate, setKpDate] = useState(date)
    const [contractNumber, setContractNumber] = useState()
    const [contractDate, setContractDate] = useState()

    const handleChangeKpNumber = ({ target: { value } }) => {
        setKpNumber(value)
    }
    const handleChangeKpDate = ({ target: { value } }) => {
        setKpDate(value)
    }
    const handleChangeContractNumber = ({ target: { value } }) => {
        setContractNumber(value)
    }
    const handleChangeContractDate = ({ target: { value } }) => {
        setContractDate(value)
    }

    return (
        <section className="header">
            <div className="form">
                <label className="label">№ КП</label>
                <input className="input" type="text" placeholder="KP number" name="KpNumber" onChange={handleChangeKpNumber}></input>
                <label className="label">дата КП</label>
                <input className="input" type="data" placeholder="KP Date" name="KpDate" onChange={handleChangeKpDate}></input>
                <label className="label">№ договора</label>
                <input className="input" type="text" placeholder="Contract number" name="ContractNumber" onChange={handleChangeContractNumber}></input>
                <label className="label">дата договора</label>
                <input className="input" type="data" placeholder="Contract Date" name="ContractDate" onChange={handleChangeContractDate}></input>
            </div>
            <div className="preview">
                <img className="logo" src={logo} alt='logo' />
                <div className="subtitle">
                    <div className="kpNumber">
                        <h1 className="kpNumber_title">
                            {`Комерческое предложение №  ${kpNumber} от  ${kpDate} к договору № ${contractNumber} от ${contractDate}`}
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
        </section>

    );

}

export default Header;