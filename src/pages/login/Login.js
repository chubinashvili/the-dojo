import { useState } from 'react';

// styles
import './Login.css';

const Login = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }
  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button>login</button>
      {/* <button className='btn' disabled={isPending}>{isPending ? 'loading' : 'Login'}</button>
      {error && <div className='error'>{error}</div>} */}
    </form>
  )
}

export default Login