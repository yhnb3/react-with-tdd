import { render } from '@testing-library/react';
import App from '../App.jsx';

import { useDispatch, useSelector } from 'react-redux';

jest.mock('react-redux')

const tasks = [
  {id:1, title: 'jest 해보기'},
  {id:2, title: '그 다음엔 뭘해볼까'}
]
describe('App', () => {
  const dispatch = jest.fn()
  useDispatch.mockImplementation(() => dispatch)
  useSelector.mockImplementation((selector) => selector({
    tasks: tasks,
  }))

  it('render tasks', () => {
    const { getByText } = render((
      <App />
    ));

    expect(dispatch).toBeCalled();

    expect(getByText(/할 일이 없습니다/)).not.toBeNull()
  })
}) 