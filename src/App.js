import React from 'react';
import './App.css';
import {navLinks, navToggle} from './random'
import logo from './logo.JPG'
import green from './green.png'


<div className='links'>
<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Lobster&family=Lobster+Two&family=Source+Code+Pro:wght@200&display=swap" rel="stylesheet"></link>
</div>


class Navbar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        
        <button className = 'nav-toggle' aria-label='toggle navigation' onClick={navToggle}>
          <span className='hamburger'></span>
        </button>
        <nav className = 'nav'>
            <ul className = 'nav__list'>
                <li className = 'nav__item'><a href = '#home' className = 'nav__link' onClick = {navLinks}>Home</a></li>
                <li className = 'nav__item'><a href = '#about' className = 'nav__link' onClick = {navLinks}>About Us</a></li>
                <li className = 'nav__item'><a href = '#contact' className = 'nav__link' onClick = {navLinks}>Contact</a></li>
            </ul>
        </nav>
        
        <div className = 'navbarForBigScreens'>
          <div className = 'home'><a href = '#home' className='bigScreen'>Home</a></div>
          <div className = 'about'><a href = '#about' className='bigScreen'>About Us</a></div>
          <div className = 'contact'><a href = '#contact' className='bigScreen'>Contact</a></div>
          
        </div>
      </div>
      
    )
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      name: ''
    }
    this.handleChange= this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState((state)=>{
      return {
        name: state.input,
        input: ''
      }
    })
  }
  render() {
    return (
    <div className='naming'>

    <div className='header'>{this.state.name} Welcome to GreenTee</div>
    <img src = {green} alt='pictureofleaf' className='leaf'></img>
    <img src = {logo} alt='logo' className='logo'></img>
    <input value = {this.state.input} onChange = {this.handleChange}  placeholder='Write your name Here!' className='inputField'/>
    <button onClick = {this.handleSubmit} className='names'> Submit </button>
    </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className = 'mainContent' id = 'home'>
        <div className = 'purpose' id= 'about'>We are GreenTee, three like-minded individuals setting out to reduce clothing wastage. We hope to achieve this through the collection and resale of second-hand clothing. Our goal is to find clothes a second home in a wardrobe, rather than a landfill!</div>
        <div className = 'LearnMore'>Do check out our Carousell account to find out more on what kind of clothes we are selling <a href = 'https://www.carousell.sg/u/green_tee_/'>here</a>.</div>
      </div>
    )
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div className = 'contactSection' id = 'contact'>
        <h2>Contact Us At</h2>
      <div className= 'contactUs'>
        <div className='person1'>
          <p>Name: EcoGreenTee</p>
          <p>Email: ecogreentee@gmail.com</p>
        </div>
      </div>
      </div>
    )
  }
}

class Quote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      randomIndex: null
    }
    this.handleSub = this.handleSub.bind(this)
  }
  handleSub(event) {
    event.preventDefault()
    const newIndex = Math.floor(Math.random()*12)
    this.setState({
      randomIndex: newIndex
    })
  }
  render() {
    const quotes = ['The greatest threat to our planet is the belief that someone else will save it – Robert Swan, Author', 'Often when you think you’re at the end of something, you’re at the beginning of something else – Fred Rogers, Television Personality', 'There is no such thing as ‘away’. When we throw anything away it must go somewhere – Annie Leonard, Proponent of Sustainability','When you put the whole picture together, recycling is the right thing to do – Pam Shoemaker, Author','We cannot solve our problems with the same thinking we used when we created them – Albert Einstein, Physicist','We do not inherit the Earth from our ancestors; we borrow it from our children – Native American Proverb','We never know the worth of water till the well is dry – Thomas Fuller, Historian'
  ,'Recycling, packaging, businesses are changing all of those things because that’s what consumers want - Jerry Greenfield, Co-founder of Ben & Jerry’s Ice Cream','If it can’t be reduced, reused, repaired, rebuilt, refurbished, refinished, resold, recycled, or composted, then it should be restricted, designed or removed from production – Pete Seeger, Folk Singer & Social Activist','We are living on this planet as if we had another one to go to – Terry Swearingen, Nurse & Winner of Goldman Environmental Prize in 1997','Buy less, choose well – Vivienne Westwood, Fashion Designer','At its core, the issue of a clean environment is a matter of public health – Gina McCarthy, Administrator for the U.S. Environmental Protection Agency']
    const individual = quotes[this.state.randomIndex]
    return(
      <div className='quotes'>
        <button onClick = {this.handleSub} className='quote'>Click for Today's quote!</button>
        <h2>"{individual}"</h2>
      </div>
    )
  }
}

export {Navbar, Header, Home, Contact, Quote}