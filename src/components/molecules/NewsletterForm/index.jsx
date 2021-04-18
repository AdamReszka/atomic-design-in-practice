import styled from '@emotion/styled';

import { StyledForm } from './styles';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

const CustomInput = styled(Input)({
    marginRight: '1.5rem',
    width: '24rem',
});

const NewsletterForm = () => {
    return (
        <StyledForm>
            <CustomInput placeholder="adres email"/>
            <Button>
                Zapisz się
            </Button>
        </StyledForm>
    );
};

export default NewsletterForm;
