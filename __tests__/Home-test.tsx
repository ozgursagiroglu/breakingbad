import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {Provider} from 'react-redux';
import store from '../store';
import Navigation from '../navigation';
import {act} from 'react-test-renderer';

const markup = (
  <Provider store={store}>
    <Navigation>
      <HomeScreen />
    </Navigation>
  </Provider>
);

describe('HomeScreen', () => {
  it('renders correctly', async () => {
    const {toJSON} = render(markup);

    await act(() => {
      expect(toJSON()).toMatchSnapshot();
    });
  });

  it('title was render correctly', () => {
    const {getByText} = render(markup);

    expect(getByText('Breaking Bad Characters')).toBeTruthy();
  });
});
