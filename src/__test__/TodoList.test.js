import React from 'react';
import ReactDOM from 'react-dom';
import TodoItems from '../components/TodoItems';
import { create } from 'react-test-renderer';
import { render, fireEvent, getByTestId } from 'react-testing-library';
import App from '../App';

describe.skip('My first snapshot test', () => {
  test('Page renders correctly', () => {
    let tree = create(<App />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})
