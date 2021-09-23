import React, { Component } from 'react';
import Card from '../components/cardComponent';

export default class landing extends Component {
  render() {
    return (
      <>
        <div class="flex flex-row">
          <div>
            <Card
              class="bg-blue-400"
              title="Maecenas laoree efficiture sagittis
aliquam eleifend nisl."
              date="Posted 7 MArch, 2020"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing
sed do eiusmod tempor incididunt labore et dolore
magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip
ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident,"
            />
          </div>
          <div>
            <Card
              title="Maecenas laoree efficiture sagittis
aliquam eleifend nisl."
              date="Posted 7 MArch, 2020"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing
sed do eiusmod tempor incididunt labore et dolore
magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip
ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore
eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident,"
            />
          </div>
        </div>
      </>
    );
  }
}
