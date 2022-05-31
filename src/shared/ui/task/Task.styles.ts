import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  taskContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  informContainer: {
    display: 'flex',
    textAlign: 'start',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '10px',
  },
  taskTitle: {
    fontSize: '20px',
  },
  taskTimer: {
    fontSize: '16px',
    color: 'grey',
  },
  actionsContainer: {
    display: 'flex',
    gap: '20px',
    fontSize: '2.5rem',
  },
});

export default useStyle;
