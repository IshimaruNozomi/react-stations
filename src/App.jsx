// DO NOT DELETE
import './App.css';
import {Description} from './Description'
import {Header} from './Header'
import {DogListContainer} from './DogListContainer'

/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  return (
      <div>
        <Header />8
        <Description />
        <DogListContainer />
      </div>
  );
};
