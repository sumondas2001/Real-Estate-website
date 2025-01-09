import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
const PagesTitle = ({ title }) => {
     // console.log(title);
     return (
          <Helmet>
               <title>{title} - Real State</title>
          </Helmet>
     );
};



export default PagesTitle;



PagesTitle.propTypes = {

     title: PropTypes.string,
}
