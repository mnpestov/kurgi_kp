import React from "react";
import './Kp.css';
import logo from '../../images/logo.png';
import Row from '../Row/Row';

function Kp({
    startEvent,
    endEvent,
    eventPlace,
    countOfPerson,
    list,
    deleteRow,
    id,
    deleteList,
    GetPrice,
    listTitle,
    startTimeStartEvent,
    endTimeStartEvent,
    startTimeEndEvent,
    endTimeEndEvent,
    dispatch
}) {

    const totalCost = list.rows.map((item) => {
        return item.countOfProduct * item.priceOfProduct;
    }).reduce((partialSum, a) => partialSum + a, 0);

    const handleDeleteList = () => {
        deleteList(id);
    };

    return (
        <>
            <div className="list">
                <div className="list__container">
                    <img className="list__logo" src={logo} alt="logo" />
                    <h2 className="list__title">{listTitle}</h2>
                    <table className="list__table">
                        <thead>
                            <tr className="table__row table__titles">
                                <th className="table__title list__subtitle-container">
                                    <p className="list__subtitle list__subtitle_place">место: <span className="list__subtitle_text">{`${eventPlace}`}</span></p>
                                    <p className="list__subtitle list__subtitle_person">кол-во персон: <span className="list__subtitle_text">{`${countOfPerson}`}</span></p>
                                    <div className="list__subtitle_time">
                                        <p className="list__subtitle list__subtitle_time_text">время мероприятия: </p>
                                        <p>
                                            <span className="list__subtitle_time_text list__subtitle_text">{`${startEvent.slice(0, 5)} (${startTimeStartEvent} - ${endTimeStartEvent})`}</span>
                                            <span className="list__subtitle_time_text list__subtitle_text"> {`–`} </span>
                                            <span className="list__subtitle_time_text list__subtitle_text">{`${endEvent.slice(0, 5)} (${startTimeEndEvent} - ${endTimeEndEvent})`}</span>
                                        </p>
                                    </div>
                                </th>
                                <th className="table__title">Количество, шт</th>
                                <th className="table__title">Стоимость</th>
                                <th className="table__title">Цена, руб</th>
                            </tr>
                        </thead>
                        {list.rows.map((item, index) => (
                            <Row key={index} data={item} index={index} deleteRow={deleteRow} listId={list.id} dispatch={dispatch} />
                        ))}
                    </table>
                </div>
                <div className="table__subtitle">
                    <div className="footer">
                        <div className="list__footnotes">
                            <p className="list__footnote">*В стоимость включены все расходники.</p>
                        </div>
                        <div className="list__total">
                            <p className="list__totla-cost">{`Итоговая сумма: ${GetPrice(parseInt(totalCost))}`}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="list-button button__list_delete remove-button" onClick={handleDeleteList}>Удалить лист</button>
        </>
    );
}

export default Kp;