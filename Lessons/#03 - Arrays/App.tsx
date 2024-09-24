function App() {
  //[: 'type'[]] Sintax 1 to create a TS array 
  let names: string[] = ["Alice", "Bob", "Charlie"];
  
  //[: Array<'type'>] Sintax 2 to create a TS array 
  let ids: Array<number> = [10,20,30];

  return (
    <>
      <h1>1 + 1 = {addFunction(1,1)}</h1>
      <h2>2 + 2 = {addArrowFunction(2,2)}</h2>
      <h2>3 + 3 = {addArrFun(3,3)}</h2>
    </>
  )
}

export default App
