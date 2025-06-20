import PropTypes from "prop-types";
const HeaderText = ({text1,text2}) => {
    return (
        <div className="flex justify-center flex-col items-center gap-2 my-10 md:my-20" data-aos="fade-up"  data-aos-duration="800">
            <h4  className="text-center text-purple-500 text-sm uppercase font-semibold">{text1}</h4>
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-1" style={{color: "#16423C"}}>{text2}</h1>
            <hr className="h-1 w-10 mx-auto mb-2 bg-gradient-to-r from-indigo-300 to-purple-300" />
        </div>
    );
};
HeaderText.propTypes = {
    text1: PropTypes.string,
    text2: PropTypes.string,
  };
export default HeaderText;