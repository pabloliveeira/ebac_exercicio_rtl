import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';
import Post from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o comentario 1 corretamente', () => {
        render(<Post/>);
        fireEvent.change(screen.getByTestId('comentario-add'))
        expect(screen.getByTestId('')).toBeInTheDocument()
    });
    test('deve renderizar o segundo comentário corretamente', () => {
        render(<PostComments/>)
        fireEvent.change(screen.getByTestId('btn-add'))
        expect(screen.getByTestId('')).toBeInTheDocument()
    })
});