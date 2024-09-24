import React from "react";
import './Footer.css';
import logo from '../../images/logo.png'

function Footer({ lists, countOfPerson }) {

    function GetPrice(price) {
        price += "";
        price = new Array(4 - price.length % 3).join("U") + price;
        return price.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
    }

    const getTotalWeightAndPriceByType = (lists) => {
        if (!Array.isArray(lists) || lists.length === 0) {
            return {}; // Возвращаем пустой объект, если массив пуст или не массив
          }
        return lists.reduce((acc, list) => {
            list.rows.forEach((row) => {
                const { typeOfProduct, productWeight, countOfProduct, priceOfProduct } = row;
                const totalWeight = productWeight * countOfProduct; // Общий вес для одной позиции
                const totalPrice = priceOfProduct * countOfProduct; // Итоговая цена для одной позиции

                if (!acc[typeOfProduct]) {
                    acc[typeOfProduct] = { totalWeight: 0, totalPrice: 0 }; // Инициализация, если тип еще не был учтен
                }

                // Суммируем вес и цену для каждого типа продукта
                acc[typeOfProduct].totalWeight += totalWeight;
                acc[typeOfProduct].totalPrice += totalPrice;
            });

            return acc;
        }, {});
    };

    const totalWeightAndPrice = getTotalWeightAndPriceByType(lists);
    const totalAllCash = totalWeightAndPrice.eat.totalPrice + totalWeightAndPrice.drink.totalPrice + totalWeightAndPrice.organisation.totalPrice
    const totalAll = Math.round((totalWeightAndPrice.eat.totalPrice + totalWeightAndPrice.drink.totalPrice + totalWeightAndPrice.organisation.totalPrice)*1.07)

    return (
        <section className="footer">
            <div className="list">
                <div className="footer__logo-container">
                    <img className="logo" src={logo} alt='logo' />
                </div>
                <div className="">
                    <p className="table__line tabel__line_product">
                        Выход на персону:
                        <span className="tabel__line tabel__line_composition-of-product"> еда / напитки - {Math.round(totalWeightAndPrice.eat.totalWeight / countOfPerson)}гр / {Math.round(totalWeightAndPrice.drink.totalWeight / countOfPerson)}мл</span>


                    </p>
                    <div className="calculation">
                        <span>Расчёт: </span>
                        <ul className="totalKp">
                            <li className="total">{(totalWeightAndPrice.eat.totalPrice) ? GetPrice(totalWeightAndPrice.eat.totalPrice) : ''} руб</li>
                            <li className="total">{(totalWeightAndPrice.drink.totalPrice) ? GetPrice(totalWeightAndPrice.drink.totalPrice) : ''} руб</li>
                            <li className="total">{(totalWeightAndPrice.organisation.totalPrice) ? GetPrice(totalWeightAndPrice.organisation.totalPrice) : ''} руб</li>
                        </ul>
                    </div>
                    <div className="totalCount">
                        <span className="totalAlCash">{(totalAllCash) ? GetPrice(totalAllCash) : ''} руб</span>
                        <span className="totalAl">{(totalAll) ? GetPrice(totalAll) : ''} руб</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;