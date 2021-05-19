import { render } from '@testing-library/react';
import ListContainer from '../component/ListContainer';

describe('List Container', () => {
  it('render tasks', () => {
    const { container } = render((
      <ListContainer />
    ));

    expect(container).toHaveTextContent('jest 해보기')
    expect(container).toHaveTextContent('그 다음엔 뭘해볼까?')
  })
})