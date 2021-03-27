import buttonData from './button-data'
import '../css/Buttons.css';

const Buttons = () => {
  return (
    <div id="buttons">
      {buttonData.map((button, i) => (
        <button
          key={i}
          id={button.id}
          className={button.type}
        >{button.text}</button>
      ))}
    </div>
  );
};

export default Buttons;