import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    flexDirection: 'column',
    margin: '30px 0',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  paperStyle: {
    width: '400px',
    margin: '0 auto',
  },
}));

export default useStyles;
