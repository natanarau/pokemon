import { render, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Button from '.';

afterEach(() => {
  cleanup();
  jest.resetModules();
});

describe('<Button />', () => {
  test('should render icon correctly', async () => {
    const { getByTestId } = render(<Button as='button' variant='primary'>Button</Button>)
    await waitFor(() => expect(getByTestId('Button')).toBeTruthy())
  })
  test('should click', async () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<Button as='button' onClick={onClick} variant='primary'>Button</Button>)
    const button = await waitFor(() => getByTestId('Button'))
    userEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
  test('should match snapshot', () => {
    const { container } = render(
      <Button as='button' variant='primary'>Button</Button>
    )
    expect(container).toMatchSnapshot();
  });
})
