https://github.com/mbrn/material-table/issues/814

const useStyles = makeStyles(theme => ({
  table: {
    '& tbody>.MuiTableRow-root:hover': {
      background: 'red',
    }
  },
}));

function MyTable() {
  const classes = useStyles();
  return (
    <div className={classes.table}>
      <MaterialTable .../>
    </div>
  );
}
