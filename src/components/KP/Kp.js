import React, { useState } from "react";
import './Kp.css';
import logo from '../../images/logo.png'
import Row from '../Row/Row'
import { rows } from '../../utils/const'

function Kp({ startEvent, endEvent, startTime, endTime, eventPlace, countOfPerson, logisticsCost, cashlessPayments }) {

    function GetPrice(price) {
        price += "";
        price = new Array(4 - price.length % 3).join("U") + price;
        return price.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
    }

    const totalCost = rows.map((item) => {
        return item.countOfProduct * item.priceOfProduct
    })
        .reduce((partialSum, a) => partialSum + a, 0);

    return (
        <div className="list">
            <div className="list__container">
                <img className="list__logo" src={logo} alt="logo" />
                <h2 className="list__title">Фудтраки StreetFOOD</h2>
                <table className="list__table">
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
                    {rows.map((item, index) => (<Row key={index} data={item} />))}
                </table>
            </div>
            <div className="table__subtitle">
                <tr className="table__row">
                    <td className="table__line-container">
                        <p className="table__line tabel__line_product">Повар
                            <span className="table__line tabel__line_composition-of-product"> (по согласованному таймингу)</span>
                        </p>
                    </td>
                    <td className="row_count">4</td>
                    <td className="row_count">{`${GetPrice(10000)}`}</td>
                    <td className="row_count">{`${GetPrice(40000)}`}</td>
                </tr>
                <tr className="table__row">
                    <td className="table__line-container">
                        <p className="table__line tabel__line_product">Фудтрак
                            <span className="table__line tabel__line_composition-of-product"> (5500х2400х3200)</span>
                        </p>
                    </td>
                    <td className="row_count">1</td>
                    <td className="row_count">{`${GetPrice(20000)}`}</td>
                    <td className="row_count">{`${GetPrice(20000)}`}</td>
                </tr>
                <div className="footer">
                    <div className="list__footnotes">
                        <p className="list__footnote">*В стоимость включены все расходники.</p>
                    </div>
                    <div className="list__total">
                        <p className="list__subtotla">{`Сумма: ${GetPrice(totalCost)} руб`}</p>
                        <p className="list__logistic-cost">{`Логистика в пределах МКАД + монтаж / демонтаж: ${GetPrice(logisticsCost)} руб`}</p>
                        <p className="list__totla-cost">{`Итоговая сумма: ${GetPrice(parseInt(totalCost) + parseInt(logisticsCost))} руб`}</p>
                        <p className="list__totla-cost">{`Итого по безналичному расчёту: ${GetPrice((parseInt(totalCost) + parseInt(logisticsCost)) * 1.07)} руб`}</p>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default Kp;