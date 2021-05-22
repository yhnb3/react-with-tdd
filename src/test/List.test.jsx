import React from 'react'

import { render } from '@testing-library/react';
import context from 'jest-plugin-context'


import List from '../component/List';



describe('List', () => {
  context('with tasks', () => {
    const tasks = [
      {id:1, title: 'jest 해보기'},
      {id:2, title: '그 다음엔 뭘해볼까'}
    ]
    it('render tasks', () => { 
      const { getByText } = render((
        <List 
          tasks={tasks}
        />
      ));
  
      expect(getByText(/jest 해보기/)).not.toBeNull()
      expect(getByText(/그 다음엔 뭘해볼까/)).not.toBeNull()
    })
  })
  context('without tasks', () => {
    const tasks = []
    it('render tasks', () => {
      const { getByText } = render((
        <List 
          tasks={tasks}
        />
      ));
  
      expect(getByText(/할 일이 없습니다./)).not.toBeNull()
    })
  })
})


