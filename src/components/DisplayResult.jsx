export default function DisplayResult({grundWert, prozentSatz}) {

  const prozentWert = (grundWert / 100) * prozentSatz
  return (
    <div>
      <h5>  </h5>
    <p>{grundWert} / 100 * {prozentSatz}% = </p>
    <h1>{prozentWert} </h1>
    </div>
  )
}