// useEffect() è un hook che implementa nei componenti a funzione
// funzionalità di lifecycle: vi permetterà di utilizzare delle controparti a:
// - componentDidMount
// - componentDidUpdate
// - componentWillUnmount (che non abbiamo visto, di fatto è un lifecycle method
// che viene eseguito un istante prima che un componente venga smontato dal DOM)

import { useEffect, useState } from 'react'

// LE 2 REGOLE DEGLI HOOKS
// 1) I React Hooks possono venire utilizzati SOLAMENTE all'interno di componenti
// React a funzione
// 2) Bisogna utilizzare i React Hooks SEMPRE in modo esplicito all'interno
// del componente a funzione, prima del return, fuori da qualsiasi condizione,
// ciclo, altra funzione etc. etc.

const EffectExample = () => {
  // usiamo useEffect qui!

  // useEffect, a seconda di come lo si utilizza, imita componentDidMount
  // o componentDidUpdate
  const [reservations, setReservations] = useState([])
  const [counter, setCounter] = useState(0)

  // componentDidMount
  useEffect(
    () => {
      // inserisci la tua fetch qui! o il codice che vuoi eseguire
      // nel tuo lifecycle method
      getReservations()
    },
    // come secondo parametro di useEffect dovete indicare un ARRAY di dipendenze
    // tutti gli elementi inseriti in questo array saranno condizioni valide
    // per la RI-ESECUZIONE di questo useEffect.
    []
  )

  // componentDidUpdate che verifica se prevState.counter !== this.state.counter
  useEffect(() => {
    console.log('ho aggiornato counter!')
  }, [counter])

  // indicando un array vuoto come secondo parametro stiamo fornendo ZERO
  // condizioni al nostro useEffect per venire ri-eseguito...
  // --> abbiamo ricreato con useEffect un "componentDidMount"

  // se io NON METTO un array di dipendenze, questo useEffect si comporterà
  // come un componentDidUpdate "senza freni"...
  // questo comporta che questo useEffect verrà re-invocato AD OGNI CAMBIO
  // di stato o AD OGNI nuova prop

  const getReservations = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/reservation'
      )
      if (response.ok) {
        let data = await response.json()
        console.log(data)
        setReservations(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h3>Lifecycle nei componenti a funzione!</h3>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>INCREASE</button>
      <ul>
        {reservations.map((r) => (
          <li key={r._id}>
            {r.name} at {r.dateTime}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EffectExample
