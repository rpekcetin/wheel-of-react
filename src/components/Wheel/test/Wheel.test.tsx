import React from 'react'
import { render } from '@testing-library/react'
import Wheel from '../Wheel'

describe('Wheel', () => {
    test('render the wheel component', () => {
        render(<Wheel />)
    })
})