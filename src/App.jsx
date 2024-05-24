import { useState } from 'react'
import InputValue from './components/InputValue.jsx'
import DisplayResult from './components/DisplayResult.jsx'

import './App.css'

function App() {
  const [grundWert, SetGrundWert] = useState(1000)
  const [prozentSatz, SetProzentSatz] = useState(7)

  const handleGrundWertChange = (x) => {
    SetGrundWert(x);
  };

  const handleProzentSatzChange = (y) => {
    SetProzentSatz(y);
  };

  return (
    <>
      <div>
        <h1> ProzentWert Berechnung </h1>
        <InputValue
          type = {'G'}
          value = {grundWert}
          onValueChange = {handleGrundWertChange}
        />
        <h5> {grundWert} </h5>
        <InputValue
          type = {'p'}
          value = {prozentSatz}
          onValueChange = {handleProzentSatzChange}
        />
        <h5> {prozentSatz} </h5>
        <DisplayResult
          grundWert = {grundWert}
          prozentSatz = {prozentSatz}

        />
      </div>
    </>
  )
}

export default App
