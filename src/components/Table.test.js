import React from 'react';
import { shallow } from 'enzyme';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import DataTable from './Table';

const data = {
  head: [
    { columnId: 'code', columnName: 'Currency' },
    { columnId: 'rate', columnName: 'Rate' }
  ],
  body: [
    { code: 'USD', symbol: '&#36;', rate: '8,481.3367', description: 'United States Dollar', rate_float: 8481.3367 },
    { code: 'GBP', symbol: '&pound;', rate: '6,572.9002', description: 'British Pound Sterling', rate_float: 6572.9002 },
    { code: 'EUR', symbol: '&euro;', rate: '7,674.5156', description: 'Euro', 'rate_float': 7674.5156 }
  ]
};

describe('<DataTable />', () => {
  let dataTable;

  beforeEach(() => {
    dataTable = shallow(<DataTable data={data} />);
  });

  afterEach(() => {
    dataTable.unmount();
  });

  it('should have a <Table />', () => {
    expect(dataTable.type()).toBe(Table);
  });

  describe('<Table />', () => {
    let element;

    it('should have a <TableHead />', () => {
      element = dataTable.childAt(0);
      expect(element.type()).toBe(TableHead);
    });

    describe('<TableHead />', () => {
      it('should have a <TableRow />', () => {
        expect(element.children().getElements()).toHaveLength(1);
        element = element.childAt(0);
        expect(element.type()).toBe(TableRow);
      });

      describe('<TableRow />', () => {
        it('should have 2 <TableCell />', () => {
          expect(element.children().getElements()).toHaveLength(2);
          element.children().forEach(node => {
            expect(node.type()).toBe(TableCell);
          });
        });

        describe('each <TableCell />', () => {
          it('should have correct properties', () => {
            element.children().forEach(tableCell => {
              expect(tableCell.props()).toHaveProperty('className', 'makeStyles-head-1');
              expect(tableCell.props()).toHaveProperty('align', 'center');
            });
          });

          it('should contain a <TableSortLabel />', () => {
            element.children().forEach(tableCell => {
              expect(tableCell.children().getElements()).toHaveLength(1);
              expect(tableCell.childAt(0).type()).toBe(TableSortLabel);
            });
          });

          it('<TableSortLabel /> should have correct properties', () => {
            element.children().forEach(tableCell => {
              const tableSortLabel = tableCell.childAt(0);
              expect(tableSortLabel.props()).toHaveProperty('active', false);
              expect(tableSortLabel.props()).toHaveProperty('direction', 'desc');
              expect(tableSortLabel.props()).toHaveProperty('onClick');
              expect(tableSortLabel.props().onClick).toBeInstanceOf(Function);
            });
          });

          it('<TableSortLabel /> should have a correct text', () => {
            element.children().forEach((tableCell, index) => {
              const tableSortLabel = tableCell.childAt(0);
              expect(tableSortLabel.text()).toBe(data.head[index].columnName);
            });
          });
        });
      });
    });

    it('should have a <TableBody />', () => {
      element = dataTable.childAt(1);
      expect(element.type()).toBe(TableBody);
    });

    describe('<TableBody />', () => {
      it('should have 3 <TableRow />', () => {
        expect(element.children().getElements()).toHaveLength(3);
        element.children().forEach(node => {
          expect(node.type()).toBe(TableRow);
        });
      });

      describe('each <TableRow />', () => {
        it('should have correct properties', () => {
          element.children().forEach(tableRow => {
            expect(tableRow.props()).toHaveProperty('hover', true);
          });
        });

        it('should have 2 <TableCell />', () => {
          element.children().forEach(tableRow => {
            expect(tableRow.children().getElements()).toHaveLength(2);
            tableRow.children().forEach(node => {
              expect(node.type()).toBe(TableCell);
            });
          });
        });

        describe('each <TableCell />', () => {
          it('should have correct properties', () => {
            element.children().forEach(tableRow => {
              tableRow.children().forEach(tableCell => {
                expect(tableCell.props()).toHaveProperty('align', 'center');
              });
            });
          });

          it('should have a correct text', () => {
            element.children().forEach((tableRow, index) => {
              expect(tableRow.childAt(0).text()).toBe(data.body[index].code);
              expect(tableRow.childAt(1).text()).toBe(data.body[index].rate);
            });
          });
        });
      });
    });
  });
});
