import React, { Component, Fragment } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { getAll } from '../RequestApiUtils';
import IsLoading from '../BasedComponent/IsLoading';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      products: [],
    }
  }

  componentDidMount() {
    this.state.isLoading = true;
    getAll('products').then((products) => {
      this.setState({
        products,
        isLoading: false,
      });
    });
  }


  render() {
    const columns = [{
      dataField: 'id',
      text: 'Product ID'
    }, {
      dataField: 'name',
      text: 'Product Name'
    }, {
      dataField: 'price',
      text: 'Product Price'
    }];


    return (
      <IsLoading isLoading={this.state.isLoading}>
        <Fragment>
          <h1> Product </h1>
          <BootstrapTable
            keyField='id'
            data={this.state.products}
            columns={columns}
          />
        </Fragment>
      </IsLoading>

    );
  }

}