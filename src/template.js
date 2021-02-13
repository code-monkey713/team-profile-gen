const buildHTMLTemplate = (manager, intern, engineer) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Team Organization!</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <nav class="navbar has-shadow">
    <div class="container">
      <div class="navbar-brand"><a class="navbar-item" href=""><img src="http://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox" /></a>
      </div>
    </div>
  </nav>
  <section class="hero is-primary">
    <div class="hero-body is-centered">
      <p class="title is-centered">
        My Team Profile!!!
      </p>
    </div>
  </section>
  <section class="container">
    <div class="level-item">
      <div class="columns is-multiline is-centered cards-container" id="sectioncontainer">
        ${manager}
        ${engineer}
        ${intern}
      </div>
    </div>
    </div>
  </section>
  <div class="columns is-mobile is-centered">
    <div class="column is-half is-narrow"></div>
  </div>
  <footer>
    <div class="box cta">
      <div class="columns is-mobile is-centered">
        <div class="field is-grouped is-grouped-multiline">
          <div class="control">
            <div class="tags has-addons"><a class="tag is-link">The source code is licensed</a><span
                class="tag is-light">MIT <i class="fa fa-github"></i></span></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</body>

</html>
`;

module.exports = buildHTMLTemplate;