import React from "react";
import './Row.css';

function Row({ data, index, deleteRow, listId }) {
    const { countOfProduct, priceOfProduct, product, compositionOfProduct, productWeight } = data
    const totalCostOfProduct = countOfProduct * priceOfProduct

    function GetPrice(price) {
        price += "";
        price = new Array(4 - price.length % 3).join("U") + price;
        return price.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
    }

    function deleteR() {
        deleteRow(listId, index)
    }

    return (
        <tbody id={`table__row_${index}`} className="table__row-container">
            <tr className="table__row-button">
                <button type="button" className="row-button" onClick={deleteR}>x</button>
            </tr>
            <tr className="table__row">
                <td className="table__line-container">
                    <p className="table__line tabel__line_product">{`${(product) ? product : ' '} `}
                        <span className="table__line tabel__line_composition-of-product">{`${(compositionOfProduct) ? compositionOfProduct : ' '}`}</span>
                        {` ${(productWeight) ? productWeight : ' '}`}</p>
                </td>
                <td className="row_count">{`${(countOfProduct) ? countOfProduct : ''}`}</td>
                <td className="row_count">{`${(priceOfProduct) ? GetPrice(priceOfProduct) : ''}`}</td>
                <td className="row_count">{`${(totalCostOfProduct) ? GetPrice(totalCostOfProduct) : ''}`}</td>
            </tr>
        </tbody>
    );

}

export default Row;