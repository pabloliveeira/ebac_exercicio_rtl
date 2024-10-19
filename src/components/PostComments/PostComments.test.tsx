import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComments/>);
        fireEvent.change(screen.getByTestId('comentario-add'))
        expect(screen.getAllByTestId('comentario-add')).toBeInTheDocument()
    });

});