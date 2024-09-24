import React, { useState } from "react";
import './FormRow.css';

function FormRow({
    addRowInPdf,
}) {
    const [count, setCount] = useState(0)
    const [price, setPrice] = useState(0)
    const [obj, setObj] = useState([])

    const addObj = (newObj) => {
        setObj([...obj, newObj])
    }
    // const changeObj = (changedObj) => {}

    const changeProductCount = (e) => {
        if (obj.find(x => x.id === e.target.id)) {
            obj.map(item => {
                if (item.id === e.target.id) {
                    item.countOfProduct = e.target.value
                    return item
                }
            })
        } else {
            addObj({
                id: e.target.id,
                countOfProduct: e.target.value,
            })
        }
        // setCount(e.target.value)
    }
    const changeProductPrice = (e) => {
        if (obj.find(x => x.id === e.target.id)) {
            obj.map(item => {
                if (item.id === e.target.id) {
                    item.priceOfProduct = e.target.value
                    item.total = parseInt(e.target.value) * parseInt(item.countOfProduct)
                    return item
                }
            })
        } else {
            addObj({
                id: e.target.id,
                priceOfProduct: e.target.value,
            })
        }
        // setPrice(e.target.value)
    }
    const changeCompositionProduct = (e) => {
        if (obj.find(x => x.id === e.target.id)) {
            obj.map(item => {
                if (item.id === e.target.id) {
                    item.compositionOfProduct = e.target.value
                    return item
                }
            })
        } else {
            addObj({
                id: e.target.id,
                compositionOfProduct: e.target.value,
            })
        }
    }
    const changeProduct = (e) => {
        if (obj.find(x => x.id === e.target.id)) {
            obj.map(item => {
                if (item.id === e.target.id) {
                    item.product = e.target.value
                    return item
                }
            })
        } else {
            addObj({
                id: e.target.id,
                product: e.target.value,
            })
        }
    }
    const changeProductWeight = (e) => {
        if (obj.find(x => x.id === e.target.id)) {
            obj.map(item => {
                if (item.id === e.target.id) {
                    item.productWeight = e.target.value
                    return item
                }
            })
        } else {
            addObj({
                id: e.target.id,
                productWeight: e.target.value,
            })
        }
    }
    function addRow(e) {
        e.preventDefault()
        addRowInPdf(obj)
        let form = document.getElementById('form');
        form.reset()
        setObj([])
    }

    function changeSelect(e) {

        if (obj.find(x => x.id === e.target.id)) {
            obj.map(item => {
                if (item.id === e.target.id) {
                    item.typeOfProduct = e.target.value
                    return item
                }
            })
        } else {
            addObj({
                id: e.target.id,
                typeOfProduct: e.target.value,
            })
        }

        console.log(e.target.id);
        console.log(e.target.value);
    }

    return (
        <form id="form" className="form__row">
            <table>
                <tbody>
                    <tr className="form__row-column">
                        <td className="form__row-column-name">
                            <input className="input" type="text" id="1" placeholder="Наименование товара" name="product" onChange={changeProduct} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="text" id="1" placeholder="Описание/состав товара" name="composition" onChange={changeCompositionProduct} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="1" placeholder="Вес товара" name="productWeight" onChange={changeProductWeight} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <select className="form__select" name="select1" id="1" onChange={changeSelect}>
                                <option value="">-- Выберите тип --</option>
                                <option value="eat">еда</option>
                                <option value="drink">напитки</option>
                                <option value="drink">организация кейтеринга</option>
                            </select>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="1" placeholder="Количество товара" name="productCount" onChange={changeProductCount} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="1" placeholder="Стоимость товара" name="productPrice" onChange={changeProductPrice} autoComplete="off"></input>
                        </td>
                        {/* <td className="form__row-column-name">
                            <input className="input" type="number" id="1" placeholder="Цена" name="total" value={parseInt(count) * parseInt(price)} disabled={true} autoComplete="off"></input>
                        </td> */}
                    </tr>
                    <tr className="form__row-column">
                        <td className="form__row-column-name">
                            <input className="input" type="text" id="2" placeholder="Наименование товара" name="product" onChange={changeProduct} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="text" id="2" placeholder="Описание/состав товара" name="composition" onChange={changeCompositionProduct} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="2" placeholder="Вес товара" name="productWeight" onChange={changeProductWeight} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <select className="form__select" name="select2" id="2" onChange={changeSelect}>
                                <option value="">-- Выберите тип --</option>
                                <option value="eat">еда</option>
                                <option value="drink">напитки</option>
                                <option value="drink">организация кейтеринга</option>
                            </select>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="2" placeholder="Количество товара" name="productCount" onChange={changeProductCount} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="2" placeholder="Стоимость товара" name="productPrice" onChange={changeProductPrice} autoComplete="off"></input>
                        </td>
                        {/* <td className="form__row-column-name">
                            <input className="input" type="number" id="2" placeholder="Цена" name="total" value={parseInt(count) * parseInt(price)} disabled={true} autoComplete="off"></input>
                        </td> */}
                    </tr>
                    <tr className="form__row-column">
                        <td className="form__row-column-name">
                            <input className="input" type="text" id="3" placeholder="Наименование товара" name="product" onChange={changeProduct} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="text" id="3" placeholder="Описание/состав товара" name="composition" onChange={changeCompositionProduct} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="3" placeholder="Вес товара" name="productWeight" onChange={changeProductWeight} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <select className="form__select" name="select3" id="3" onChange={changeSelect}>
                                <option value="">-- Выберите тип --</option>
                                <option value="eat">еда</option>
                                <option value="drink">напитки</option>
                                <option value="drink">организация кейтеринга</option>
                            </select>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="3" placeholder="Количество товара" name="productCount" onChange={changeProductCount} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="3" placeholder="Стоимость товара" name="productPrice" onChange={changeProductPrice} autoComplete="off"></input>
                        </td>
                        {/* <td className="form__row-column-name">
                            <input className="input" type="number" id="3" placeholder="Цена" name="total" value={parseInt(count) * parseInt(price)} disabled={true} autoComplete="off"></input>
                        </td> */}
                    </tr>
                    <tr className="form__row-column">
                        <td className="form__row-column-name">
                            <input className="input" type="text" id="4" placeholder="Наименование товара" name="product" onChange={changeProduct} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="text" id="4" placeholder="Описание/состав товара" name="composition" onChange={changeCompositionProduct} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="4" placeholder="Вес товара" name="productWeight" onChange={changeProductWeight} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <select className="form__select" name="select4" id="4" onChange={changeSelect}>
                                <option value="">-- Выберите тип --</option>
                                <option value="eat">еда</option>
                                <option value="drink">напитки</option>
                                <option value="drink">организация кейтеринга</option>
                            </select>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="4" placeholder="Количество товара" name="productCount" onChange={changeProductCount} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="4" placeholder="Стоимость товара" name="productPrice" onChange={changeProductPrice} autoComplete="off"></input>
                        </td>
                        {/* <td className="form__row-column-name">
                            <input className="input" type="number" id="4" placeholder="Цена" name="total" value={parseInt(count) * parseInt(price)} disabled={true} autoComplete="off"></input>
                        </td> */}
                    </tr>
                    <tr className="form__row-column">
                        <td className="form__row-column-name">
                            <input className="input" type="text" id="5" placeholder="Наименование товара" name="product" onChange={changeProduct} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="text" id="5" placeholder="Описание/состав товара" name="composition" onChange={changeCompositionProduct} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="5" placeholder="Вес товара" name="productWeight" onChange={changeProductWeight} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <select className="form__select" name="select5" id="5" onChange={changeSelect}>
                                <option value="">-- Выберите тип --</option>
                                <option value="eat">еда</option>
                                <option value="drink">напитки</option>
                                <option value="drink">организация кейтеринга</option>
                            </select>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="5" placeholder="Количество товара" name="productCount" onChange={changeProductCount} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="5" placeholder="Стоимость товара" name="productPrice" onChange={changeProductPrice} autoComplete="off"></input>
                        </td>
                        {/* <td className="form__row-column-name">
                            <input className="input" type="number" id="5" placeholder="Цена" name="total" value={parseInt(count) * parseInt(price)} disabled={true} autoComplete="off"></input>
                        </td> */}
                    </tr>
                    <tr className="form__row-column">
                        <td className="form__row-column-name">
                            <input className="input" type="text" id="6" placeholder="Наименование товара" name="product" onChange={changeProduct} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="text" id="6" placeholder="Описание/состав товара" name="composition" onChange={changeCompositionProduct} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="6" placeholder="Вес товара" name="productWeight" onChange={changeProductWeight} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <select className="form__select" name="select6" id="6" onChange={changeSelect} required={true}>
                                <option value="">-- Выберите тип --</option>
                                <option value="eat">еда</option>
                                <option value="drink">напитки</option>
                                <option value="drink">организация кейтеринга</option>
                            </select>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="6" placeholder="Количество товара" name="productCount" onChange={changeProductCount} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="6" placeholder="Стоимость товара" name="productPrice" onChange={changeProductPrice} autoComplete="off"></input>
                        </td>
                        {/* <td className="form__row-column-name">
                            <input className="input" type="number" id="6" placeholder="Цена" name="total" value={parseInt(count) * parseInt(price)} disabled={true} autoComplete="off"></input>
                        </td> */}
                    </tr>
                    <tr className="form__row-column">
                        <td className="form__row-column-name">
                            <input className="input" type="text" id="7" placeholder="Наименование товара" name="product" onChange={changeProduct} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="text" id="7" placeholder="Описание/состав товара" name="composition" onChange={changeCompositionProduct} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="7" placeholder="Вес товара" name="productWeight" onChange={changeProductWeight} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <select className="form__select" name="select7" id="7" onChange={changeSelect}>
                                <option value="">-- Выберите тип --</option>
                                <option value="eat">еда</option>
                                <option value="drink">напитки</option>
                                <option value="drink">организация кейтеринга</option>
                            </select>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="7" placeholder="Количество товара" name="productCount" onChange={changeProductCount} autoComplete="off"></input>
                        </td>
                        <td className="form__row-column-name">
                            <input className="input" type="number" id="7" placeholder="Стоимость товара" name="productPrice" onChange={changeProductPrice} autoComplete="off"></input>
                        </td>
                        {/* <td className="form__row-column-name">
                            <input className="input" type="number" id="7" placeholder="Цена" name="total" value={parseInt(count) * parseInt(price)} disabled={true} autoComplete="off"></input>
                        </td> */}
                    </tr>
                </tbody>
            </table>
            <button type="submit" onClick={addRow}>Save</button>
        </form>
    );

}

export default FormRow;