import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe('Async component', ()=>{
    test('renders posts if request succeeds', async()=>{
        //mocking
        //overrideing the built in fetch with our dummy fetch
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () =>[{id: 'p1', title: 'first post'}]
        });
        render(<Async/>);

       const listItemElements = await screen.findAllByRole('listitem'); //find returns a promise
       expect(listItemElements).not.toHaveLength(0);
    })
});