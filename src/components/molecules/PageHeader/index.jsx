import { HeaderSection, HeaderIMG } from './styles';
import star from '../../../images/star.png'
import { H1 } from '../../atoms/Typography'

const PageHeader = ({ title }) => {
    return (
        <HeaderSection>
            <HeaderIMG
                src={star}
                alt="Header image"
            />
            <H1>
                {title}
            </H1>
        </HeaderSection>
    );
};

export default PageHeader;
