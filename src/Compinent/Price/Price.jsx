import PropTypes from 'prop-types';
import Feature from './Features/Feature';

const Price = ({data}) => {
     const {Package,Price,Features} = data;
     return (
          <div className= 'flex flex-col bg-orange-400 text-white  p-6 rounded-2xl hover:bg-orange-500'>
               <h1 className='text-center '>
                    <span className='text-7xl font-extrabold'>{Price}</span>
                    <span className='text-3xl font-medium'>/mon</span>
               </h1>
               <h2 className='text-3xl font-extrabold my-7'>{Package}</h2>
               <div className='flex-grow'>
                    {
                         Features.map((features,inx) => <Feature
                              key={inx} 
                              feature={features}></Feature>)
                    }
               </div>
               <button className='w-full mt-6 bg-slate-300 font-bold hover:bg-slate-500 py-3 rounded-xl'>Bye Now</button>
          </div>
     );
};

Price.propTypes = {
     data: PropTypes.object
}

export default Price;