import { render, screen } from "@testing-library/react";
import Post from "..";

describe('Testes para os comentários', () => {
    test('deve renderizar corretamente', () => {
        render(<Post/>)
        expect(screen.getByText(''))
    })
})