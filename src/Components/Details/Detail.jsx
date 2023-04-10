
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
const matching = item.find(jb => jb.id === parseInt(id))
console.log(matching.jobDescription);
 

    return (
        <div>
            <div>
             <div>
              
              
             </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Detail;