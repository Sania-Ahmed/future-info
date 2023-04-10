
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams(); 
  console.log(id)
  const [item , setItem] = useState([])

useEffect(()=>{
  fetch('data.json')
  .then(res => res.json())
  .then(data => setItem(data))
},[id])
 
console.log(item)

    return (
        <div>
            
        </div>
    );
};

export default Detail;