import styled from '@emotion/styled';
import { StyledForm } from './styles';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import TextArea from '../../atoms/TextArea';
import { H3 } from '../../atoms/Typography';

const CustomInput = styled(Input)({
    width: '100%',
    marginBottom: '1rem',
});

const CustomButton = styled(Button)({
    marginTop: '1rem',
});

const ContactForm = ({ title }) => {

    return (
        <StyledForm>
            <H3>
                {title}
            </H3>
            <CustomInput
                placeholder="Imię i nazwisko"
            />
            <CustomInput
                placeholder="Email"
                type="email"
            />
            <TextArea
                placeholder="Wpisz swoją wiadomość"
            />
            <CustomButton>Wyślij wiadomość</CustomButton>
        </StyledForm>
    );
};

export default ContactForm;
