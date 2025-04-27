
import { useEffect } from 'react'
import './App.css'
import Menu from './Components/Menu'
import { useData, useComponents } from './utils/zustand'
import Loading from './Components/Loading'


function App() {
  const { data, getData, updateUser, load, SetLoading, RemoveLoading } = useData();
  const { comp } = useComponents();

  useEffect(() => {
    SetLoading();
    getData();
  }, []);
  useEffect(() => {
   
    if (data) {
      RemoveLoading();
    }else{
      SetLoading();
    };
  }, [data]);

  return (
    <>

      {load ? <Loading /> :
        <div style={{ display: "flex" }}>
          <Menu />
          <div style={{ width: "85%", height: "100vh", backgroundColor: "#f0f2f5", float: "right" }}>
            {data && comp.component()}
          </div>
        </div>
      }




    </>
  )
}

export default App
