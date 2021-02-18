import React,{useState,useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import getStorage from './getStorage';

// import {Redirect} from 'react-router-dom';

const Login = ({hit,setHit}) => {
	
	const[logInData,setVal]=useState({username:'',pass:''})
	const[ini, setini] = useState(false)
	
	const onInputChange = (e) => {
		setVal({...logInData,
		   [e.target.name]: e.target.value
		})
		
	 }
	// console.log('loginDATA',logInData)

	const onSubmit = (e) => {
		var email = logInData.username;
		var password= logInData.pass;
	// console.log('EMAIL',email);
	// console.log('PASSs',password);
          e.preventDefault();
		// setVal(!val.loggedIn);
		
		axios
		   .post('http://10.1.30.146:5001/agent/api/v1/login',
		   {
			email,
			password
		   }
		  )
		   .then((res)=>{
		
			//console.log(res);
		var status = res.data.success
		var token = res.data.accessToken;
		
		var user = {'success':status,'accessToken':token,data:res.data.agent};
		
		localStorage.setItem('user', JSON.stringify(user));
                 
		   setini(true);
		
	   })
	}
	

  if(!getStorage() && !ini)
    return(
    
          
  <section className="intro">
       
	   <div className="col-lg-7 col-sm-12 right">
		  
		  <a href={() => false} class="logoMain"><img src="assets/images/dino-chat-logo.png" /></a>
		  
		  <a href={() => false} className="signUpBtn">Signup</a>
		
	  <div className="loginBox">
	  
	  
	  
		  <h5>Log In to Your Dinochat Account!</h5>
		  <p>New to Our Product? <a href={() => false}>Create an Account</a></p>
		  
	  
	  
	   <form action="" method="POST" id="editPoints" onSubmit={onSubmit} >
				   <div className="editPointsForm">
					   <div className="col-md-12">
						   <div className="form-group">
							  <label>Email</label>
							   {/* <input type="text" name="email" className="form-control" value="" placeholder="Email " required/> */}
							   <input  className="form-control" type="text" name="username" placeholder="Username" value={logInData.username} onChange={onInputChange}/>

						   </div>
						  
							<div className="form-group">
							   <label>Password</label>

							   {/* <input type="text" name="password" className="form-control" value="" placeholder="Password" required/> */}
							   <input className="form-control" type="password" name="pass" placeholder="Password" value={logInData.pass} onChange={onInputChange}/>
						   </div>
						   
						   <div className="row">
						   
						   <div className="col-md-6">
							  <div className="form-group">
							   <label className="" className="lableclassName"><input type="checkbox" /> Keep me logged in</label>
							   </div>
						   </div>
						   
						 
						   </div>
						   
						   
						   
						   
						   <div className="form-group">
							   <button type="submit" name="save" className="btn btn-success btn-lg btn-submit">Log in</button>
						   </div>
						   
						   
						   
						   
						   <div className="form-group">
							   <p className="style"> <a href={() => false}>Forget Password</a></p>
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
		 return <Redirect to="/visitors" />
	}
	

export default Login;