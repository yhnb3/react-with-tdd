import { render } from '@testing-library/react';
import App from './App.jsx';

describe('App', () => {
  it('render tasks', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent('jest 해보기')
    expect(container).toHaveTextContent('그 다음엔 뭘해볼까?')
  })
})