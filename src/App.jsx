import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./card/Card";

function App() {
  const arr = JSON.parse(localStorage.getItem("tasks")) || [];

  // const [arr2,setArr2]=useState(arr);

  // const [ar2,setAr2]=useState([]);

  const [ta1, setTa1] = useState(arr);

  const handlesubmit = (e) => {
    e.preventDefault();
    // const ar=JSON.parse(localStorage.getItem("tasks")) || [];

    // setArr2([...ar,e.target.elements.addtodo.value]);

    // localStorage.setItem("tasks",JSON.stringify(arr2));
    setTa1([...ta1, e.target.elements.addtodo.value]);
    e.target.elements.addtodo.value = "";
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(ta1));
  }, [ta1]);

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="addtodo"
          className="input input-accent"
          id="addtodo"
        />
        <br />
        <br />
        <button type="submit">Add todo</button>
      </form>
      <br />
      <div className="grid grid-cols-3 gap-2">
        {ta1?.map((e, i) => {
          return <div key={i} className="card card-dash shadow-2xl bg-sky-300 w-96">
              <div className="card-body">
                {e}
                <button
                  onClick={() => {
                    setTa1(
                      ta1.filter((el, i2) => {
                        return i != i2;
                      })
                    );
                  }}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
            </div>
          
        })}
      </div>
    </>
  );
}

export default App;
