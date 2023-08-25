import { useEffect, useState } from 'react'
import { ChangeEmail } from './ChangeEmail';
export function People() {
  const [people, setPeople] = useState([])
  const [showChangeEmal, setShowChangeEmail] = useState(false);

  //const person = people[0] || { name: {}, location: {}, picture: {} }
  useEffect(() => { fetchPeople(5) }, [])

  return (
    <>
      <h1>All the cool people</h1>
      {/* <button onClick={() => fetchPeople(10)}>Fetch 10 people</button> */}
      <section id="peopleSection">
        {people.map(person => <section key={person.id}>
          <h2>{person.name.first} {person.name.last}</h2>
          <img src={person.picture.large} alt="" />
          <p>Cell: {person.cell}</p>
          <p>Email: {person.email}</p>
          <button onClick={changeEmail}>Change</button>
          {showChangeEmal && <ChangeEmail email={person.email} />}
        </section>)
        }
      </section>
    </>
  )

  function changeEmail() {
    setShowChangeEmail(!showChangeEmal)
  }
  async function fetchPeople(numOfPeople) {
    const url = `https://randomuser.me/api/?results=${numOfPeople}`
    let i = 0;
    const ppl = await fetch(url)
      .then(res => res.json())
      .then(res => res.results)
      .then(people => people.map(p => ({ ...p, id: i++, })));
    console.log(ppl);
    setPeople(ppl)
  }
}
