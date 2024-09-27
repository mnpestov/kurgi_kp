import React from "react";
import './Row.css';

function Row({ data, index, deleteRow, listId, GetPrice }) {
    const { countOfProduct, priceOfProduct, product, composition, productWeight, typeOfProduct } = data
    const totalCostOfProduct = countOfProduct * priceOfProduct
    const getProductWeightWithMeasure = (productWeight, typeOfProduct) => {
        if (!productWeight) {
            return productWeight
        }
        if (typeOfProduct === 'eat') {
            productWeight = productWeight + 'гр'
            return productWeight
        } else if (typeOfProduct === 'drink') {
            productWeight = productWeight + 'мл'
            return productWeight
        }
    }

    const productWeightWithMeasure = getProductWeightWithMeasure(productWeight, typeOfProduct)

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
                        <span className="table__line tabel__line_composition-of-product">{`${(composition) ? composition : ' '}`}</span>
                        <span className="table__line tabel__line_weight-of-product">{` ${(productWeight) ? productWeightWithMeasure : ' '}`}</span>
                    </p>
                </td>
                <td className="row_count">{`${(countOfProduct) ? countOfProduct : ''}`}</td>
                <td className="row_count">{`${(priceOfProduct) ? GetPrice(priceOfProduct) : ''}`}</td>
                <td className="row_count">{`${(totalCostOfProduct) ? GetPrice(totalCostOfProduct) : ''}`}</td>
            </tr>
        </tbody>
    );

}

export default Row;