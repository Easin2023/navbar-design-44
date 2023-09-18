import PropTypes from 'prop-types';
import { HiCheckCircle } from "react-icons/hi";

const Feature = ({feature}) => {
     // console.log(feature)
     return (
          <div>
               <p className='flex items-center'><HiCheckCircle className='mr-2'></HiCheckCircle>{feature}</p>
          </div>
     );
};
Feature.propTypes = {
     feature: PropTypes.string
}
export default Feature;