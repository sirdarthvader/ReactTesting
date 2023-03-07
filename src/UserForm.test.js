import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event'

import UserForm from "./UserForm";

test('Should show 2 input fields and a submit button', () => {
    //anatomy of any normal test
    //1.Render the component
    render(<UserForm/>)
    //2.Manipulate or find an element in it
    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button')
    //3.Assert on business logic or visual logic
    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument()
})