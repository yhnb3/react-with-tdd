import { render } from '@testing-library/react';
import App from './App.jsx';

describe('App', () => {
  it('render tasks', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent('jest 해보기')
  })
})