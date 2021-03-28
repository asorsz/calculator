import buttonData from './button-data'
import '../css/Buttons.css';

const Buttons = (props) => {
  return (
    <div id="buttons">
      {buttonData.map((button, i) => (
        <button
          key={i}
          id={button.id}
          className={button.type}
          data-type={button.type}
          onClick={(e) => props.handleButtonPress(e)}
        >{button.text}</button>
      ))}
    </div>
  );
};

export default Buttons;