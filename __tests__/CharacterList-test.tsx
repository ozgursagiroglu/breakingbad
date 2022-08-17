import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import store from '../store';
import Navigation from '../navigation';
import CharacterList from '../components/CharacterList/CharacterList';
import {act} from 'react-test-renderer';

const markup = (
  <Provider store={store}>
    <Navigation>
      <CharacterList />
    </Navigation>
  </Provider>
);

describe('CharacterList', () => {
  it('renders correctly', async () => {
    const {getByTestId} = render(markup);

    await act(() => {
      expect(getByTestId('items')).toBeTruthy();
    });
  });
});
