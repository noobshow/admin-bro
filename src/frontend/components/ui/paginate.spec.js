import React from 'react'
import { render } from 'react-testing-library'
import { StaticRouter } from 'react-router-dom'
import Paginate from './paginate'

require('jsdom-global')()

describe('Paginate', function () {
  this.timeout(5000)

  it('renders one element when there should be a 1 page', async function () {
    const location = { search: '' }
    const { findAllByText } = render(
      <StaticRouter location="/">
        <Paginate page={1} perPage={10} total={11} location={location} />
      </StaticRouter>,
    )
    const el = await findAllByText('1')
    expect(el).to.have.lengthOf(1)
  })
})
