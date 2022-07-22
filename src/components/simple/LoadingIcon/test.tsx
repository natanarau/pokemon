import { render, waitFor, cleanup } from '@testing-library/react';
import { LoadingIcon } from '.';

afterEach(() => {
  cleanup();
  jest.resetModules();
});

describe('<LoadingIcon />', () => {
  test('should render icon correctly', async () => {
    const { getByTestId } = render(<LoadingIcon />)
    await waitFor(() => expect(getByTestId('LoadingIcon')).toBeTruthy())
  })
  test('should match snapshot', () => {
    const { container } = render(
      <LoadingIcon />
    )
    expect(container).toMatchSnapshot();
  });
})