import React,{useState,useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import getStorage from './getStorage';
import ReactDOM from "react-dom"
// import {Redirect} from 'react-router-dom';

const Login = () => {
	
	const[logInData,setVal]=useState({username:'',pass:''})
	const[ini, setini] = useState(false)
	const [bgpic,setBgpic] =useState('')

	useEffect(()=>{
		let elem = document.querySelector('body');
		elem.classList.add( 'bgPic');
		setBgpic('bgPic')
		return ()=>{
			let elem = document.querySelector('body');
			elem.classList.remove( 'bgPic');
			setBgpic('')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
		},[])

	const onInputChange = (e) => {
		setVal({...logInData,
		   [e.target.name]: e.target.value
		})
		
	 }


	const onSubmit = (e) => {
		var email = logInData.username;
		var password= logInData.pass;

          e.preventDefault();
	
		
		axios
		   .post('http://173.254.252.226:5001/agent/api/v1/login',
		   {
			email,
			password
		   }
		  )
		   .then((res)=>{
		
		//  console.log("response",res);
		var status = res.data.success
		var token = res.data.accessToken;
		
		var user = {'success':status,'accessToken':token,data:res.data.agent};
		
		localStorage.setItem('user', JSON.stringify(user));
                 
		   setini(true);
		   let elem = document.querySelector('body');
			elem.classList.remove( 'bgPic');
		
	   }).catch((err)=>{
		  let errorThr = document.querySelector(".error")
		  errorThr.classList.add("alert","alert-danger")
		  errorThr.innerHTML = "Email/Password Incorrect"
	   })
	}
	

  if(!getStorage() && !ini)
    return(
    
          
  <section className="intro">
       
	   <div className="col-lg-7 col-sm-12 right">
		  
		  <a href={() => false} className="logoMain"><img src="assets/images/dino-chat-logo.png" alt="" /></a>
		  
		  {/* <a href={() => false} className="signUpBtn">Signup</a> */}
		
	  <div className="loginBox">
	  
	  
	  
		  <h5>Log In to Your Dinochat Account!</h5>
		  {/* <p>New to Our Product? <a href={() => false}>Create an Account</a></p> */}
		  
	  
	  
	   <form action="" method="POST" id="editPoints" onSubmit={onSubmit} >
				   <div className="editPointsForm">
					   <div className="col-md-12">
						   <div className="form-group">
							  <label>Email</label>
							 
							   <input  className="form-control" type="text" name="username" placeholder="Username" value={logInData.username} onChange={onInputChange}/>

						   </div>
						  
							<div className="form-group">
							   <label>Password</label>

							
							   <input className="form-control" type="password" name="pass" placeholder="Password" value={logInData.pass} onChange={onInputChange}/>
						   </div>
						   
						   <div className="row">
						   
						   <div className="col-md-6">
							  <div className="form-group">
							   <label  className="lableclassName"><input type="checkbox" /> Keep me logged in</label>
							   </div>
						   </div>
						   
						 
						   </div>
						   
						   
						   
						   
						   <div className="form-group">
							   <button type="submit" name="save" className="btn btn-success btn-lg btn-submit">Log in</button>
						   </div>
						   <div className="error "></div>
						   
						   
						   
						   <div className="form-group">
							   {/* <p className="style"> <a href={() => false}>Forget Password</a></p> */}
						   </div>
				
						   
					   </div>
				   </div>

	
		   </form>

	  </div>

	  
	 </div>


	 <div className="col-lg-5 col-sm-12 left">
	   
	 </div>

	 
   

 </section>
   
	)
	else
		 return <Redirect to="/dashboard" />
	}
	

export default Login;