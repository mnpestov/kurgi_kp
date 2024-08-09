import React, { useState } from "react";
import './FormRow.css';

function FormRow({
    // handleChangeProductCount,
    // handleChangeProductPrice,
    // handleChangeWeightProduct,
    // handleChangeCompositionProduct,
    // handleChangeProduct,
    addRowInPdf,
}) {
    const [count, setCount] = useState(0)
    const [price, setPrice] = useState(0)
    const [obj, setObj] = useState({
        product: '',
        compositionOfProduct: '',
        productWeight: '',
        countOfProduct: '',
        priceOfProduct: ''
    })

    const changeProductCount = (e) => {
        setObj({ ...obj, countOfProduct: e.target.value })
        setCount(e.target.value)
        // handleChangeProductCount(e.target.value)
    }
    const changeProductPrice = (e) => {
        setObj({ ...obj, priceOfProduct: e.target.value })
        setPrice(e.target.value)
        // handleChangeProductPrice(e.target.value)
    }
    const changeCompositionProduct = (e) => {
        setObj({ ...obj, compositionOfProduct: e.target.value })
        // handleChangeCompositionProduct(e.target.value)
    }
    const changeProduct = (e) => {
        setObj({ ...obj, product: e.target.value })
        // handleChangeProduct(e.target.value)
    }
    const changeProductWeight = (e) => {
        setObj({ ...obj, productWeight: e.target.value })
        // handleChangeWeightProduct(e.target.value)
    }
    function addRow() {
        addRowInPdf(obj)
        let form = document.getElementById('form');
        form.reset()
        setObj({
            product: '',
            compositionOfProduct: '',
            productWeight: '',
            countOfProduct: '',
            priceOfProduct: ''
        })
    }

    return (
        <form id="form" className="form__row">
            <div>
                <label className="label">Наименование товара
                    <input className="input" type="text" placeholder="Наименование товара" name="product" onChange={changeProduct}></input>
                </label>
                <label className="label">Описание/состав товара
                    <input className="input" type="text" placeholder="Описание/состав товара" name="composition" onChange={changeCompositionProduct}></input>
                </label>
                <label className="label">Вес товара
                    <input className="input" type="text" placeholder="Вес товара" name="productWeight" onChange={changeProductWeight}></input>
                </label>
            </div>
            <div>
                <label className="label">Количество товара
                    <input className="input" type="text" placeholder="Количество товара" name="productCount" onChange={changeProductCount}></input>
                </label>
                <label className="label">Стоимость товара
                    <input className="input" type="text" placeholder="Стоимость товара" name="productPrice" onChange={changeProductPrice}></input>
                </label>
                <label className="label">Цена
                    <input className="input" type="text" placeholder="Цена" name="total" value={parseInt(count) * parseInt(price)} disabled={true}></input>
                </label>
            </div>
            <button type="button" onClick={addRow}>Save</button>
        </form>
    );

}

export default FormRow;