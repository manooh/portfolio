import React, { Component, PropTypes } from 'react';
import './App.scss';

import InfoPage, { Developer, Designer, Teacher, More } from './InfoPage';
import Cube from '../../Components/Cube/Cube';
import Menu from '../../Components/Menu/Menu';


const Home = () => {
  return (
    <Cube />
  );
};


const Mail = () => {
  return (
    <div>Mail</div>
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


const InfoPages = { Developer, Designer, Teacher, More };

class App extends Component {
  constructor(props) {
    super(props);

    this.setPage = this.setPage.bind(this);

    this.state = {
      currentPage: 'Home'
    };
  }

  setPage(page) {
    this.setState({ currentPage: page });
  }

  render() {
    return (
      <div className="app">
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
