import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import { GoogleLogin } from '@react-oauth/google'

export const LoginForm = () => {
  return (
    <div className='p-16 w-1/2'>
      <div className='flex'>
        <div className='rounded-lg h-12 w-12 bg-slate-400' />
        <Typography variant='h6' display='flex' alignItems='center' ml={1}>Residencias Terapeuticas</Typography>
      </div>
      <div className='mt-24'>
        <Typography variant='h3'>Log in</Typography>
        <Typography variant='subtitle2' className='text-gray-500' mt={1}>Bem vindo!</Typography>
      </div>
      <div className='mt-12'>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <TextField type='email' size='small' id="login-email" label="E-mail" variant="outlined" />
              <TextField type='password' size='small' id="login-password" label="Senha" variant="outlined" />
              <Link href='#' variant='body2'>Esqueci minha senha</Link>
              <Button variant='contained'>Entrar</Button>
              <GoogleLogin onSuccess={() => console.log('success')} />
          </Box>
      </div>
      <div className='flex justify-center mt-8'>
        <Typography variant='subtitle2' className='text-gray-500'>Ainda não possui uma conta?
        <Link href='#' variant='subtitle2' ml={1}>Crie aqui</Link></Typography>
      </div>
    </div>
  )
}
