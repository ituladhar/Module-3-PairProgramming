import React, { Component } from 'react';


class HomePage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <body id="home">
            <main id="homepage">
                <img src="./images/popsicle-rainbow.jpg"/>

                <div class="content">
                    <h2>Did You Know?</h2>
                    <ul>
                        <li>The earliest known popsicles date as far back as 1872. Back then, a popsicle was called a <em>Hokey-Pokey</em>.</li>
                        <li>Popsicles are also known as freezer pops, ice lollies, and ice pops.</li>
                        <li>The world's largest popsicle was made in 1997 and was 21 feet tall.</li>
                        <li>Popsicles have become so popular that a popular arts and craft item is called a popsicle stick.</li>
                    </ul>
                </div>
            </main>

            <section id="race">
                <img src="./images/blue-pop.png" alt="National Popsicles Day" id="race-image"/>
                <h2>Popsicle Race</h2>
                <p>Don't forget to sign up for the race! Each attendee will receive their own box of popsicles when they reach the end.</p>
            </section>
            <section id="store">
                <h2>Get refreshed this Summer!</h2>
                <p>Mark this very special occasion of the launch of Tech Elevator Popsicles by buying a gift from our stunning array of items, shipped directly from Cleveland.</p>
                <a href="#" class="store-button center">Store</a>
            </section>
        </body>
        )
    }

}

export default HomePage;