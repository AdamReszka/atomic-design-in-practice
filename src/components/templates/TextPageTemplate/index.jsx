import PageHeader from '../../molecules/PageHeader';
import { Text } from '../../atoms/Typography';
import LayoutTemplate from '../LayoutTemplate';

const TextPageTemplate = ({
    title,
    content
}) => {
    return (
        <LayoutTemplate>
            <PageHeader title={title}/>
            {
                content.map(
                    ({ text }) =>
                        <Text>{text}</Text>
                )
            }
        </LayoutTemplate>
    );
};

export default TextPageTemplate;
