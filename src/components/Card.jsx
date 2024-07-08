import PropTypes from 'prop-types';

const Card = ({ icon, title }) => {
    return (
        <div className="rounded-[20px] py-5 px-6 sm:px-10 lg:px-12 min-h-[280px] flex flex-col justify-center items-center bg-jetLight shadow-lg">
            <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
            <h3 className="text-taupe text-[16px] sm:text-[18px] font-bold text-center">
                {title}
            </h3>
        </div>
    );
}

Card.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Card;
