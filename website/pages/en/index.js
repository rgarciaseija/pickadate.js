const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props
    const { baseUrl } = siteConfig
    return (
      <div>
        <div className='mainContainer'>
          {this.renderSplash()}
          {this.renderFooter()}
        </div>
      </div>
    )
  }

  renderSplash() {
    const { config: siteConfig, language = '' } = this.props
    const { baseUrl } = siteConfig
    return (
      <div className='homeHeaderWrapper wrapper'>
        <div className='homeSplash'>
          <div className='homeSplash_section homeSplash_section__left'>
            <h1 className='homeSplash_heading'>
              <img
                className='homeSplash_image'
                src={`${baseUrl}img/logo.svg`}
                alt='Project Logo'
              />
            </h1>
            <h2 className='homeSplash_heading homeSplash_heading__secondary'>
              A light-weight, composable date-time UI & state management
              library.
            </h2>
            <div className='homeCta'>
              <a
                className='homeCta_button homeCta_button__primary'
                href={`${baseUrl}docs/installation`}
              >
                Install
              </a>
              <a
                className='homeCta_button'
                href={`${baseUrl}docs/introduction`}
              >
                Getting Started
              </a>
            </div>
          </div>
          <div className='homeSplash_section homeSplash_section__right'>
            <div id='pickadate--datepicker' />
          </div>
        </div>
      </div>
    )
  }

  renderFooter() {
    const { config: siteConfig, language = '' } = this.props
    const { baseUrl } = siteConfig
    return (
      <div className='homeFooter'>
        <div className='wrapper'>
          <div className='homeFooter-information'>
            <p className='homeFooter-informationText'>
              <a href={`${baseUrl}docs/binding-javascript`}>
                Plain JavaScript core
              </a>{' '}
              with bindings for{' '}
              <a href={`${baseUrl}docs/binding-react-dom`}>React DOM</a>,{' '}
              <a href={`${baseUrl}docs/binding-react-native`}>React Native</a>,
              & more.
            </p>
            <p className='homeFooter-informationText'>
              Translations for 40+ languages.
            </p>
            <p className='homeFooter-informationText'>WCAG 2.0 compliant.</p>
          </div>
          <div className='homeUsing'>
            <div className='homeUsing-title'>
              Some websites using pickadate:
            </div>
            <div className='homeUsing-row'>
              <a
                className='homeUsing-item homeUsing-item--openTable'
                href='https://www.opentable.com/'
              >
                OpenTable
              </a>
              <a
                className='homeUsing-item homeUsing-item--pampers'
                href='https://www.pampers.ca/'
              >
                Pampers
              </a>
              <a
                className='homeUsing-item homeUsing-item--pokemon'
                href='https://www.pokemon.com/'
              >
                Pokémon
              </a>
              <a
                className='homeUsing-item homeUsing-item--hostelworld'
                href='https://www.hostelworld.com/'
              >
                Hostelworld
              </a>
            </div>
            <div className='homeUsing-row'>
              <a
                className='homeUsing-item homeUsing-item--politico'
                href='https://www.politico.com/'
              >
                Politico
              </a>
              <a
                className='homeUsing-item homeUsing-item--bitfinex'
                href='https://www.bitfinex.com/'
              >
                Bitfinex
              </a>
              <a
                className='homeUsing-item homeUsing-item--hired'
                href='https://hired.ca/'
              >
                Hired
              </a>
            </div>
          </div>
          <div className='homeFooter-bottom'>
            <div className='homeFooter-copyright'>
              <span className='homeFooter-peace'>✌</span> Made by{' '}
              <a href='https://twitter.com/amsul_'>Amsul</a> and many{' '}
              <a href='https://github.com/amsul/pickadate.js/graphs/contributors'>
                amazing contributors
              </a>
              .
            </div>
            <div className='homeFooter-donation'>
              <span className='homeFooter-donationText'>Share some love:</span>
              <a
                className='homeFooter-donationIcon homeFooter-donationIcon--bitcoin'
                href='https://en.cryptobadges.io/donate/1GfajgmoQXPUzqTA3LASAKxFeBhmHb2qSZ'
              >
                <svg
                  width='28px'
                  height='28px'
                  viewBox='0 0 28 28'
                  fill='#bec9cf'
                >
                  <path d='M27.5851199,17.3871499 C25.715024,24.8872995 18.1178142,29.45179 10.6159906,27.5814557 C3.11722992,25.711559 -1.44774676,18.1147209 0.423224227,10.6150088 C2.292445,3.11398425 9.88965483,-1.45094373 17.3892906,0.41895297 C24.8906766,2.28884967 29.4552158,9.88656286 27.5851199,17.3871499 Z M20.1752213,12.0058375 C20.4539121,10.1429408 19.0355206,9.14149171 17.0960606,8.47342146 L17.7251929,5.94989217 L16.1891126,5.56707522 L15.5766054,8.02410374 C15.1727883,7.92347758 14.7580334,7.82853897 14.3459037,7.73447538 L14.9627858,5.26125918 L13.4275805,4.87844223 L12.7980107,7.40109651 C12.4637568,7.32497063 12.135628,7.24971976 11.8171243,7.17053134 L11.8188743,7.16265624 L9.70047474,6.63371261 L9.291845,8.27435665 C9.291845,8.27435665 10.4315457,8.53554718 10.4074829,8.55173487 C11.0296152,8.70704917 11.142054,9.11874145 11.1232413,9.44512024 L10.4066079,12.3199661 C10.4494834,12.3309037 10.5050466,12.3466539 10.5662973,12.3711542 C10.5151092,12.3584666 10.4604211,12.3444664 10.4039829,12.3309037 L9.39947125,16.358138 C9.32334537,16.5471402 9.13040563,16.8306435 8.69552558,16.7230172 C8.71083826,16.74533 7.57901262,16.4443265 7.57901262,16.4443265 L6.81644127,18.2026594 L8.81540197,18.7009777 C9.18728129,18.7941663 9.55172302,18.8917299 9.91047718,18.983606 L9.2747823,21.5360106 L10.8091126,21.9188275 L11.4386824,19.3935482 C11.8578123,19.5072995 12.264692,19.6123007 12.6628216,19.7111769 L12.0354393,22.2246436 L13.5715197,22.6074605 L14.2072146,20.0598684 C16.8265575,20.5555617 18.7962053,20.3556219 19.6252774,17.9865319 C20.2933477,16.0790097 19.5920271,14.9786845 18.2138861,14.2611761 C19.2175227,14.029736 19.9735315,13.3695408 20.1752213,12.0058375 Z M16.6655556,16.9273321 C16.1908626,18.8348542 12.9791378,17.8036548 11.9378757,17.5450893 L12.7813855,14.1636125 C13.8226476,14.4234905 17.1616863,14.9379965 16.6655556,16.9273321 Z M17.1406861,11.9782746 C16.7075561,13.7134198 14.0344,12.831847 13.167265,12.6157195 L13.9320239,9.54880894 C14.7991589,9.76493645 17.5917538,10.1683161 17.1406861,11.9782746 Z' />
                </svg>
              </a>
              <a
                className='homeFooter-donationIcon homeFooter-donationIcon--dollar'
                href='https://paypal.me/pools/c/8abG4tT5dP'
              >
                <svg
                  width='28px'
                  height='28px'
                  viewBox='0 0 28 28'
                  fill='#bec9cf'
                >
                  <path d='M27.5812717,17.3871499 C25.7111758,24.8872995 18.113966,29.45179 10.6121424,27.5814557 C3.11338172,25.711559 -1.45159495,18.1147209 0.419376029,10.6150088 C2.28859681,3.11398425 9.88580663,-1.45094373 17.3854424,0.41895297 C24.8868284,2.28884967 29.4513676,9.88656286 27.5812717,17.3871499 Z M15.1246621,5.25029195 L13.5081939,5.25029195 L13.5081939,7.37629904 C12.8990869,7.43486702 12.371983,7.59006984 11.9268663,7.84191216 C11.4817497,8.09375448 11.1098486,8.40416012 10.8111519,8.7731384 C10.5124552,9.14211668 10.2899002,9.56087147 10.1434802,10.0294153 C9.99706027,10.4979592 9.9238514,10.9840661 9.9238514,11.4877508 C9.9238514,11.9680082 9.98827521,12.3926197 10.1171248,12.761598 C10.2459743,13.1305763 10.4451025,13.4614804 10.7145152,13.7543203 C10.9839279,14.0471602 11.3294738,14.3048554 11.7511633,14.5274138 C12.1728527,14.7499721 12.6823865,14.954957 13.2797799,15.1423745 L14.2812874,15.45864 C15.0426712,15.7046255 15.4233573,16.0853117 15.4233573,16.6007099 C15.4233573,16.975545 15.2622978,17.280094 14.9401739,17.5143659 C14.61805,17.7486378 14.2402922,17.865772 13.8068891,17.865772 C12.7643791,17.865772 11.6926011,17.3796651 10.591523,16.4074366 L9.16832822,19.0605528 C9.39088655,19.2713976 9.67493699,19.4734541 10.0204881,19.6667284 C10.3660392,19.8600028 10.7379403,20.0298474 11.1362025,20.1762673 C11.5344648,20.3226873 11.9385778,20.4398215 12.3485537,20.5276734 C12.7585296,20.6155254 13.1450724,20.6594507 13.5081939,20.6594507 L13.5081939,22.7503172 L15.1246621,22.7503172 L15.1246621,20.5715992 C15.8040507,20.3607545 16.3809367,20.1264861 16.8553373,19.8687869 C17.329738,19.6110878 17.7133525,19.3123956 18.0061924,18.9727013 C18.2990323,18.633007 18.5098739,18.2464641 18.6387234,17.8130611 C18.767573,17.379658 18.8319968,16.8818377 18.8319968,16.319585 C18.8319968,15.3942109 18.5743015,14.6416237 18.0589033,14.0618007 C17.5435051,13.4819776 16.7059955,12.9929423 15.5463495,12.5946801 L14.5097014,12.2432739 C14.1465799,12.1144244 13.8537444,11.9445798 13.6311861,11.733735 C13.4086277,11.5228903 13.2973502,11.3003353 13.2973502,11.0660634 C13.2973502,10.8083643 13.4379113,10.5770242 13.7190376,10.3720363 C14.0001639,10.1670484 14.3632799,10.0645559 14.8083966,10.0645559 C15.5346396,10.0645559 16.2725851,10.3515347 17.0222552,10.9255009 L18.3224579,8.39537681 C17.4556518,7.84483779 16.3897305,7.50514859 15.1246621,7.37629904 L15.1246621,5.25029195 Z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Index
