import {makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root:{
        marginTop:15
    },
    title:{
        fontWeight:700,
        fontSize: 16,
        textTransform: 'uppercase',
    },
    table: {
        minWidth: 700,
    },
    containerTable:{
        overflow:'unset'
    }
}));
export default useStyles