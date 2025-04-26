
import { useEffect } from 'react'
import './App.css'
import Menu from './Components/Menu'
import SetEdit from './Components/SetEdit'
import useData from './utils/zustand'
import Loading from './Components/Loading'
import  {Profile}  from './Components/Profile'

function App() {
  const { data, getData, updateUser, load, SetLoading, RemoveLoading } = useData()

  useEffect(() => {
    getData();
    
  }, []);
  useEffect(() => {
    setTimeout(() => {
      RemoveLoading();
    }, 2000);
  }, [data]);

  return (
    <>

      {load ? <Loading /> :
        <div style={{ display: "flex" }}>
          <Menu />
          <div style={{ width: "85%", height: "100vh", backgroundColor: "#f0f2f5", float: "right" }}>
            {data && <Profile />}
          </div>
        </div>
      }




    </>
  )
}

export default App
