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
  },
  informContainer: {
    display: 'flex',
    flexDirection: 'column',
      gap: '10px',
      padding: '10px',
  },
  taskTitle: {
    fontSize: '20px',
  },
  taskTimer: {
      fontSize: '15px',
  }
});

export default useStyle;
