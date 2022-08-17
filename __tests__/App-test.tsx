import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';
import {act} from 'react-test-renderer';

test('renders correctly', async () => {
  const {toJSON} = render(<App />);

  await act(() => {
    expect(toJSON()).toMatchSnapshot();
  });
});
