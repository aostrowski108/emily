import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock(
  'react-router-dom',
  () => ({
    useLocation: () => ({ pathname: '/' }),
    Routes: ({ children }) => <>{children}</>,
    Route: ({ element }) => element,
    Link: ({ children, to, ...rest }) => (
      <a href={to} {...rest}>
        {children}
      </a>
    ),
    NavLink: ({ children, to, className, ...rest }) => {
      const resolvedClassName =
        typeof className === 'function'
          ? className({ isActive: to === '/' })
          : className;

      return (
        <a href={to} className={resolvedClassName} {...rest}>
          {children}
        </a>
      );
    },
  }),
  { virtual: true }
);

test('renders home hero heading', () => {
  render(<App />);
  const heading = screen.getByText(/modern private dining/i);
  expect(heading).toBeInTheDocument();
});
