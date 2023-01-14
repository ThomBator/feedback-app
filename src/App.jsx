import {useState} from 'react';
import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import Card from './components/shared/Card';


function App() {
    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = (id) => {
        if(window.confirm('are you sure you want to delete?')) {
            setFeedback(feedback.filter((item)=> item.id !== id ));
        }
    }
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                <Card>Hello Card</Card>
        </div>

        </>
    );
}

export default App
