import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  taskContainer: {
    display: 'flex',
    width: '50%',
    height: '90px',
    boxShadow: '0px 6px 26px -7px rgba(88, 49, 85, 0.2)',
    margin: '30px auto',
    backgroundColor: '#efe8d4',
    borderRadius: '10px',
    padding: '0 20px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  informContainer: {
    display: 'flex',
    textAlign:'start',
    flexDirection: 'column',
    justifyContent: 'center',
    gap:'10px',
  },
  taskTitle: {
    fontSize: '20px',
  },
  taskTimer: {
      fontSize: '16px',
      color: 'grey'
  },
  actionsContainer: {
    display: 'flex',
    gap: '20px',
    fontSize: '2.5rem',
   /* color: 'violet',*/
  }
});

export default useStyle;
