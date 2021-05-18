import React from 'react'

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  it('render tasks', () => {
    const tasks = [
        {id:1, title: 'jest 해보기'},
    ]
    const { container } = render((
      <List 
        tasks={tasks}
      />
    ));

    expect(container).toHaveTextContent('jest 해보기')
  })
})