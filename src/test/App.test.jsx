import { render } from '@testing-library/react';
import App from '../App.jsx';

describe('App', () => {
  it('render tasks', () => {
    const { container } = render((
      <App />
    ));
    expect(container).toHaveTextContent('할 일이 없습니다')
  })
}) 