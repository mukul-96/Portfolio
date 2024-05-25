import PropTypes from 'prop-types';
const Card=({icon,title})=>{   
    return(
        <div className=" rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col  black-gradient card-shadow">
         <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center text-gray-400 ">
          {title}
        </h3>
        </div>
    )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Card;