
// // export default ClientsFeedback;
// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

// const ClientsFeedback = () => {
//     const [feedbacks, setFeedbacks] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8080/api/feedback')
//             .then(response => {
//                 setFeedbacks(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the feedback!', error);
//             });
//     }, []);

//     return (
//         <div className="container mt-5">
//             <div className="row">
//                 {feedbacks.map((feedback, index) => (
//                     <div className="col-md-4" key={index}>
//                         <div className="card mb-4">
//                             <div className="card-body">
//                                 <h5 className="card-title">{feedback.clientName}</h5>
//                                 <h6 className="card-subtitle mb-2 text-muted">Vendor: {feedback.vendorName}</h6>
//                                 <p className="card-text"><strong>Feedback about Vendor:</strong> {feedback.clientFeedback}</p>
//                                 <p className="card-text"><strong>Feedback about Service:</strong> {feedback.serviceFeedback}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ClientsFeedback;
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ClientsFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/feedback')
            .then(response => {
                setFeedbacks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the feedback!', error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                {feedbacks.map((feedback, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4" style={{ width: '18rem', height: '20rem'}}>
                            <div className="card-header"><strong>Client:</strong>
                                {feedback.clientName}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Vendor:</strong> {feedback.vendorName}</li>
                                <li className="list-group-item"><strong>Feedback about Vendor:</strong> {feedback.clientFeedback}</li>
                                <li className="list-group-item"><strong>Feedback about Service:</strong> {feedback.serviceFeedback}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientsFeedback;