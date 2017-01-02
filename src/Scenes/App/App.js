import React, { Component, PropTypes } from 'react';
import './App.scss';

import InfoPages, {InfoPage} from './InfoPages';
import Cube from '../../Components/Cube/Cube';
import Menu from '../../Components/Menu/Menu';
import NameBackground from '../../Components/NameBackground/NameBackground';


const Home = () => {
  return (
    <Cube />
  );
};


const Mail = () => {
  return (
    <div id="Mail">Mail</div>
  );
};


class PageContainer extends Component {
  render() {
    let classNameDef = this.props.isSelected ? 'selected' : '';

    return(
      <div className={'page-container ' + classNameDef}>
        {this.props.children}
      </div>
    )
  }
};

PageContainer.propTypes = {
  isSelected: PropTypes.bool
};

PageContainer.defaultProps = {
  isSelected: false
};


class App extends Component {
  constructor(props) {
    super(props);

    this.setPage = this.setPage.bind(this);

    this.state = {
      currentPage: this.getValidID()
    };

    window.addEventListener('popstate', this.updateID.bind(this));
  }

  updateID() {
    this.setState({ currentPage: this.getValidID() });
    scroll(0,0);
  }

  setPage(page) {
    this.setState({ currentPage: page });
  }

  getValidID() {
    const validIDs = ['Home', 'Mail'].concat(Object.keys(InfoPages));

    let id = location.hash.slice(1);
    if ('' !== id) {
      id = id.charAt(0).toUpperCase() + id.toLowerCase().slice(1); // capitalize first
      for (var i = 0; i < validIDs.length; i++) {
        if (validIDs[i] === id)
          return id;
      }
    }
    location.hash = '#Home';
    return 'Home';
  }

  render() {
    return (
      <div className="app">
        <NameBackground/>

        {/* Menu */}
        <Menu infoPages={InfoPages} currentPage={this.state.currentPage} setPage={this.setPage}/>

        {/* Home */}
        <PageContainer isSelected={('Home' === this.state.currentPage)}>
          <Home/>
        </PageContainer>

        {/* Info Pages */}
        {Object.keys(InfoPages).map((infoPage) => {
            const Page = InfoPages[infoPage];
            const selected = (infoPage === this.state.currentPage);
            return (
              <PageContainer key={infoPage} isSelected={selected}>
                <InfoPage><Page/></InfoPage>
              </PageContainer>
            );
          })}

        {/* Mail/Contact */}
        <PageContainer isSelected={('Mail' === this.state.currentPage)}>
          <InfoPage><Mail/></InfoPage>
        </PageContainer>
      </div>
    );
  }
}

export default App;
