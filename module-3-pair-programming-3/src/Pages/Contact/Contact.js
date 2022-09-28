import React, {Component} from 'react';

class Contact extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <body id="contact">
            <main id="contact-us">
                <h2>Contact Us</h2>
                <form action="/api/contact" method="POST">
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div>
                        <label for="howDidYouHear">How did you hear of us?</label>
                        <select name="howDidYouHear" id="howDidYouHear">
                            <option value="PopsicleMonthly">Popsicle Monthly</option>
                            <option value="StickOverflow">Stick Overflow</option>
                        </select>
                    </div>
                    <div>
                        <label for="color">What color is your favorite popsicle?</label>
                        <input type="color" name="color" id="color" value="#00afef"/>
                    </div>
                    <div>
                        <label for="comments">Please let us know any comments you have:</label>
                        <textarea name="comments" id="comments" cols="60" rows="10"></textarea>
                    </div>
                    <div>
                        <input id="submit-button" type="submit" value="Submit"/>
                    </div>
                </form>
            </main>
        </body>
        )
    }
}

export default Contact;