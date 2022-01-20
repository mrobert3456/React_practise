import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

const NewQuote = () => {
  const history =useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push("/quotes"); //navigate away if we sent the data

  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
