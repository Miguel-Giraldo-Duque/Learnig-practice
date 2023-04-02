import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm'

export const RegisterPage = () => {
  const navigate = useNavigate()


  const { name, email, password, onInputChange, onResetForm } =
		useForm({
			name: '',
			email: '',
			password: '',
		});

    const onRegister = e =>{
        e.preventDefault()

        navigate(`/dashboard`, {
          replace: true ,
          state: {
            logged: true ,
            name,
			email, 
			password
          }
        })
        
    }
    return (
        <div className='wrapper'>
          <h1>Registrarse</h1>
        <form onSubmit={onRegister} >
        <div className='input-group'>
					<input
						type='text'
						name='name'
						id='name'
						value={name}
						onChange={onInputChange}
						required
						autoComplete='off'
            placeholder = "User"
					/>

				</div>
        <div className='input-group'>
					<input
						type='email'
						name='email'
						id='email'
						value={email}
						onChange={onInputChange}
						required
						autoComplete='off'
            placeholder = "Email"
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
            placeholder = "Password"
					/>
				
				</div>
        <button>Entre pue</button>
       </form>
      
      </div>
    );
}
