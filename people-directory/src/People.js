export function People() {
  return (
    <>
      <h1>All the cool people</h1>
      <button onClick={() => fetchPeople(10)}>Fetch 10 people</button>
    </>
  )

  async function fetchPeople(numOfPeople) {
    const url = `https://randomuser.me/api/?results=${numOfPeople}`
    const ppl = await fetch(url)
      .then(res => res.json())
      .then(res => res.results);
    console.log(ppl);
  }
}
