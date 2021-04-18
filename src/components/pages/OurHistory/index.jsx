import { OUR_HISTORY_PAGE_CONFIG } from './our_history_page_config';
import TextPageTemplate from '../../templates/TextPageTemplate';

const OurHistory = () => {
    const { title, content } = OUR_HISTORY_PAGE_CONFIG;

    return <TextPageTemplate title={title} content={content} />
};

export default OurHistory;
