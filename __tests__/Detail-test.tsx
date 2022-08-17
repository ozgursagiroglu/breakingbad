import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import store from '../store';
import Navigation from '../navigation';
import DetailScreen from '../screens/DetailScreen/DetailScreen';
import {act} from 'react-test-renderer';

const markup = (
  <Provider store={store}>
    <Navigation>
      <DetailScreen />
    </Navigation>
  </Provider>
);

describe('DetailScreen', () => {
  it('renders correctly', async () => {
    const {toJSON} = render(markup);

    await act(async () => {
      expect(toJSON()).toMatchSnapshot();
    });
  });

  it('title was render correctly', async () => {
    const {getByText} = render(markup);

    await act(async () => {});

    expect(getByText('Walter White')).toBeTruthy();
  });
});
