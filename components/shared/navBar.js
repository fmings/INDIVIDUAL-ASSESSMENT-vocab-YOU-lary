import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">vocab-YOU-lary</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" id="add-card">Add New Card</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="view-all">View All Cards</a>
        </li>
      </ul>
        <input class="form-control me-2" type="search" placeholder="Search Vocab Cards" aria-label="Search" id="search">
      <div id="logout-btn">Logout</div>
    </div>
  </div>
</nav>`;

  renderToDom('#navigation', domString);
};

export default navBar;
