import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ListContainer from '../component/ListContainer';

jest.mock('react-redux');


describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => {
    return selector({
    tasks: [
      {id : 1, title: 'jest 해보기'},
      {id : 2, title: '그 다음엔 뭘해볼까'}
    ],
  })})
  it('render tasks', () => {
    const { container } = render((
      <ListContainer />
    ))
    expect(container).toHaveTextContent('할 일이 없습니다')
  })
})
