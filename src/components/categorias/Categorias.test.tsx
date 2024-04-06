import { describe, test, expect } from 'vitest'
import {render, screen} from '@testing-library/react'
import {Categorias} from './Categorias'


describe('Categorias', () => {
    test('should show accordion items element containing the services provides', () => {
        const handleFunction = () => {
            return 'mockfunction'
        }
        render(<Categorias handleService={handleFunction}/>);
        expect(screen.getByText(/servicios/i)).toBeDefined()
    })
    test('should have a button for services selection', () => {
        const handleService = () => {
            return 'mockfunction'
        }
        render(<Categorias handleService={handleService}/>)
        expect(screen.findByRole('button', { name: /servicebtn/i })).toBeDefined()
    })
})