import Section from '../../atoms/Section';
import { H3, Text } from '../../atoms/Typography';
import PageHeader from '../../molecules/PageHeader';
import NewsletterForm from '../../molecules/NewsletterForm';
import LayoutTemplate from '../../templates/LayoutTemplate';

const HomePage = () => {
    return (
        <LayoutTemplate>
            <PageHeader title="Atomic Design"/>
            <Section>
                <H3 noMargin>
                    Zapisz się do newslettera
                </H3>
                <NewsletterForm />
            </Section>
            <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, qui eaque sit sapiente optio perspiciatis dolores, consequatur ratione suscipit voluptatum fugiat officiis, facilis nam vero impedit sequi perferendis numquam! Consectetur.
            </Text>
        </LayoutTemplate>
    );
};

export default HomePage;
