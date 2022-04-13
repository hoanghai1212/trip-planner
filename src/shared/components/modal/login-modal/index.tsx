import { Button, Group, Modal, TextInput, Title } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import * as Yup from 'yup';

import useAuthAdapter from '@/shared/adapters/useAuthAdapter';
import { LoginDto } from '@/shared/interfaces/services/IAuthService';

const schema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Invalid email'),
  password: Yup.string().required('Password is required'),
});

export interface LoginModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function LoginModal({ opened, onClose }: LoginModalProps) {
  const { login, getProfile } = useAuthAdapter();

  const form = useForm({
    schema: yupResolver(schema),
    initialValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = form.onSubmit(async (values: LoginDto) => {
    await login(values);
    await getProfile();
    onClose();
  });

  return (
    <Modal opened={opened} onClose={onClose} title={<Title order={2}>Login to continue</Title>}>
      <form onSubmit={onSubmit}>
        <TextInput
          required
          type='email'
          label='Email'
          placeholder='Enter your email'
          {...form.getInputProps('email')}
        />
        <TextInput
          required
          type='password'
          label='Password'
          placeholder='Enter your password'
          mt='sm'
          autoComplete='new-password'
          {...form.getInputProps('password')}
        />

        <Group position='right' mt='xl'>
          <Button type='submit'>Log in</Button>
        </Group>
      </form>
    </Modal>
  );
}
