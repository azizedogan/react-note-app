import { useState, useEffect } from "react";

function App(props) {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState(props.text);

  useEffect(() =>{
    console.log("count");
  }, [count]); 

  useEffect(() =>{
    console.log("componentDidMount");
  }, []);

  useEffect(() =>{
    console.log("componentDidMount, componentDidUpdate");
  });

  return (
    <>
      <p>Butona { count } kez tıkladınız.</p>
      <p>Girilen text: { text }</p>
      <button onClick={ () => setCount(count - 1)}>- 1</button>
      <button onClick={ () => setCount(props.count)}>reset</button>
      <button onClick={ () => setCount(count + 1)}>+ 1</button>
      <input type="text" value={ text } onChange={ (e) => setText(e.target.value)}/>
    </>
  );
}

App.defaultProps = {
  count: 5,
  title: ''
}

export default App;