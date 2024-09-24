import React from "react";
import './Form.css';
import FormRow from '../FormRow/FormRow'

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
    addRowInPdf,
    addList,
}) {

    return (
        <div className="form">
            {/* реквизиты КП */}
            <h2 className="form__title">Реквизиты КП</h2>
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
            <h2 className="form__title">Общая информация по мероприятию</h2>
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
            <h2 className="form__title">Товары</h2>
            <p> Лист 1</p>
            <FormRow
                addRowInPdf={addRowInPdf} />
            <p> Итого </p>
            <label className="label">Сумма</label>
            <input className="input" type="text" placeholder="Сумма" name="sum" disabled={true}></input>
            <fieldset>
                <label className="label">
                    <span>В пределах МКАД?</span>
                </label>
                <label>
                    <input className="" type="radio" name="logistic" value={true} id="true"></input>
                    <span class="radio-title">Да</span>
                </label>
                <label>
                    <input className="" type="radio" name="logistic" value={false} id="false"></input>
                    <span class="radio-title">Нет</span>
                </label>
            </fieldset>
            <label className="label">Стоимость логистики </label>
            <input className="input" type="text" placeholder="Стоимость логистики" name="Logistic" onChange={handleChangeLogisticsCost}></input>
            {/* <label className="label">Итоговая сумма</label>
            <input className="input" type="text" placeholder="Итоговая сумма" name="totalCost" disabled={true}></input>
            <label className="label">Итого по безналичному расчёту</label>
            <input className="input" type="text" placeholder="Итого по безналичному расчёту" name="CashlessPayments" disabled={true}></input> */}

            {/* <p> Лист 2 </p> */}

            <button onClick={addList}>Добавить лист</button>
            <button onClick={downloadPDF}>Download PDF</button>
        </div>
    );

}

export default Form;