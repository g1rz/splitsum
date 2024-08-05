import './ResultsItem.sass';

const ResultsItem = ({debtor, creditor, transaction}) => {
    return (
        <div className="result-item" >
            <span className="result-item__name">{debtor}</span>
            <span className="result-item__route">{transaction} руб.</span>
            <span className="result-item__name">{creditor}</span>
        </div>
    )
}

export default ResultsItem;
