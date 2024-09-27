import React, { useState, useCallback } from "react";
import './Form.css';
import FormRow from '../FormRow/FormRow';

function Form({
  downloadPDF,
  handleChangeKpNumber,
  handleChangeKpDate,
  handleChangeContractNumber,
  handleChangeContractDate,
  handleChangeStartEvent,
  handleChangeEndEvent,
  handleChangeEventPlace,
  handleChangeCountOfPerson,
  handleChangeLogisticsCost,
  addRowInPdf,
  handleLogisticsChange,
  handleManagerChange,
  formData,
}) {

  const [products, setProducts] = useState([]);

  // Универсальный обработчик изменений ввода
  const handleInputChange = useCallback((e) => {
    const { id, name, value } = e.target;
    setProducts(prevProducts => {
      const existingProduct = prevProducts.find(product => product.id === id);
      if (existingProduct) {
        const updatedProduct = { ...existingProduct, [name]: value };
        // Если изменяется количество или цена, пересчитываем итог
        if (name === 'countOfProduct' || name === 'priceOfProduct') {
          const count = parseInt(updatedProduct.countOfProduct, 10) || 0;
          const price = parseInt(updatedProduct.priceOfProduct, 10) || 0;
          updatedProduct.total = count * price;
        }
        return prevProducts.map(product => product.id === id ? updatedProduct : product);
      } else {
        // Создание нового товара
        const newProduct = { id, [name]: value };
        if (name === 'countOfProduct' || name === 'priceOfProduct') {
          newProduct.total = 0;
        }
        return [...prevProducts, newProduct];
      }
    });
  }, []);

  // Добавление новой строки товара
  const handleAddProduct = useCallback(() => {
    setProducts(prevProducts => [...prevProducts, { id: Date.now().toString() }]);
  }, []);

  // Удаление строки товара
  const handleRemoveProduct = useCallback((id) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  }, []);

  // Сохранение строк товаров в списке КП
  const addRow = useCallback((e) => {
    e.preventDefault();
    addRowInPdf(products);
    e.target.reset();
    setProducts([]);
  }, [products, addRowInPdf]);

  return (
    <div className="form">
      <fieldset className="form__details">
        {/* Реквизиты КП */}
        <div className="form__detail">
          <h2 className="form__title">Реквизиты КП</h2>
          <label htmlFor="kpNumber" className="label">№ КП</label>
          <input 
            id="kpNumber"
            className="input" 
            type="text" 
            placeholder="KP number" 
            name="kpNumber" 
            onChange={handleChangeKpNumber}
            required
          />
          <label htmlFor="kpDate" className="label">Дата КП</label>
          <input 
            id="kpDate"
            type="date" 
            name="kpDate" 
            min="2000-01-01" 
            max="2030-12-31" 
            onChange={handleChangeKpDate} 
            required
          />
          <label htmlFor="contractNumber" className="label">№ договора</label>
          <input 
            id="contractNumber"
            className="input" 
            type="text" 
            placeholder="Contract number" 
            name="contractNumber" 
            onChange={handleChangeContractNumber}
            required
          />
          <label htmlFor="contractDate" className="label">Дата договора</label>
          <input 
            id="contractDate"
            className="input" 
            type="date" 
            name="contractDate" 
            min="2000-01-01" 
            max="2030-12-31" 
            onChange={handleChangeContractDate}
            required
          />
        </div>
        {/* Реквизиты КП */}

        {/* Общая информация по мероприятию */}
        <div className="form__detail">
          <h2 className="form__title">Общая информация по мероприятию</h2>
          <label htmlFor="startEvent" className="label">Дата начала мероприятия</label>
          <input 
            id="startEvent"
            className="input" 
            type="datetime-local" 
            name="startEvent" 
            min="2000-01-01T00:00" 
            max="2030-12-31T23:59" 
            onChange={handleChangeStartEvent}
            required
          />
          <label htmlFor="endEvent" className="label">Дата окончания мероприятия</label>
          <input 
            id="endEvent"
            className="input" 
            type="datetime-local" 
            name="endEvent" 
            min="2000-01-01T00:00" 
            max="2030-12-31T23:59" 
            onChange={handleChangeEndEvent}
            required
          />
          <label htmlFor="eventPlace" className="label">Место проведения</label>
          <input 
            id="eventPlace"
            className="input" 
            type="text" 
            placeholder="Место проведения" 
            name="eventPlace" 
            onChange={handleChangeEventPlace}
            required
          />
          <label htmlFor="countOfPerson" className="label">Количество персон</label>
          <input 
            id="countOfPerson"
            className="input" 
            type="text" 
            placeholder="Количество персон" 
            name="countOfPerson" 
            onChange={handleChangeCountOfPerson}
            required
          />
        </div>
        {/* Общая информация по мероприятию */}

        {/* Доставка */}
        <div className="form__detail">
          <h2 className="form__title">Доставка</h2>
          <span className="label">В пределах МКАД?</span>
          <div className="radio-group">
            <label htmlFor="logisticTrue">
              <input 
                id="logisticTrue"
                type="radio" 
                name="logistic" 
                value="true" 
                onChange={handleLogisticsChange}
                required
              />
              <span className="radio-title">Да</span>
            </label>
            <label htmlFor="logisticFalse">
              <input 
                id="logisticFalse"
                type="radio" 
                name="logistic" 
                value="false" 
                onChange={handleLogisticsChange}
                required
              />
              <span className="radio-title">Нет</span>
            </label>
          </div>
          <label htmlFor="logisticsCost" className="label">Стоимость логистики</label>
          <input 
            id="logisticsCost"
            className="input" 
            type="number" 
            placeholder="Стоимость логистики" 
            name="logisticsCost" 
            onChange={handleChangeLogisticsCost}
            min="0"
            required
          />
        </div>
        {/* Доставка */}

        {/* Менеджер */}
        <div className="form__detail">
          <h2 className="form__title">Менеджер</h2>
          <div className="radio-group">
            <label htmlFor="managerTrue">
              <input 
                id="managerTrue"
                type="radio" 
                name="manager" 
                value="true" 
                onChange={handleManagerChange}
                required
              />
              <span className="radio-title">Петр</span>
            </label>
            <label htmlFor="managerFalse">
              <input 
                id="managerFalse"
                type="radio" 
                name="manager" 
                value="false" 
                onChange={handleManagerChange}
                required
              />
              <span className="radio-title">Павел</span>
            </label>
          </div>
        </div>
        {/* Менеджер */}

      </fieldset>
      {/* Товары */}
      <fieldset className="form__products">
        <h2 className="form__title">Товары</h2>
        <form id="form" className="form__row" onSubmit={addRow}>
          <table>
            <thead>
              <tr>
                <th>Наименование товара</th>
                <th>Описание/состав товара</th>
                <th>Вес товара</th>
                <th>Тип товара</th>
                <th>Количество товара</th>
                <th>Стоимость товара</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <FormRow
                  key={product.id}
                  id={product.id}
                  number={index + 1}
                  handleInputChange={handleInputChange}
                  handleRemoveProduct={handleRemoveProduct}
                />
              ))}
            </tbody>
          </table>
          <button type="button" onClick={handleAddProduct} className="add-product-button">Добавить товар</button>
          <button type="submit" className="save-button">Сохранить</button>
        </form>
      </fieldset>
      <button onClick={downloadPDF} className="download-button">Скачать PDF</button>
    </div>
  );
}

export default React.memo(Form);
