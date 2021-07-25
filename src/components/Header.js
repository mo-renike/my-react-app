import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
  name: "Morenike",
  age: 27,
};

Header.propTypes = {
  title: PropTypes.string,
};

//CSS in JS
// const headingStyle = {
//     color: 'green',
//     backgroundColor:'#00ff00'
// }
export default Header;
