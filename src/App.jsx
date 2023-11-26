
import { useState } from 'react'
//

function App() {
  const [isTermIsAccepted, setIsTermIsAccepted] = useState(false)

  return (
    <div>
      <CGUcheckbox checked={isTermIsAccepted} onCheck={setIsTermIsAccepted} />
      <button disabled={!isTermIsAccepted}>Envoyer le formulaire</button>
    </div >
  );
}
function CGUcheckbox({ checked, onCheck }) {
  return (<div>
    <label>
      <input type="checkbox" checked={checked} onChange={(e) => onCheck(e.target.checked)} />
      Accepter les conditions d'utilisation
    </label>
  </div>)
}
export default App;

