import React from 'react'
import './HomeCard.css'
import feve1 from './formal event1.jpg';
import feve2 from './formal event2.jpg';
import feve3 from './formal event3.jpg';
import feve4 from './formal event4.jpg';
import feve5 from './formal event5.jpg';
import feve6 from './formal event6.jpg';
import feve7 from './formal event7.jpg';
import feve8 from './formal event8.jpg';

export default function HomeCard() {
  return (
    <div class="BM2container">
        <div className='BM2_Title'>EVENTS & MEETS</div>
        <div class="row">
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src={feve1} alt=""/>
                    </div>
                    <div class="card-desc">
                        <h3>Heading1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                            voluptas totam</p>
                            <a href="/" class="btn-card">Read</a>   
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src={feve2} alt=""/>
                    </div>
                    <div class="card-desc">
                        <h3>Heading1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                            voluptas totam</p>
                            <a href="/" class="btn-card">Read</a>   
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src={feve3} alt=""/>
                    </div>
                    <div class="card-desc">
                        <h3>Heading1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                            voluptas totam</p>
                            <a href="/" class="btn-card">Read</a>   
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src={feve4} alt=""/>
                    </div>
                    <div class="card-desc">
                        <h3>Heading1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                            voluptas totam</p>
                            <a href="/" class="btn-card">Read</a>   
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src={feve5} alt=""/>
                    </div>
                    <div class="card-desc">
                        <h3>Heading2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                            voluptas totam</p>
                            <a href="/" class="btn-card">Read</a>   
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src={feve6} alt=""/>
                    </div>
                    <div class="card-desc">
                        <h3>Heading2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                            voluptas totam</p>
                            <a href="/" class="btn-card">Read</a>   
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src={feve7} alt=""/>
                    </div>
                    <div class="card-desc">
                        <h3>Heading2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                            voluptas totam</p>
                            <a href="/" class="btn-card">Read</a>   
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card-content">
                    <div class="card-img">
                        <img src={feve8} alt=""/>
                    </div>
                    <div class="card-desc">
                        <h3>Heading2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                            voluptas totam</p>
                            <a href="/" class="btn-card">Read</a>   
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}