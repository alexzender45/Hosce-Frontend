import React from 'react';
import {toast} from "react-toastify"
import SimpleReactValidator from "simple-react-validator";


class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({
            className: 'errorMessage'
        })
        this.state = {
            username: '',
            email: '',
            subjectTopic: '',
            message: '',
            }
            this.handleInput1 = this.handleInput1.bind(this);
            this.handleInput2 = this.handleInput2.bind(this);
            this.handleInput3 = this.handleInput3.bind(this);
            this.handleInput4 = this.handleInput4.bind(this);
        }
        handleInput1(event) {
            this.setState({ username: event.target.value }, () => {
                this.validator.showMessages();
            });
        }
        handleInput2(event) {
            this.setState({ email: event.target.value }, () => {
                this.validator.showMessages();
            });
        }
        handleInput3(event) {
            this.setState({ subjectTopic: event.target.value }, () => {
                this.validator.showMessages();
            });
        }
        handleInput4(event) {
            this.setState({ message: event.target.value }, () => {
                this.validator.showMessages();
            });
        }

    subimtHandler = (e) => {
        e.preventDefault();
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept':'application/json',
        });
            fetch('https://cors-anywhere.herokuapp.com/https://trf-p.herokuapp.com/api/message',{
                headers,
                method: "POST",
                body: JSON.stringify({
                    'username': this.state.username,
                    'email': this.state.email,
                    'subjectTopic': this.state.subjectTopic,
                    'message': this.state.message
                }),
    
            })
                .then(res => res.json())
                .then(json => {
                    if (json.status === 'success') {
                        toast.success('Message Sent Successfully!');
                    } else if (json.status === 'error') {
                        this.validator.showMessages();
                        toast.error(json.error)
                    }else {
                     this.validator.showMessages();
                     toast.error(json.error);
                    }
                })
            e.preventDefault();   
            this.setState({
                username: "",
                email: "",
                subjectTopic: "",
                message: ""
        })
            }
    render(){
        return(
            <form onSubmit={this.subimtHandler} className="form">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input value={this.state.username} onChange={this.handleInput1} name="username" placeholder="User Name"  onBlur={this.handleInput1} required/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <input onChange={this.handleInput2} value={this.state.email} name="email" placeholder="Email"  onBlur={this.handleInput2} required/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <input onChange={this.handleInput3} value={this.state.subjectTopic} name="subjectTopic" placeholder="Subject"  onBlur={this.handleInput3} required/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea name="message" placeholder="Message" onChange={this.handleInput4} value={this.state.message} onBlur={this.handleInput4} required></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            <button type="submit" className="theme-btn">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}
export default  ContactForm;