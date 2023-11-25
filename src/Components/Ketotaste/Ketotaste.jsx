import React from 'react'
import './Ketotaste.scss'
function Ketotaste() {
    const data= [
        {
  id:0,
  img:"./Images/pasta.png",
  title:"Chorizo Omelette",
  des:"7.6g carbs | 39g protein | 52.5g fat",
  link:"Preview recipe"

    },
    {
        id:2,
        img:"./Images/pasta.png",
        title:"Peanut Butter Pancakes",
        des:"7.6g carbs | 39g protein | 52.5g fat",
        link:"Preview recipe"
      
          },
          {
            id:0,
            img:"./Images/pasta.png",
            title:"Toast With Mozzarella",
            des:"7.6g carbs | 39g protein | 52.5g fat",
            link:"Preview recipe"
          
              }
]
  return (
    <>
     <section id='ketotaste'>
        <div className='keto-container'>
        <div className='keto-header'>
            <h1>A day with KetoFit</h1>
            <p>Lose weight by eating the foods you love.</p>
            <div className='rectangle'>
                <button>Breakfast</button>
                <button>Lunch</button>
                <button>Dinner</button>
                <button>Snacks</button>
            </div>
        </div>
        <div className='cards'>
                {
                    data.map((item)=>{
                        return(
                           <div key={item.id} className='card'>
                            <img src={item.img}/>
                            <h2>{item.title}</h2>
                            <p>{item.des}</p>
                            <a>{item.link}</a>
                            
                           </div> 
                        )
                    })
                }
               

            </div>
        </div>

      
        </section> 
    </>
  )
}

export default Ketotaste
