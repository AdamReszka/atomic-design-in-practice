import PageHeader from '../../molecules/PageHeader';
import LayoutTemplate from '../../templates/LayoutTemplate';
import ContactForm from '../../organisms/ContactForm';
import { FormContainer } from './styles';

const AboutPage = () => {
    return (
        <LayoutTemplate>
            <PageHeader title="Skontaktuj się z nami" />
            <FormContainer>
                <ContactForm title="Napisz do nas" />
            </FormContainer>
        </LayoutTemplate>
    );
};

export default AboutPage;
