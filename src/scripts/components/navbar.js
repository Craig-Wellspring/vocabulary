import firebase from 'firebase';
import signOut from '../helpers/signOut';
import displayCards from '../views.js/cardDisplay';

const navBar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#"><i id="navbar-logo" class="fas fa-book"></i></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-items" aria-controls="navbar-items" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar-items">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 navbar-list">
          <li class="nav-item">
            <button id="create-new-card" class="btn btn-primary">New Entry</button>
          </li>
          <li class="nav-item">
            Sort: 
            <select id="sort-select">
              <option>Alphabetical</option>
              <option>Reverse Alphabetical</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select
          </li>
          <li class="nav-item">
            Filter: 
            <select id="language-filter">
              <option>None</option>
              <option>JavaScript</option>
              <option>HTML</option>
              <option>CSS</option>
            </select>
          </li>
          <li class="nav-item">
            <button id="community-btn" class="btn btn-primary"><i class="fas fa-atlas"></i> Community</button>
          </li>
        </ul>
        <i id="google-auth" class="basic-icon fas fa-sign-out-alt btn-danger"></i>
      </div>
    </nav>
  `;

  document.querySelector('#header').innerHTML = domString;

  document.querySelector('#google-auth').addEventListener('click', signOut);

  const userID = firebase.auth().currentUser.uid;
  document.querySelector('#sort-select').addEventListener('change', () => displayCards(userID));
  document.querySelector('#language-filter').addEventListener('change', () => displayCards(userID));
};

export default navBar;
