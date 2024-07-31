import React from 'react';
import ColumnItem from '../ColumnItem/ColumnItem';
import ResultsItem from '../ResultsItem/ResultsItem';

import './Results.sass';

const Results = ({ users }) => {

    const [sum, setSum] = React.useState(0);
    const [averageSum, setAverageSum] = React.useState(0);
    const [results, setResults ] = React.useState([]);


    React.useEffect(() => {
        let debtors = [],
            creditors = [],
            results = [];

        let sum = users.reduce((sum, item) => sum += item.pay, 0);
        let countUsers = users.reduce((sum, user) => sum += parseInt(user.count), 0);
        console.log(countUsers);
        let averageSum = Math.round(sum / countUsers * 10) / 10;

        setSum(sum);
        setAverageSum(averageSum);
        console.log(users);
        users.map( (item) => {
            let payDiff = (item.pay / parseInt(item.count) - averageSum) * parseInt(item.count);
            console.log(item.name, payDiff);
            payDiff = Math.round(payDiff * 100) / 100;
            let newItem = {...item};
             
            if ( payDiff > 0 ) {
                newItem.payDiff = payDiff;
                creditors.push(newItem);
            } else {
                newItem.payDiff = Math.abs(payDiff);
                debtors.push(newItem);
            }
        });

        while (creditors.length != 0 && debtors.length != 0) {
            let currCreditor = creditors[0];
            let currDebtor = debtors[0];
            let diff = 0;
            let transaction = 0;
            if (currCreditor.payDiff < currDebtor.payDiff) {
                transaction = currCreditor.payDiff;
                diff = currDebtor.payDiff - currCreditor.payDiff;
                diff = Math.round(diff * 10) / 10;
                currCreditor.payDiff = 0;
                currDebtor.payDiff = diff;
                creditors.shift();
             
            } else if (currCreditor.payDiff > currDebtor.payDiff) {
                transaction = currDebtor.payDiff;
                diff = currCreditor.payDiff - currDebtor.payDiff;
                diff = Math.round(diff * 10) / 10;
                currCreditor.payDiff = diff;
                currDebtor.payDiff = 0;
                debtors.shift();
            } else {
                transaction = currCreditor.payDiff;
                diff = currDebtor.payDiff;
                currCreditor.payDiff = 0;
                currDebtor.payDiff = 0;
                creditors.shift();
                debtors.shift();
            } 
            results.push({
                debtorName: currDebtor.name,
                creditorName: currCreditor.name,
                transaction: transaction.toFixed(2)
            });
        };

        setResults(results);
    }, [users]);

    

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
            <div className="result-list">
                {resultList}
            </div>
            
            {sum > 0 && averageSum > 0 && (
                <div className="result-general">
                    <div className="user-info">
                        <div className="user-info__pay">
                            <span className="user-info__item">{sum} руб.</span>
                        </div>
                        <div className="user-info__name">
                            <span className="user-info__item">Итого</span>
                        </div>
                    </div>

                    <div className="user-info">
                        <div className="user-info__pay">
                            <span className="user-info__item">{averageSum} руб.</span>
                        </div>
                        <div className="user-info__name">
                            <span className="user-info__item">Среднее</span>
                        </div>
                    </div>
                    <div className="user-info">
                        <div className="user-info__pay">
                            <span className="user-info__item">{users.reduce((sum, user) => sum += parseInt(user.count), 0)}</span>
                        </div>
                        <div className="user-info__name">
                            <span className="user-info__item">Кол-во человек</span>
                        </div>
                    </div>
                </div>
            )}
            
        </ColumnItem>
    )
}

export default Results
