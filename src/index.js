import dataFromServer from './server'
import moment from 'moment'

const root = document.getElementById('root');

const mm = moment;
const render = (data) =>{

    const db = {};
    data.comments.forEach((item)=>{
        const itemDate = moment(item.time);
       console.log(moment(item.time).format('DD-MM-YYYY'));
       console.log(itemDate.format('dddd'));
       console.log(item);
    });
};

render(dataFromServer);
console.log(dataFromServer);