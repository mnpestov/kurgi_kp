import React, { useState } from "react";
import './Form.css';
import FormRow from '../FormRow/FormRow'
import logo from '../../images/logo.png'
import managerPhoto from '../../images/managerPhoto.png'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Form({
    downloadPDF,
    handleChangeKpNumber,
    handleChangeKpDate,
    handleChangeContractNumber,
    handleChangeContractDate,
    handleChangeStartEvent,
    handleChangeEndEvent,
    handleChangeEventPlace,
    handleChangeCountOfPerson,
    handleChangeLogisticsCost,
    handleChangeCashlessPayments,
    // handleChangeProductPrice,
    // handleChangeProductCount,
    // handleChangeProduct,
    // handleChangeWeightProduct,
    // handleChangeCompositionProduct,
    addRowInPdf,
}) {

    // const [countOfRow, setCountOfRow] = useState([
    //     {
    //         product: '',
    //         composition: '',
    //         weight: '',
    //         count: '',
    //         price: '',
    //         totalCost: '',
    //     }])
    // const emptyRow = {
    //     product: '',
    //     composition: '',
    //     weight: '',
    //     count: '',
    //     price: '',
    //     totalCost: '',
    // }

    // const handleAddRow = () => {
    //     console.log('add');
    //     setCountOfRow([...countOfRow, emptyRow])
    //     console.log(countOfRow);
    // }

    return (
        <div className="form">
            {/* реквизиты КП */}
            <h2>Реквизиты КП</h2>
            <label className="label">№ КП</label>
            <input className="input" type="text" placeholder="KP number" name="KpNumber" onChange={handleChangeKpNumber}></input>
            <label className="label">дата КП</label>
            <input type="date" id="kpDate" name="KP-date" min="2000-01-01" max="2030-12-31" onChange={handleChangeKpDate} />
            <label className="label">№ договора</label>
            <input className="input" type="text" placeholder="Contract number" name="ContractNumber" onChange={handleChangeContractNumber}></input>
            <label className="label">дата договора</label>
            <input className="input" type="date" placeholder="Contract Date" name="ContractDate" min="2000-01-01" max="2030-12-31" onChange={handleChangeContractDate}></input>
            {/* реквизиты КП */}

            {/* Общая информация по мероприятию */}
            <h2>Общая информация по мероприятию</h2>
            <label className="label">Дата начала мероприятия</label>
            <input className="input" type="datetime-local" name="StartEvent" min="2000-01-01T00:00" max="2030-12-31T23:59" onChange={handleChangeStartEvent}></input>
            <label className="label">Дата окончания мероприятия</label>
            <input className="input" type="datetime-local" name="EndEvent" min="2000-01-01T00:00" max="2030-12-31T23:59" onChange={handleChangeEndEvent}></input>
            <label className="label">Место проведения</label>
            <input className="input" type="text" placeholder="Место проведения" name="Place" onChange={handleChangeEventPlace}></input>
            <label className="label">Количество персон</label>
            <input className="input" type="text" placeholder="Количество персон" name="Person" onChange={handleChangeCountOfPerson}></input>
            {/* Общая информация по мероприятию */}

            {/* Товары */}
            <h2>Товары</h2>
            <p> Лист 1</p>
            {/* {countOfRow.map((item, index) => ( */}
            <FormRow 
            // key={index} 
            // handleChangeProductCount={handleChangeProductCount} 
            // handleChangeProductPrice={handleChangeProductPrice} 
            // handleChangeWeightProduct={handleChangeWeightProduct} 
            // handleChangeCompositionProduct={handleChangeCompositionProduct}
            // handleChangeProduct={handleChangeProduct}
            addRowInPdf={addRowInPdf} />
            {/* ))} */}

            {/* <button onClick={handleAddRow}>Добавить товар</button> */}
            <p> Итого </p>
            <label className="label">Стоимость логистики </label>
            <input className="input" type="text" placeholder="Стоимость логистики" name="Logistic" onChange={handleChangeLogisticsCost}></input>
            <label className="label">Итого по безналичному расчёту</label>
            <input className="input" type="text" placeholder="Итого по безналичному расчёту" name="CashlessPayments" onChange={handleChangeCashlessPayments}></input>

            {/* <p> Лист 2 </p> */}
            
            {/* <button onClick={showRows}>showRows</button> */}
            <button onClick={downloadPDF}>Download PDF</button>
        </div>
    );

}

export default Form;