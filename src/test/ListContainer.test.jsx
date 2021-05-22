import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ListContainer from '../component/ListContainer';


jest.mock('react-redux')

describe('ListContainer', () => {
  const tasks = [
    {id:1, title: 'jest 해보기'},
    {id:2, title: '그 다음엔 뭘해볼까'}
  ]
  useSelector.mockImplementation((selector) => selector({
    tasks: tasks,
  }))
  it('render tasks', () => {
    const { getByText } = render((
      <ListContainer />
    ))
    expect(getByText(/할 일이 없습니다/)).not.toBeNull()
  })
})
