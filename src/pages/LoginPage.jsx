import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm'

export const LoginPage = () => {
  const navigate  = useNavigate()



  const { name, email, password, onInputChange, onResetForm } =
		useForm({
			name: '',
			email: '',
			password: '',
		});

    const onLogin  = e =>{
      e.preventDefault()

      navigate("/Dashboard", {
        replace: true ,
        state: {
          logged: true ,
          name,
          email,
          password
        }
      })
      onResetForm();
    }
    return (
      <>
        <div className='wrapper'>
         <form onSubmit={onLogin} >
          <h1>Iniciar sesion</h1>
        <div className='input-group'>
					<input
						type='email'
						name='email'
						id='email'
						value={email}
						onChange={onInputChange}
						required
						autoComplete='off'
            placeholder='Email'
					/>
				
				</div>
        <div className='input-group'>
					<input
						type='password'
						name='password'
						id='password'
						value={password}
						onChange={onInputChange}
						required
						autoComplete='off'
            placeholder='Password'
					/>
				
				</div>
        <button className='btn'>Entre pue</button>
       </form>
      
      </div>
    </>
    );
}
