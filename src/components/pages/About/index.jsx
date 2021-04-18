import { ABOUT_PAGE_CONFIG } from './about_page_config';
import TextPageTemplate from '../../templates/TextPageTemplate';

const AboutPage = () => {
    const { title, content } = ABOUT_PAGE_CONFIG;

    return <TextPageTemplate title={title} content={content} />
};

export default AboutPage;
