import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div className='answer-container container'>
            <div className='answer-container bg-info text-black container p-4 m-3 rounded'>
                <h2 className='container-title'>
                    1.Props vs state
                </h2>
                <p className='container-description'>
                    Answer :1. Props :- Props are owned and read-only by a parent
                             State :- State is owned locally and the component updates itself.
                            2. Props :-It can be accessed by the child component
                               State :- It cannot be accessed by child component.
                </p>
            </div>
            <div className='answer-container bg-info text-black container p-4 m-3 rounded'>
                <h2 className='container-title'>
                    2.How does useState work?

                </h2>
                <p className='container-description'>
                    Answer : 2. useState is react hook.It allows us to have state variable
                                in functional components. We pass the initial to this function ,
                                it returns a variable with the current state value and another
                                function to update this value.
                </p>
            </div>
            <div className='answer-container bg-info text-black container p-4 m-3 rounded'>
                <h2 className='container-title'>
                    3.Purpose of useEffect other than fetching data.

                </h2>
                <p className='container-description'>
                    Answer : 3. The useEffect is used for load data. useEffect takes two arguments.
                                The first argument passed to useEffect is a function called useEffect
                                and the second argument is an array of dependence.
                                The useEffect in react js allows us to perform side effects in our
                                components.
                </p>
            </div>
            <div className='answer-container bg-info text-black container p-4 m-3 rounded'>
                <h2 className='container-title'>
                    4.How Does React work?

                </h2>
                <p className='container-description'>
                    Answer : 4. React components work to similarly to javaScript functions as they
                                accept arbitrary inputs called Props (properties). We can use many 
                                components above the code. ReactJs is one of the most popular javaScript
                                libraries for mobile and web application development.
                                
                </p>
            </div>
        </div>
    );
};

export default Answer;