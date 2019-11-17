import React, { Component } from 'react';
import { connect } from 'react-redux';
import Error from './components/Error';
import Loading from './components/Loading';
import Title from './components/Title';
import DataTable from './components/Table';
import Time from './components/Time';
import { coindeskRequest } from './redux/actions/coindesk';
import { initialStateCoindesk } from './redux/reducers/coindesk';
import iconBitcoin from './images/icons/svg/bitcoin.svg';

const REQUEST_TIME_MILLISECONDS = 10 * 1000;

const prepareTableData = data => {
  return {
    head: [
      { columnId: 'code', columnName: 'Currency' },
      { columnId: 'rate', columnName: 'Rate' }
    ],
    body: Object.values(data)
  };
};

class App extends Component {
  request = () => this.props.coindeskRequest({...initialStateCoindesk, loading: true});

  componentDidMount() {
    this.request();
    this.requestInterval = setInterval(this.request, REQUEST_TIME_MILLISECONDS);
  }

  componentWillUnmount() {
    clearInterval(this.requestInterval);
  }

  render() {
    const { error, data } = this.props.coindesk;

    if (error) return <Error message={error} />;
    if (!data) return <Loading />;

    return (
      <React.Fragment>
        <Title icon={iconBitcoin} name={data.chartName} />
        <DataTable data={prepareTableData(data.bpi)} />
        <Time now explanation="current time" />
        <Time
          coindesk
          timestamp={data.time.updated}
          explanation="last updated by CoinDesk"
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ coindesk, ...state }) => ({ coindesk });

const mapDispatchToProps = { coindeskRequest };

export default connect(mapStateToProps, mapDispatchToProps)(App);
