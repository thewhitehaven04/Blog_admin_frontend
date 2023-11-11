import { FormControl } from 'Components/formControlRow'
import { FormWrapper } from 'Components/formWrapper'
import { Form } from 'react-router-dom'

export const LoginForm: React.FC<any> = () => {
  return (
    <FormWrapper title='Login'>
      <Form method='POST' action='login'>
        <FormControl>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' name='username' />
        </FormControl>
        <FormControl>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password'/>
        </FormControl>
        <button type='submit'>Login</button>
      </Form>
    </FormWrapper>
  )
}
