import React from "react";
import './Kp.css';
import logo from '../../images/logo.png'
import Row from '../Row/Row'

function Kp({ startEvent, endEvent, startTime, endTime, eventPlace, countOfPerson, logisticsCost, list, deleteRow, id, deleteList }) {

    function GetPrice(price) {
        price += "";
        price = new Array(4 - price.length % 3).join("U") + price;
        return price.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
    }

    const totalCost = list.rows.map((item) => {
        return item.countOfProduct * item.priceOfProduct
    })
        .reduce((partialSum, a) => partialSum + a, 0);
    const deleteL = () => {
        console.log(id);
        deleteList(id)
    }

    return (
        <>
            <div className="list">
                <div className="list__container">
                    <img className="list__logo" src={logo} alt="logo" />
                    <h2 className="list__title">Фудтраки StreetFOOD</h2>
                    <table className="list__table">
                        <thead>
                            <tr className="table__row table__titles">
                                <th className="table__title list__subtitle-container">
                                    <p className="list__subtitle list__subtitle_place">{`${startEvent}-${endEvent} место: ${eventPlace};`}</p>
                                    <p className="list__subtitle list__subtitle_person">{`кол-во персон: ${countOfPerson}`}</p>
                                    <p className="list__subtitle list__subtitle_time">{`время мероприятия: ${startTime.slice(-6)} (${startEvent.slice(0, 5)}) -${endTime.slice(-6)} (${endEvent.slice(0, 5)}) `}</p>
                                </th>
                                <th className="table__title">
                                    Количество, шт
                                </th>
                                <th className="table__title">
                                    Стоимость
                                </th>
                                <th className="table__title">
                                    Цена, руб
                                </th>
                            </tr>
                        </thead>
                        {list.rows.map((item, index) => (<Row key={index} data={item} index={index} deleteRow={deleteRow} listId={list.id} />))}
                    </table>
                </div>
                <div className="table__subtitle">
                    <div className="footer">
                        <div className="list__footnotes">
                            <p className="list__footnote">*В стоимость включены все расходники.</p>
                        </div>
                        <div className="list__total">
                            <p className="list__subtotla">{`Сумма: ${GetPrice(totalCost)} руб`}</p>
                            <p className="list__logistic-cost">{`Логистика в пределах МКАД + монтаж / демонтаж: ${GetPrice(logisticsCost)} руб`}</p>
                            <p className="list__totla-cost">{`Итоговая сумма: ${GetPrice(parseInt(totalCost) + parseInt(logisticsCost))} руб`}</p>
                            <p className="list__totla-cost">{`Итого по безналичному расчёту: ${GetPrice(Math.round((parseInt(totalCost) + parseInt(logisticsCost)) * 1.07))} руб`}</p>

                        </div>
                    </div>
                </div>
            </div>
            <button type="button button__list_delete" className="list-button" onClick={deleteL}>x</button>
        </>
    );

}

export default Kp;