import './App.css';
import React, { useState } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Kp from './components/KP/Kp'


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
  const [kpNumber, setKpNumber] = useState("")
  const [kpDate, setKpDate] = useState(date)
  const [contractNumber, setContractNumber] = useState("")
  const [contractDate, setContractDate] = useState(date)
  const [startEvent, setStartEvent] = useState(date)
  const [endEvent, setEndEvent] = useState(date)
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [eventPlace, setEventPlace] = useState("")
  const [countOfPerson, setCountOfPerson] = useState("")

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
          if (value % 10 == 2 || value % 10 == 3 || value % 10 == 4) {
              if (value % 100 != 12 && value % 100 != 13 && value % 100 != 14) {
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

  const downloadPDF = () => {
    const captureArr = document.querySelectorAll('.list');
    const doc = new jsPDF('l', 'mm', 'a4');

    captureArr.forEach((item, index, arr) => {
      html2canvas(item).then((canvas) => {
        const imgData = canvas.toDataURL('img/png');
        const componentWidth = doc.internal.pageSize.getWidth();
        const componentHeight = doc.internal.pageSize.getHeight();
        console.log(index);
        if (index == 0) {
          doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
        } else {
          doc.addPage('a4', 'l');
          doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
        }
        if (index == arr.length - 1) {
          doc.save('test.pdf')
        }
      })
    })
  }

  return (
    <div className='page'>
      <Form 
      downloadPDF={downloadPDF} 
      handleChangeKpNumber={handleChangeKpNumber}
      handleChangeKpDate={handleChangeKpDate}
      handleChangeContractNumber={handleChangeContractNumber}
      handleChangeContractDate={handleChangeContractDate}
      handleChangeStartEvent={handleChangeStartEvent}
      handleChangeEndEvent={handleChangeEndEvent}
      handleChangeEventPlace={handleChangeEventPlace}
      handleChangeCountOfPerson={handleChangeCountOfPerson}
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
        <Kp
          startEvent={startEvent}
          endEvent={endEvent}
          startTime={startTime}
          endTime={endTime}
          eventPlace={eventPlace}
          countOfPerson={countOfPerson}
        />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
