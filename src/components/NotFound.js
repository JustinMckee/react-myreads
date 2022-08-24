import Header from './Header';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="list-books">
        <Header/>
        <div class="not-found-404">
          <h1>404</h1>
          <p>We couldn't find the resource you were looking for.</p>
          <Link to="/">Back Home</Link>
        </div>
      </div>
    )
}

export default NotFound;
