import React from 'react'
import { Avatar } from '@material-ui/core';

export default function SideLeftMenu(){
  const [block, setBlock] = React.useState(false)
  const showSideLeft = () => {
     setBlock(!block)
    document.getElementById("sidebar-left").style.left = !block ? "0px" : "-400px"
    document.getElementById("shadow-div").style.display = !block ? "block" : "none"
  }
  React.useEffect(()=> {
    document.getElementById("shadow-div").onclick = () => {
      setBlock(!block)
      document.getElementById("sidebar-left").style.left = "-400px"
      document.getElementById("shadow-div").style.display =  "none"
      }
      
    document.querySelectorAll("#options").forEach(item=> item.onclick = () =>{
      setBlock(!block)
      document.getElementById("sidebar-left").style.left = "-400px"
      document.getElementById("shadow-div").style.display =  "none"
    })
    },[block])
  return<>
    <Avatar onClick={showSideLeft} id="icon"/>
  </>
}