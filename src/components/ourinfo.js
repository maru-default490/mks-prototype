import React from 'react';
import Card from './card'

function OurInfo(){
    return(
        <div id="info-wrapper">
            <div className="works">
                <h1>OUR WORKS</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>

            <div className="service">
                <h1>OUR SERVICE</h1>
                <div className="card-list">
                    <Card cardsrc="https://images.unsplash.com/photo-1573844077939-8eabe5be728f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
                    <Card cardsrc="https://images.unsplash.com/photo-1574092403000-ef9c803b84bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
                </div>
            </div>
        </div>
    )
}

export default OurInfo;