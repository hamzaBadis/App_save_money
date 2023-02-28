import axios from 'axios';
import store from '../store';
import dateFormat from 'dateformat';


const URL_data = 'http://localhost:3000/';

const addData = async (item) => {

    try {
        if (!item.title || !item.amount || !item.date) alert('Required fields are empty');
        else {
            const res = await axios.post(URL_data + item.addFct,
                {
                    title: item.title,
                    amount: item.amount,
                    date: new Date(item.date),
                    userID: store.getters.getUserID
                }
            );
            return res
        }
    } catch (error) { console.log(error) }


}

const editItem = async (type, itemID, item) => {
    try {
        const res = await axios.patch(URL_data + type + '/' + itemID, {
            title: item.title,
            amount: item.amount,
            date: new Date (item.date)
        });
        return res;
    } catch (error) {
        console.log(error)
    }


}

const deleteItem = async (type, itemID) => {
    try {
        const res = await axios.delete(URL_data + type + '/' + itemID);
        return res;

    } catch (error) {
        console.log(error)
    }

}

const listItems = async (showList) => {
    try {
        const res = await axios.get(URL_data + showList + '?userID=' + store.getters.getUserID +'&_sort=date&_order=desc')
        return res.data;
    } catch (error) { console.log(error) }

}
const formatDate = (date) => {
    return dateFormat(date, 'dd/mm/yyyy')
}

const chartData = async () => {
    const resExpenses = await listItems('expenses');
    const resIncomes = await listItems('incomes');

    let expensesData = [];
    let expensesLabels = [];
    let sum = 0
    resExpenses.forEach(item => {
        sum += item.amount
        expensesData.push(sum)
        expensesLabels.push(dateFormat(item.date,'dd/mm'))
    })

    let incomesData = [];
    let incomesLabels = [];
    sum = 0
    resIncomes.forEach(item => {
        sum += item.amount
        incomesData.push(sum);
        incomesLabels.push(dateFormat(item.date,'dd/mm'))
    })

    return {
        incomesData: incomesData,
        expensesData: expensesData,
        expensesLabels : expensesLabels,
        incomesLabels : incomesLabels
    }

}

export {
    URL_data,
    addData,
    editItem,
    deleteItem,
    listItems,
    formatDate,
   // newDate,
    chartData
}