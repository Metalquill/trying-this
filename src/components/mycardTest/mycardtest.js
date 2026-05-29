import React from 'react'
import chch from '../images/chch.jpg'
import './mycardTest.css'
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';



export default function MyCardTest() {

  // ChartJS.register(ArcElement, Tooltip, Legend);

  // const doughnutChart = () => {
    
  // }

  // const data = {
  //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //   datasets: [
  //     {
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)',
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)',
  //       ],
  //       circumference: 180,
  //       rotation: 270,
  //       borderWidth: 1,
  //     },
  //   ],
  // };

    return (
             <div className='new-card-container'>
          <div className='card'>
            {/* <img className='image' src={chch} />
            <div class="content">
              <h5 className='myh5'>Christchurch</h5>
              <p>Lorem ipsum</p>
              <a className='read-more'> Read more </a>
              <div className='details'>
                <span className='item'>
                  <span className='material...'>sell</span>
                <em>from $120</em>
                </span>
                <span className='item'>
                  <span className='material...'>travel</span>
                  <em>Chch</em>
                </span>
              </div>
              <div className='my-buttons'>
                <button className='primary-btn'>Search</button>
                <button className='icon-btn'>
                  <span className='material...'>favourite</span>
                </button>
              </div>
            </div> */}
            <div className="content">
              <ul>
                <li><a href='https://ucdigitalsms.atlassian.net/wiki/spaces/SFP/pages/3265560588/UC+Git+Tooling' target="_blank" rel="noreferrer">Git Tooling</a></li>
                <li><a href="https://ucdigitalsms.atlassian.net/wiki/spaces/SFP/pages/2279702618/Git+Gud+-+A+little+help+on+using+Git+in+Student+First" target="_blank" rel="noreferrer">Git Gud</a></li>
                <li><a href='https://ucdigitalsms.atlassian.net/wiki/spaces/SFP/pages/2045214731/Developer+Portal' target="_blank" rel="noreferrer">Developer portal</a></li>
                <li><a href='https://ucdigitalsms.atlassian.net/wiki/spaces/SFP/pages/2388492302/System+outage+and+banners' target="_blank" rel="noreferrer">Banners</a></li>
                <li><a href='https://ucdigitalsms.atlassian.net/wiki/spaces/SFP/pages/2422276097/The+ultimate+guide+and+glossary+of+acronyms' target="_blank" rel="noreferrer">Glossary</a></li>
                <li><a href='https://ucdigitalsms.atlassian.net/wiki/spaces/SFP/pages/2618229350/The+Course+Data+Loader' target='_blank' rel='noreferrer'>Course loader</a></li>
              </ul>
            </div>
          </div>
        </div>
    )
}

