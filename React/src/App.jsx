import React from 'react'
import { useState,useRef,useEffect } from 'react'

const App = () => {
  let inputRef = useRef()
  const [inputValue, setInputValue] = useState("")
  let showingTodo = ()=>{
    let value = inputRef.current.value.trim();
    if (value === "") return;
    setInputValue(value);
    inputRef.current.value = "";

  }
  useEffect(() => {
    if (inputValue.trim() === "") return; // Prevent empty todo from being added
    let newElement = document.createElement("div");
    newElement.classList = "border-2 border-white text-white p-2 mt-2";
    let textDiv = document.createElement("div");
    textDiv.textContent = inputValue;
  
    let editBtn = document.createElement("button");
    editBtn.textContent = "✍";
    editBtn.className = "bg-white mx-2 p-1 rounded-full";
    editBtn.addEventListener("click", () => {
      let newValue = prompt("Enter the new value");
      if (newValue) textDiv.textContent = newValue;
    });
  
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.className = "bg-white mx-2 p-1 rounded-full";
    deleteBtn.addEventListener("click", () => {
      newElement.remove();
    });
  
    newElement.appendChild(textDiv);
    newElement.appendChild(editBtn);
    newElement.appendChild(deleteBtn);
  
    document.getElementById("mainDiv").appendChild(newElement);
   
  }, [inputValue])
  
  let update = ()=>{
    let value = prompt("Enter the value")
    setInputValue(value)
  }
document.body.className = "bg-gray-800"
  return (
    <div className='flex flex-col items-center p-5'>
      <h1 className='text-[35px] text-white font-bold'>Todo</h1>
      <div><input type="text" ref={inputRef} className='bg-black text-white rounded-4xl p-2'/>
      <button onClick={showingTodo} className='bg-white p-2 rounded-4xl '> Add Todo</button></div>
      <div></div>
      <div id="mainDiv">

      </div>
      
    </div>
  )
}

export default App
