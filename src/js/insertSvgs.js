const googlePlayLink = document.querySelector('.btn--google-play');
const appStoreLink = document.querySelector('.btn--app-store');
const facebookLink = document.querySelector('.facebook');
const twitterLink = document.querySelector('.twitter');
const instagramLink = document.querySelector('.instagram');

const googlePlay = `
  <svg xmlns="http://www.w3.org/2000/svg" width="182" height="56">
  <g fill="none" fill-rule="evenodd" class="sign-up__google-play">
  <rect width="182" height="56" fill="#E5ECF4" rx="4"/>
  <g fill="#495567" font-family="SpaceMono-Bold, Space Mono" font-weight="bold">
  <text font-size="20" letter-spacing="-.893" transform="translate(52 8)">
  <tspan x="0" y="37">GooglePlay</tspan>
  </text>
  <text font-size="10" letter-spacing="-.446" transform="translate(52 8)">
  <tspan x="0" y="11">Get it on</tspan>
  </text>
  </g>
  <path fill="#495567" fill-rule="nonzero"  
  d="M19.605 14.345a2.348 2.348 0 00-2.253-.108l12.152 12.178 
  3.973-3.992-13.872-8.078zm-3.37 1.02A2.476 2.476 0 0016 16.42v22.276c0 
  .373.083.729.238 1.047l12.147-12.205-12.15-12.175zm13.27 13.297l-12.132 
  12.19c.322.149.665.214 1.007.214.422 0 .844-.101 
  1.225-.33l13.875-8.09-3.974-3.984zM38.76 25.5a.221.221 0 
  00-.014-.01l-3.852-2.242-4.27 4.29 4.273 4.28 3.863-2.252a2.362 
  2.362 0 001.144-2.033A2.36 2.36 0 0038.76 25.5z"/>
  </g>
  </svg>`;

const appStore = `
  <svg xmlns="http://www.w3.org/2000/svg" width="159" height="56">
  <g fill="none" fill-rule="evenodd">
  <rect width="159" height="56" fill="#E5ECF4" rx="4"/>
  <g fill="#495567" font-family="SpaceMono-Bold, Space Mono" font-weight="bold">
  <text font-size="20" letter-spacing="-.893" transform="translate(52 8)">
  <tspan x="0" y="37">AppStore</tspan>
  </text>
  <text font-size="10" letter-spacing="-.446" transform="translate(52 8)">
  <tspan x="0" y="11">Available on the</tspan>
  </text>
  </g>
  <path fill="#495567" fill-rule="nonzero" 
  d="M34.017 20.533c1.93 0 3.973 1.044 5.428 2.843-4.768 2.594-3.996 9.352.822 
  11.162-.663 1.457-.98 2.107-1.835 3.398-1.191 1.8-2.869 4.045-4.952 
  4.06-1.848.02-2.324-1.194-4.833-1.18-2.509.012-3.03 1.201-4.883 
  1.184-2.08-.018-3.672-2.043-4.863-3.843-3.33-5.033-3.681-10.941-1.627-14.084 
  1.462-2.231 3.766-3.536 5.93-3.536 2.204 0 3.591 1.2 5.416 1.2 1.77 0 
  2.848-1.204 5.397-1.204zM33.683 14c.243 1.649-.428 3.264-1.316 4.406-.948 
  1.226-2.586 2.175-4.17 2.126-.29-1.58.452-3.205 1.353-4.3.988-1.206 
  2.683-2.132 4.133-2.232z"/>
  </g>
  </svg>`;

const facebook = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
  <path fill="#FCB72B" class="footer__icon" 
  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 
  24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 
  4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 
  0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 
  0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
  </svg>`;

const twitter = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
  <path fill="#FCB72B" class="footer__icon"
  d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 
  9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 
  2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 
  6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 
  4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 
  010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 
  13.995-14.646A10.025 10.025 0 0024 2.557z"/>
  </svg>`;

const instagram = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
  <path fill="#FCB72B" class="footer__icon"
  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 
  4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 
  4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 
  0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 
  0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 
  1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 
  2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 
  2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 
  4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 
  0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 
  15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 
  16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 
  1.44 0 000-2.881z"/>
  </svg`;

export const insertSvgs = () => {
  googlePlayLink.innerHTML = googlePlay;
  appStoreLink.innerHTML = appStore;
  facebookLink.innerHTML = facebook;
  twitterLink.innerHTML = twitter;
  instagramLink.innerHTML = instagram;
}