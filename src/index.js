import dataFromServer from './server'
import moment from 'moment'
import './reset.scss'
import './userList.scss'

const root = document.getElementById('root');

const render = (data) =>{
    const userDB = {};
    data.users.forEach((user)=>{
        userDB[user.username] = user;
    });
    const db = {};
    data.comments.forEach((item)=>{
        const itemDate = moment(item.time);
        const dateId = itemDate.format('DD/MM/YYYY');
        if(!db[dateId]) {
            db[dateId] = {
                moment: itemDate,
                items: []
            };
        }
        item.userData = userDB[item.username];
        db[dateId].items.push(item);
    });
    root.innerHTML = '<div class="comments-count">' + data.comments.length +' Comments</div>';
    Object.keys(db).forEach((currentDay)=>{
        const day = db[currentDay];
        const dayBlock = document.createElement('div');
        dayBlock.className = 'block-day';
        dayBlock.innerHTML = '' +
            '<p class="day-name">' + day.moment.format('MMM DD YYYY') + '</p>';
        const tableWrap = document.createElement('div');
        tableWrap.className = 'block-table-wrap';
        const dayTable = document.createElement('table');
        day.items.forEach((item)=>{
            const dayLine = document.createElement('tr');
            dayLine.innerHTML = '' +
                '<td class="day-date">' + moment(item.time).format('HH:mm:ss A') + '</td> ' +
                '<td class="author">' + item.userData.fullName + '</td> ' +
                '<td class="comment">' + item.text + '</td> ';
            dayTable.appendChild(dayLine);
        });

        tableWrap.appendChild(dayTable);
        dayBlock.appendChild(tableWrap);

        root.appendChild(dayBlock);
    });

};

render(dataFromServer);