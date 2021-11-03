import React from 'react';
import ColumnItem from '../ColumnItem/ColumnItem';
import ResultsItem from '../ResultsItem/ResultsItem';

const Results = ({ users }) => {


    let debtors = [],
        creditors = [],
        results = [];

    let sum = users.reduce((sum, item) => sum += item.pay, 0);
    let averageSum = Math.round(sum / users.length * 10) / 10;

    console.log('sum', sum);
    console.log('averageSum', averageSum);
    users.map( (item) => {
        let payDiff = item.pay - averageSum;
        payDiff = Math.round(payDiff * 100) / 100;
        let newItem = {...item};
         
        if ( payDiff > 0 ) {
            newItem.payDiff = payDiff;
            creditors.push(newItem);
        } else {
            newItem.payDiff = Math.abs(payDiff);
            debtors.push(newItem);
        }
    });

    console.log('debtors');
    debtors.map(item => console.log(item));
    console.log('creditors');
    creditors.map(item => console.log(item));

    while (creditors.length != 0 && debtors.length != 0) {
        let currCreditor = creditors[0];
        let currDebtor = debtors[0];
        let diff = 0;
        let transaction = 0;
        if (currCreditor.payDiff < currDebtor.payDiff) {
            transaction = currCreditor.payDiff;
            diff = currDebtor.payDiff - currCreditor.payDiff;
            diff = Math.round(diff * 10) / 10;
            currCreditor.payDiff = 0;
            currDebtor.payDiff = diff;
            creditors.shift();
            
        } else if (currCreditor.payDiff > currDebtor.payDiff) {
            transaction = currDebtor.payDiff;
            diff = currCreditor.payDiff - currDebtor.payDiff;
            diff = Math.round(diff * 10) / 10;
            currCreditor.payDiff = diff;
            currDebtor.payDiff = 0;
            debtors.shift();
        } else {
            transaction = currCreditor.payDiff;
            diff = currDebtor.payDiff;
            currCreditor.payDiff = 0;
            currDebtor.payDiff = 0;
            creditors.shift();
            debtors.shift();
        } 
        results.push({
            debtorName: currDebtor.name,
            creditorName: currCreditor.name,
            transaction: transaction.toFixed(2)
        });
    }

    const resultList = results ? results.map((item, index) => {
        return (
            <ResultsItem 
                key={index} 
                debtor={item.debtorName} 
                creditor={item.creditorName}
                transaction={item.transaction}/>
        )
    }) : '';

    
    return (
        <ColumnItem 
            title="Результат">
            {resultList}
        </ColumnItem>
    )
}

export default Results
