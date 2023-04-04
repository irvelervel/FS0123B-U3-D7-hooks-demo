// gli Hooks in React permettono ai componenti a funzione di utilizzare delle
// funzionalità come lo stato e il lifecycle (che precedentemente erano
// funzionalità solamente presenti nei componenti a classe)

// useState() è un hook che permette di creare individualmente delle variabili
// di stato

// LE 2 REGOLE DEGLI HOOKS
// 1) I React Hooks possono venire utilizzati SOLAMENTE all'interno di componenti
// React a funzione
// 2) Bisogna utilizzare i React Hooks SEMPRE in modo esplicito all'interno
// del componente a funzione, prima del return, fuori da qualsiasi condizione,
// ciclo, altra funzione etc. etc.

import { useState } from 'react' // già presente nella libreria React

const StateExample = () => {
  // ad esempio qui!

  // useState crea una variabile di stato
  // immaginiamo un classico state object:
  //   state = {
  //     selectedPasta: null,
  //     isLoading: true,
  //     counter: 0
  //   }

  //   const stefano = useState()
  //  stefano[0] -> la variabile di stato
  //  stefano[1] -> una funzione capace di aggiornare il valore della variabile di stato
  const [selectedPasta, setSelectedPasta] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('Stefano')

  // ho creato le variabili di stato selectedPasta e isLoading

  const handleIncrease = () => {
    console.log('ciclo for')
    setCounter(counter + 3)
  }

  return (
    <div>
      <h2>Esempio con useState()</h2>
      <p>{counter}</p>
      <button onClick={handleIncrease}>INCREASE</button>
      <button onClick={() => setCounter(counter - 1)}>DECREASE</button>
      {/* <button onClick={() => this.setState({counter: this.state.counter + 1})}></button> */}
      <h3 onClick={() => setName('Domenico')}>{name}</h3>
    </div>
  )
}

export default StateExample
