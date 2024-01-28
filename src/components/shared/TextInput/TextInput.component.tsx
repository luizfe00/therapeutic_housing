import { TextFieldProps } from '@mui/material/TextField';
import { TextInputComponent, TextInputContainer } from './TextInput.style';

const TextInput = (props: TextFieldProps) => {
  return (
    <TextInputContainer>
      <TextInputComponent
        {...props}
        InputProps={{
          ...props.InputProps,
          style: { ...props.InputProps?.style, borderRadius: '0.5rem' },
        }}
      />
    </TextInputContainer>
  );
};

export default TextInput;
