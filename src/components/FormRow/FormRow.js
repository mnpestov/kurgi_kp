import React from "react";
import './FormRow.css';

function FormRow() {


    return (
        <>
            <label className="label">Наименование товара</label>
            <input className="input" type="text" placeholder="Наименование товара" name="Product"></input>
            <label className="label">Описание/состав товара</label>
            <input className="input" type="text" placeholder="Описание/состав товара" name="Composition"></input>
            <label className="label">Вес товара</label>
            <input className="input" type="text" placeholder="Вес товара" name="ProductWeight"></input>
            <label className="label">Количество товара</label>
            <input className="input" type="text" placeholder="Количество товара" name="ProductCount"></input>
            <label className="label">Стоимость товара</label>
            <input className="input" type="text" placeholder="Стоимость товара" name="ProductPrice"></input>
        </>
    );

}

export default FormRow;