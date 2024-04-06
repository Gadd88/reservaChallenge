import { describe, test, expect } from 'vitest'
import { render, screen} from '@testing-library/react'
import { Nav }  from './Nav'
import { MemoryRouter } from 'react-router-dom';


describe('Nav', () => {
    test('should have navigation links', () => {
        render(<MemoryRouter><Nav/></MemoryRouter>);
        expect(screen.getByText(/reservas/i)).toBeDefined()
    });
    test('should redirect to mis reservas page', () => {
        render(<MemoryRouter><Nav/></MemoryRouter>);
        expect(screen.getByText('Mis Reservas')).toHaveProperty('href', 'http://localhost:3000/misreservas')
    })
});