import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import background1 from './image/image1.png';
import background2 from './image/image2.png';


class Topic extends React.Component{
  render(){
    return(
      <div>
      <h4>Sign in now</h4>
      <p className='topic'>Sign in using social media to get quick access</p>
      </div>
    );
  }
}

class SocialBtn extends React.Component{
  render(){
    return(
      <div className='socialBtn'>
            <button className='webBtnf'>f <p className='social'>facebook</p></button>
            <button className='webBtnG'>G+<p className='social'> google</p></button>
       </div>
    );
  }
}

class Username extends React.Component{
  render() {
    return(
      <div className='login'>
      <span>Username</span>
      <input type='text' />
    </div>
    );
  }
}


class Password extends React.Component{
  render(){
    return(
      <div  className='login'>
              <span>Password</span>
              <input type='text' />
            </div>
    );
  }
}


class Remember extends React.Component{
  render(){
    return(
          <div className='checkbox'>
              <input type='checkbox'/> <span>Remember me</span>
          </div>
    );
  }
}

class SigninBtn extends React.Component{
  render(){
    return(
      <div>
         <button className='signBtn'>Signin</button>
      </div>
      );
  }
}

class Forgotten extends React.Component{
  render(){
    return(
      <div className='forgotten'>
            <p>Have not an account yet?</p> 
            <a>Sing up</a>
            </div>
    );
  }
}

class Footer extends React.Component{
  render(){
    return(
      <div>
          <p className='footer'>2019 Master Signin From . All rights reserved | Desing by W3Layouts</p>
      </div>
    );
  }
}
class App extends React.Component {
  render () {
  return <form  style={{
    backgroundImage:`url(${background1})`}} className="backGround1">
        <div 
        style={{backgroundImage:`url(${background2})`}} className="backGround2">
          <p className='title'>MASTER SING IN FORM</p>
          <div className='main'>
            <Topic />
            <SocialBtn/>
           <Username />
           <Password />
           <Remember />
           <SigninBtn />
           <Forgotten />
           
          </div>
          <Footer />
        </div>
    </form>
   
  
}
}
export default App;
