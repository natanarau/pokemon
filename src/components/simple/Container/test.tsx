import { render, waitFor, cleanup } from '@testing-library/react';
import { Container } from '.';


afterEach(() => {
  cleanup();
  jest.resetModules();
});

describe('<Container />', () => {
  test('should render icon correctly', async () => {
    const { getByTestId } = render(<Container>Container</Container>)
    await waitFor(() => expect(getByTestId('Container')).toBeTruthy())
  })
  test('should match snapshot', () => {
    const { container } = render(
      <Container>Container</Container>
    )
    expect(container).toMatchSnapshot();
  });
})