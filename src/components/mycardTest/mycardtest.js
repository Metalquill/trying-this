import React from 'react'
import chch from '../images/chch.jpg'
import './mycardTest.css'

export default function MyCardTest() {
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
              </ul>
            </div>
          </div>
        </div>
    )
}

// sudo password: cat
