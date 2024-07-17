import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Cart } from "./Cart"
import { Products } from "../../Data/products"
import userEvent from "@testing-library/user-event";
import { removeProduct } from "../../redux/Cart/cart-slice";

const cart = Products.slice(0,2); // 2 primeiros produtos

const mockDispatch = jest.fn()

//Mock: tornar a biblioteca react-redux fake
jest.mock('react-redux', () => {
    return {
        useDispatch: () => {
            return mockDispatch
        }
    }
})

describe('Cart > Unit Test', () => {
    it("should render an empty cart correctly", () => {
        render(
                <Cart cart={[]} showCart={true}/>)
            const titleElement = screen.getByRole('heading', { level: 1 } )
            const totalElement = screen.getByTestId("total")

            expect(titleElement).toHaveTextContent('Carrinho')
            expect(totalElement).toHaveTextContent('$0')
        })
    it("should render a cart with two products", () => {
        render(<Cart showCart={false} cart={cart}/>)

        const productsItemElements = screen.getAllByRole('listitem')
        expect(productsItemElements.length).toBe(2);
    })

    it("should remove product when remove button in clicked", () => {
        render(<Cart showCart={true} cart={[Products[0]]}/>)
        const removeProductButton = screen.getByRole('button', { name: 'Remover' })
        userEvent.click(removeProductButton)
        expect(mockDispatch).toHaveBeenCalled()
        expect(mockDispatch).toHaveBeenCalledWith(removeProduct(Products[0]))
    })
})