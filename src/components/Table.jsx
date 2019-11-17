import React, { useState } from 'react';
import { orderBy } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const useStyles = makeStyles({
  head: {
    fontWeight: "bold"
  }
});

const DataTable = ({ data, ...props }) => {
  const [tableData, setTableData] = useState({...data, currentColumnId: null, direction: 'desc'});
  const styles = useStyles();

  const handleColumnSort = columnId => {
    let order = 'desc';
    if (tableData.currentColumnId && tableData.direction === 'desc') {
      order = 'asc';
    }

    const body = orderBy(tableData.body, [columnId], [order]);
    setTableData({...tableData, body, currentColumnId: columnId, direction: order});
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableData.head.map(({columnId, columnName}) => (
            <TableCell className={styles.head} align="center" key={columnName}>
              <TableSortLabel
                active={tableData.currentColumnId === columnId ? true : false}
                direction={tableData.direction}
                onClick={() => handleColumnSort(columnId)}
              >
                {columnName}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.body.map(row => (
          <TableRow hover key={row.code}>
            <TableCell align="center">{row.code}</TableCell>
            <TableCell align="center">{row.rate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
