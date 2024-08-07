import React from "react";
import './Row.css';

function Row({ data }) {
    const { countOfProduct, priceOfProduct, product, compositionOfProduct, productWeight } = data
    const totalCostOfProduct = countOfProduct * priceOfProduct

    function GetPrice(price) {
        price += "";
        price = new Array(4 - price.length % 3).join("U") + price;
        return price.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
    }

    return (
        <tr className="table__row">
            <td className="table__line-container">
                <p className="table__line tabel__line_product">{`${product} `}
                    <span className="table__line tabel__line_composition-of-product">{`${compositionOfProduct}`}</span>
                    {` ${productWeight}`}</p>
            </td>
            <td className="row_count">{`${countOfProduct}`}</td>
            <td className="row_count">{`${GetPrice(priceOfProduct)}`}</td>
            <td className="row_count">{`${GetPrice(totalCostOfProduct)}`}</td>
        </tr>
    );

}

export default Row;