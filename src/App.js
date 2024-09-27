import './App.css';
import React, { useReducer, useCallback, Suspense, lazy } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Kp from './components/KP/Kp';
import { lists } from './utils/const';
import PavelPhoto from './images/PavelPhoto.png';
import PeterPhoto from './images/PeterPhoto.jpg';

// Ленивое загрузка компонента Footer
const Footer = lazy(() => import('./components/Footer/Footer'));

const initialState = {
  formData: {
    managerName: 'Павел Кург',
    managerJobTitle: 'Руководитель проекта',
    managerEmail: 'kurgi-bar@yandex.ru',
    managerTel: '+7 925 516-31-16',
    managerPhoto: PavelPhoto,
    kpNumber: '111',
    kpDate: new Date().toLocaleDateString('ru-RU'),
    contractNumber: '111',
    contractDate: new Date().toLocaleDateString('ru-RU'),
    startEvent: new Date().toLocaleDateString('ru-RU'),
    endEvent: new Date().toLocaleDateString('ru-RU'),
    startTime: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    endTime: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    eventPlace: 'МО Тюллип инн Софрино',
    countOfPerson: '600 человек',
    logisticsCost: '10000',
    isWithinMkad: null
  },
  listsKp: lists,
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload
        }
      };
    case 'ADD_ROW_IN_PDF':
      return {
        ...state,
        listsKp: [...state.listsKp, { id: state.listsKp.length + 1, rows: action.payload }]
      };
    case 'DELETE_ROW':
      return {
        ...state,
        listsKp: state.listsKp.map(list => {
          if (list.id === action.payload.listId) {
            const updatedRows = list.rows.filter((_, index) => index !== action.payload.rowIndex);
            return { ...list, rows: updatedRows };
          }
          return list;
        })
      };
    case 'DELETE_LIST':
      return {
        ...state,
        listsKp: state.listsKp.filter(obj => obj.id !== action.payload.id)
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { formData, listsKp } = state;

  // Форматирование цены
  const GetPrice = useCallback((price) => {
    return `${Math.round(price).toLocaleString('ru-RU')} руб`;
  }, []);

  // Обработчик смены менеджера
  const handleManagerChange = useCallback(({ target: { value } }) => {
    const manager = value === 'true'
      ? {
          managerPhoto: PeterPhoto,
          managerName: 'Петр Кург',
          managerTel: '+7 926 966-88-71',
          managerJobTitle: 'Руководитель проекта',
          managerEmail: 'kurgi-bar@yandex.ru'
        }
      : {
          managerPhoto: PavelPhoto,
          managerName: 'Павел Кург',
          managerTel: '+7 925 516-31-16',
          managerJobTitle: 'Руководитель проекта',
          managerEmail: 'kurgi-bar@yandex.ru'
        };

    dispatch({ type: 'UPDATE_FORM_DATA', payload: manager });
  }, []);

  // Обработчик смены логистики
  const handleLogisticsChange = useCallback(({ target: { value } }) => {
    dispatch({ type: 'UPDATE_FORM_DATA', payload: { isWithinMkad: value === "true" } });
  }, []);

  // Форматирование даты
  const formatDate = useCallback((value, options = { year: 'numeric', month: 'numeric', day: 'numeric' }) => {
    const enteredDate = new Date(value);
    return enteredDate.toLocaleDateString('ru-RU', options);
  }, []);

  // Корректное склонение слова "человек"
  const getDeclination = useCallback((num) => {
    const n = parseInt(num, 10);
    const remainder10 = n % 10;
    const remainder100 = n % 100;

    if (remainder100 >= 11 && remainder100 <= 14) {
      return `${n} человек`;
    }

    if (remainder10 === 1) {
      return `${n} человек`;
    }

    if (remainder10 >= 2 && remainder10 <= 4) {
      return `${n} человека`;
    }

    return `${n} человек`;
  }, []);

  // Обработчики изменений полей формы
  const handleChangeKpNumber = useCallback(({ target: { value } }) => {
    dispatch({ type: 'UPDATE_FORM_DATA', payload: { kpNumber: value } });
  }, []);

  const handleChangeKpDate = useCallback(({ target: { value } }) => {
    const formattedDate = formatDate(value);
    dispatch({ type: 'UPDATE_FORM_DATA', payload: { kpDate: formattedDate } });
  }, [formatDate]);

  const handleChangeContractNumber = useCallback(({ target: { value } }) => {
    dispatch({ type: 'UPDATE_FORM_DATA', payload: { contractNumber: value } });
  }, []);

  const handleChangeContractDate = useCallback(({ target: { value } }) => {
    const formattedDate = formatDate(value);
    dispatch({ type: 'UPDATE_FORM_DATA', payload: { contractDate: formattedDate } });
  }, [formatDate]);

  const handleChangeStartEvent = useCallback(({ target: { value } }) => {
    const dateObj = new Date(value);
    const formattedDate = dateObj.toLocaleDateString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' });
    const formattedTime = dateObj.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    dispatch({ type: 'UPDATE_FORM_DATA', payload: { startEvent: formattedDate, startTime: formattedTime } });
  }, []);

  const handleChangeEndEvent = useCallback(({ target: { value } }) => {
    const dateObj = new Date(value);
    const formattedDate = dateObj.toLocaleDateString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' });
    const formattedTime = dateObj.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    dispatch({ type: 'UPDATE_FORM_DATA', payload: { endEvent: formattedDate, endTime: formattedTime } });
  }, []);

  const handleChangeEventPlace = useCallback(({ target: { value } }) => {
    dispatch({ type: 'UPDATE_FORM_DATA', payload: { eventPlace: value } });
  }, []);

  const handleChangeCountOfPerson = useCallback(({ target: { value } }) => {
    const declinated = getDeclination(value);
    dispatch({ type: 'UPDATE_FORM_DATA', payload: { countOfPerson: declinated } });
  }, [getDeclination]);

  const handleChangeLogisticsCost = useCallback(({ target: { value } }) => {
    dispatch({ type: 'UPDATE_FORM_DATA', payload: { logisticsCost: value } });
  }, []);

  // Функция экспорта в PDF
  const exportPDF = useCallback(async () => {
    const pdf = new jsPDF("landscape", "mm", "a4");
    const lists = document.querySelectorAll(".list");

    for (const [index, list] of lists.entries()) {
      const canvas = await html2canvas(list, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 297; // Ширина A4 в мм (альбомная ориентация)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      if (index !== 0) pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    }

    pdf.save("lists.pdf");
  }, []);

  // Функции добавления и удаления строк/списков
  const addRowInPdf = useCallback((newObj) => {
    dispatch({ type: 'ADD_ROW_IN_PDF', payload: newObj });
  }, []);

  const deleteRow = useCallback((listId, rowIndex) => {
    dispatch({ type: 'DELETE_ROW', payload: { listId, rowIndex } });
  }, []);

  const deleteList = useCallback((id) => {
    dispatch({ type: 'DELETE_LIST', payload: { id } });
  }, []);

  return (
    <div className='page'>
      <Form
        downloadPDF={exportPDF}
        handleChangeKpNumber={handleChangeKpNumber}
        handleChangeKpDate={handleChangeKpDate}
        handleChangeContractNumber={handleChangeContractNumber}
        handleChangeContractDate={handleChangeContractDate}
        handleChangeStartEvent={handleChangeStartEvent}
        handleChangeEndEvent={handleChangeEndEvent}
        handleChangeEventPlace={handleChangeEventPlace}
        handleChangeCountOfPerson={handleChangeCountOfPerson}
        handleChangeLogisticsCost={handleChangeLogisticsCost}
        addRowInPdf={addRowInPdf}
        handleLogisticsChange={handleLogisticsChange}
        handleManagerChange={handleManagerChange}
        formData={formData}
      />
      <div className="preview">
        <Header formData={formData} />
        {listsKp.map((item) => (
          <Kp
            key={item.id}
            startEvent={formData.startEvent}
            endEvent={formData.endEvent}
            startTime={formData.startTime}
            endTime={formData.endTime}
            eventPlace={formData.eventPlace}
            countOfPerson={formData.countOfPerson}
            logisticsCost={formData.logisticsCost}
            isWithinMkad={formData.isWithinMkad}
            list={item}
            deleteRow={deleteRow}
            id={item.id}
            deleteList={deleteList}
            GetPrice={GetPrice}
          />
        ))}
        <Suspense fallback={<div>Загрузка Footer...</div>}>
          <Footer lists={listsKp} countOfPerson={formData.countOfPerson} GetPrice={GetPrice} />
        </Suspense>
      </div>
    </div>
  );
}

export default React.memo(App);
