import '@testing-library/jest-dom'
import * as React from 'react'
// import API mocking utilities from Mock Service Worker.
import {rest} from 'msw'
import {setupServer} from 'msw/node'
// import testing utilities
import {render, fireEvent, screen} from '@testing-library/react'
import Form from '../src/components/form/Form';


const mockForm = [
  { mockValue: 'Boris Povolotsky', testId: 'name-input'},
  { mockValue: 'Forweb Inc', testId: 'company-input'},
  { mockValue: 'boristofu@gmailcom', testId: 'email-input'},
  { mockValue: 'Soethig', testId: 'budget-select'},
  { mockValue: 'June22th', testId: 'deadline-input'},
  { mockValue: 'This Project\'ts scope of work is front end mostly. custom webapp. thanks', testId: 'message-input'},
]

const fakeUserResponse = {token: 'fake_user_token'}

const server = setupServer(
  rest.post('/api/contact', (req, res, ctx) => {
    console.log(`inside a mock server request: \n Received: ${req?.body}`);
    return res(ctx.json(fakeUserResponse))
  }),
)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => server.close())


describe('Successful Form Submission', () => {
  it("Should Submit When All Labels Are Filled", () => {

    render(<Form />)

    for (const k of mockForm) {
      fireEvent.change(screen.getByTestId(k.testId, {
        target: { value: k.mockValue }
      }))
    }

    // submit the form...
    fireEvent.click(screen.getByTestId("submit-button-test"));

  })
})
