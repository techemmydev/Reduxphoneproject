/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './App.css'
import {  setIndex, setData } from './Redux/slice/counterSlice'



function App() {
  const selectData = useSelector((state)=> state.phone_accessories)
  const dispatch = useDispatch()
  
  
  async function fetchData(){
    try {
      const response = await fetch(`https://dummyjson.com/products/${selectData.index}`);
      const data = await response.json()
      dispatch(setData(data))   

    } catch (error) {
       console.log("error code:", error)
    }
  }

  useEffect(()=> {   
    fetchData() 
  }, [selectData.index])

  function nextButton(){
    dispatch(setIndex(selectData.index + 1))
  }
  
  
  function previousButton(){
    const prevIndex = selectData.index - 1
    prevIndex >= 0 ? dispatch(setIndex(prevIndex)): null
    
  }
  // console.log(selectData)

  

  return (
    <>
      <div>
      {selectData.data && selectData.data.images && selectData.data.images.length > 0 && (
      <div>
        <h1>{selectData.data.title}</h1>
        <img src={selectData.data.images[0]} alt="product images" />
        <p>Price: ${selectData.data.price}</p>
        <p>Description: {selectData.data.description}</p>

      </div>
      )}
      
      <div style={{display: "flex", justifyContent:"space-between"}}>
        <button onClick={nextButton}>next</button>
        <button onClick={previousButton}>previous</button>
      </div>
      

          
        
       
      </div>
    </>
  )
}

export default App
