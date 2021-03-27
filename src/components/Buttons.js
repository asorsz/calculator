import '../css/Buttons.css';

const Buttons = () => {
  return (
    <div id="buttons">
      <button class='operator' data-action="add">+</button>
      <button class='operator' data-action="subtract">-</button>
      <button class='operator' data-action="multiply">&times;</button>
      <button class='operator' data-action="divide">&divide;</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>0</button>
      <button data-action="decimal">.</button>
      <button data-action="clear">AC</button>
      <button class="equals" data-action="calculate">=</button>
    </div>
  );
};

export default Buttons;