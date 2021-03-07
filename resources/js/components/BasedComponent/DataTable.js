import BootstrapTable from 'react-bootstrap-table-next';

const DataTable = (props) => {

  const { data } = props;

  if (data == null || data.length === 0) {
    return '';
  }

  return (
    <BootstrapTable {...props} />
  );
};

export default DataTable;