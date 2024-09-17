import React from 'react'
import './MenuChart.css';
import {data} from '../restApi.json'

export default function MenuChart() {
  return (

    <div className='body'>
    
    {/* <!-- Breakfast items -->  */}

    <h2>Breakfast Items</h2>
    <div className='category'>
        {
    data[0].menuItem.map(element => (
                        <div className="food-item" key={element.id}>
                                <img src={element.image} alt={element.name} style={{width: '20vw', height: '30vh'}}/>
                                <h3>{element.name}</h3>
                                <button>{element.designation}</button>
                        </div>
))}
     </div>
    <h2>Lunch Items</h2>
    <div class="category">
        {/* <!-- Lunch items --> */}
        
        {
            data[0].LunchItem.map(element => (
                <div className='food-item' key={element.id}>
                    <img src={element.image} alt={element.name} style={{width: '20vw',height: '30vh'}} />
                    <h3>{element.name}</h3>
                    <button>{element.designation}</button>
                </div>
            ))
        }

        {/* <!-- Add more items in api as needed  --> */}
    </div>   

    <h2>Dinner Items</h2>
    <div class="category">
        {/* <!-- Dinner items --> */}
        {
            data[0].DinnerItem.map(element => (
                <div className='food-item' key={element.id}>
                    <img src={element.image} alt={element.name} style={{width: '20vw',height: '30vh'}} />
                    <h3>{element.name}</h3>
                    <button>{element.designation}</button>
                </div>
            ))
        }
    </div>
    </div>
  )
}
