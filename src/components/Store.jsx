import { Component } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view_module',
    };
  }

  onSwitch = () => {
    this.setState((prevState) => ({
      view: prevState.view === 'view_module' ? 'view_list' : 'view_module',
    }));
  };

  getIcon = () => {
    return this.state.view === 'view_module' ? 'view_list' : 'view_module';
  };

  render() {
    const { items } = this.props;
    const { view } = this.state;

    return (
      <div className="store">
        <div className="store-header">
          <IconSwitch icon={this.getIcon()} onSwitch={this.onSwitch} />
        </div>
        {view === 'view_module' ? (
          <CardsView cards={items} />
        ) : (
          <ListView items={items} />
        )}
      </div>
    );
  }
}

export default Store;
