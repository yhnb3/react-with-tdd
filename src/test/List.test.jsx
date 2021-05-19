import React from 'react'

import { render } from '@testing-library/react';

import List from '../component/List';

describe('List', () => {
  it('render tasks', () => {
    const tasks = [
      {id:1, title: 'jest 해보기'},
      {id:2, title: '그 다음엔 뭘해볼까?'}
    ]
    const { container } = render((
      <List 
        tasks={tasks}
      />
    ));

    expect(container).toHaveTextContent('jest 해보기')
    expect(container).toHaveTextContent('그 다음엔 뭘해볼까?')
  })
})