class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
      <style>
        footer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 40px;
          padding: 0 10px;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color:  #0a0a23;
          z-index: 1000;
        }
        
        ul li {
          list-style: none;
          display: inline;
          font-weight: bold;
          font-style: italic;
          color: #fff;
        }
        
        a {
          margin: 0 15px;
          color: #fff;
          text-decoration: none;
        }
        
        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #333;
        }
        
        .social-row {
          font-size: 20px;
        }
        
        .social-row li a {
          margin: 0 15px;
        }
      </style>
      <footer>
        <ul>
          <li>Dan Grigore - Portfolio website (2025)</li>
        </ul>
        <ul class="social-row">
          <li><a href="https://github.com/" target="_blank"><i class="fab fa-github"></i></a></li>
          <li><a href="https://twitter.com/no-twitter-profile" target="_blank"><i class="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/dgrigore" target="_blank"><i class="fab fa-linkedin"></i></a></li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
