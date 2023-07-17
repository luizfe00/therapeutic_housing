import { LoginForm } from '../components/Login/LoginForm'
import LoginSideSection from '../components/Login/LoginSideSection'

const Login = () => {
  return (
    <div className='flex w-full h-full'>
      <div className='w-2/3 flex justify-center'>
        <LoginForm />
      </div>
      <LoginSideSection />
    </div>
  )
}

export default Login