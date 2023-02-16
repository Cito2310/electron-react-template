function App() {
  const onClickBasicIpcOn = () => {
    // @ts-ignore
    window.electronAPI.basicOnIpc("hello world")
  }

  const onClickBasicIpcHandle = async() => {
    // @ts-ignore
    console.log(await window.electronAPI.basicHandleIpc("hello world"))
  }

  return (
    <div className="App">
      <button onClick={onClickBasicIpcOn}>test basic ipc on</button>
      <button onClick={onClickBasicIpcHandle}>test basic ipc handle</button>
    </div>
  );
}

export default App;
