import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from 'react-testing-library'

import Counter from './Counter'

test('<Counter/>', ()=>{
  //RENDERS A COMPONENT
  const {debug,getByTestId} = render(<Counter/>)
  console.log(render)
 debug()
 const CounterButton = getByTestId('counter-button')
  // console.log(wrapper.getByText('0').textContent)
  //ASSERT TEXT VALUE 0 IS FOUND WITHIN A BUTTON
  expect(CounterButton.tagName).toBe('BUTTON')
  ///initial counter should start from 0
  expect(CounterButton.textContent).toBe('0')

  fireEvent.click(CounterButton)
  expect(CounterButton.textContent).toBe('1')
  fireEvent.click(CounterButton)
  expect(CounterButton.textContent).toBe('2')
})









// test('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
