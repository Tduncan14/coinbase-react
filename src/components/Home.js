import React from 'react';
import styled from 'styled-components';
import {faCheveronCircleRight, FaChevronCircleLeft} from 'react-icons/fa'
import Homee from '../assets/home.png'
import badgePercent from '../assets/badge-percent.png';
import Button from './Button';



const Home = () => {
    





    return(
        <Section className="flex j-center a-center gap">
                <div className="content flex column gap-2">
                    <div className="subtitle">
                        <h3 className="flex a-center gap-1 blue">
                            <span>
                                <img src={badgePercent} />
                            </span>


                            Investment made easy
                        </h3>
                    </div>
                    <div className="title">
                       <h1>The Easies Way to Track Multiple Currencies</h1>
                    </div>
                    <div className="description">
                        <p className="subdue">
                            Market Watchmen allow you to monitor your balances,trade without,limits and earns rewards for specific coins
                        </p>
                    </div>

                    <div className="buttons flex gap-1">
                        <Button text="Try Now" icon={<FaChevronCircleLeft/>} />
                        <Button text="how It works?"  subduedButton/>
                    </div>
                </div>
                
                <div className="image"><img src={Homee}  alt="home" className="half-width"  /></div>
        </Section>
    )
}



const Section= styled.section `






`

export default Home