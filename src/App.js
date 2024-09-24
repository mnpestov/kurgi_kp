import './App.css';
import React, { useState } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Kp from './components/KP/Kp'
import {lists} from './utils/const'


function App() {

  const current = new Date();
  const options = {
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    timeZoneName: 'long'
  }
  const date = current.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const [managerName, setManagerName] = useState('Павел Кург')
  const [managerJobTitle, setManagerJobTitle] = useState('Руководитель проекта')
  const [managerEmail, setManagerEmail] = useState('kurgi-bar@yandex.ru')
  const [managerTel, setManagerTel] = useState('+7 925 516-31-16')
  const [kpNumber, setKpNumber] = useState("111")
  const [kpDate, setKpDate] = useState(date)
  const [contractNumber, setContractNumber] = useState("111")
  const [contractDate, setContractDate] = useState(date)
  const [startEvent, setStartEvent] = useState(date)
  const [endEvent, setEndEvent] = useState(date)
  const [startTime, setStartTime] = useState(date)
  const [endTime, setEndTime] = useState(date)
  const [eventPlace, setEventPlace] = useState("МО Тюллип инн Софрино")
  const [countOfPerson, setCountOfPerson] = useState("600")
  const [logisticsCost, setLogisticsCost] = useState("10000")
  const [rows, setRows] = useState([])
  const [listsKp, setListsKp] = useState(lists)

  const handleChangeKpNumber = ({ target: { value } }) => {
    setKpNumber(value)
  }
  const handleChangeKpDate = ({ target: { value } }) => {
    const enteredDate = new Date(value)
    setKpDate(enteredDate.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }))
  }
  const handleChangeContractNumber = ({ target: { value } }) => {
    setContractNumber(value)
  }
  const handleChangeContractDate = ({ target: { value } }) => {
    const enteredDate = new Date(value)
    setContractDate(enteredDate.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }))
  }
  const handleChangeStartEvent = ({ target: { value } }) => {
    const enteredDate = new Date(value)
    setStartEvent(enteredDate.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }))
    setStartTime(enteredDate.toLocaleDateString('ru-RU', {
      hour: 'numeric',
      minute: 'numeric'
    }))
  }
  const handleChangeEndEvent = ({ target: { value } }) => {
    const enteredDate = new Date(value)
    setEndEvent(enteredDate.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }))
    setEndTime(enteredDate.toLocaleDateString('ru-RU', {
      hour: 'numeric',
      minute: 'numeric'
    }))
  }
  const handleChangeEventPlace = ({ target: { value } }) => {
    setEventPlace(value)
  }
  const handleChangeCountOfPerson = ({ target: { value } }) => {
    const declination = (value) => {
      if (value % 10 === 2 || value % 10 === 3 || value % 10 === 4) {
        if (value % 100 !== 12 && value % 100 !== 13 && value % 100 !== 14) {
          return `${value} человека`
        }
        else {
          return `${value} человек`
        }
      } else {
        return `${value} человек`
      }
    }
    setCountOfPerson(declination(value))
  }
  const handleChangeLogisticsCost = ({ target: { value } }) => {
    setLogisticsCost(value)
  }

  const downloadPDF = () => {
    const captureArr = document.querySelectorAll('.list');
    const doc = new jsPDF('l', 'mm', 'a4');

    captureArr.forEach((item, index, arr) => {
      html2canvas(item).then((canvas) => {
        const imgData = canvas.toDataURL('img/png');
        const componentWidth = 297;
        const componentHeight = 210;
        console.log(index);
        if (index === 0) {
          doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
          console.log(componentWidth, componentHeight);
        } else {
          doc.addPage('a4', 'l');
          doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
        }
        if (index === arr.length - 1) {
          doc.save('test.pdf')
        }
      })
    })
  }

  const exportPDF = async () => {
    const lists = document.querySelectorAll(".list"); // Выбираем все элементы с классом list
    const pdf = new jsPDF("landscape", "mm", "a4"); // Создаем экземпляр jsPDF с альбомной ориентацией

    for (let i = 0; i < lists.length; i++) {
        const list = lists[i];

        // Преобразуем элемент в изображение с помощью html2canvas
        const canvas = await html2canvas(list, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");

        // Вычисляем размеры для картинки, чтобы она уместилась на листе A4
        const imgWidth = 297; // Ширина страницы A4 в мм (landscape)
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        if (i !== 0) {
            pdf.addPage(); // Добавляем новую страницу для каждого элемента, начиная со второй
        }

        // Добавляем изображение на текущую страницу
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    }

    // Сохраняем PDF
    pdf.save("lists.pdf");
};

  const addRowInPdf = (newObj) => {
    setRows(newObj);
    setListsKp([...listsKp, {id: listsKp.length+1, rows: newObj}])
  }
  const addList = () => {
    console.log('add list');
    
  }

  function deleteRow(listId, rowIndex) {
    setListsKp((prevListsKp) => {
      return prevListsKp.map((list) => {
        if (list.id === listId) {
          // Создаем новый массив rows без элемента по указанному индексу
          const updatedRows = list.rows.filter((_, index) => index !== rowIndex);
          
          // Возвращаем обновленный объект списка с новыми rows
          return {
            ...list,
            rows: updatedRows,
          };
        }
        return list; // Возвращаем другие списки без изменений
      });
    });
}

function deleteList(id) {
  setListsKp(listsKp.filter(obj=>obj.id !== id))
  // let list = listsKp.find(obj=>obj.id === id)
  // console.log(list);
}

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
        addList={addList}
      />
      <div className="preview">
        <Header
          managerName={managerName}
          managerJobTitle={managerJobTitle}
          managerEmail={managerEmail}
          managerTel={managerTel}
          kpNumber={kpNumber}
          kpDate={kpDate}
          contractNumber={contractNumber}
          contractDate={contractDate}
        />
        {/* <Kp
          startEvent={startEvent}
          endEvent={endEvent}
          startTime={startTime}
          endTime={endTime}
          eventPlace={eventPlace}
          countOfPerson={countOfPerson}
          logisticsCost={logisticsCost}
          rows={rows}
        /> */}
        {listsKp.map((item) => (<Kp
          key={item.id}
          startEvent={startEvent}
          endEvent={endEvent}
          startTime={startTime}
          endTime={endTime}
          eventPlace={eventPlace}
          countOfPerson={countOfPerson}
          logisticsCost={logisticsCost}
          list={item}
          deleteRow={deleteRow}
          id={item.id}
          deleteList={deleteList} />))}
        <Footer lists={listsKp} countOfPerson={countOfPerson}/>
      </div>
    </div>
  );
}

export default App;
