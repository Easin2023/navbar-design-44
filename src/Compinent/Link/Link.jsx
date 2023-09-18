import PropTypes from 'prop-types';
const Link = ({route}) => {
     const {name,path} = route;
     return (
          <ul className="mr-4">
               <li className='hover:bg-orange-600 p-3 rounded-md'><a href={path}>{name}</a></li>
          </ul>
     );
};

Link.propTypes = {
     route: PropTypes.object.isRequired
}

export default Link;