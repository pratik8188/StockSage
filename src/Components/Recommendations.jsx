import React from 'react';
import styled from 'styled-components';

const RecommendationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right; /* Center the row within the container */
    gap: 20px;
    padding: 60px;
    width: 100%; /* Make sure the container takes the full width */
`;

const RecommendationRow = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center; /* Center the items within the row */
    width: 100%; /* Adjusted width of the row */
`;

const RecommendationItem = styled.div`
    background: #f8f8f8;
    padding: 120px; /* Adjusted padding */
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 1.2rem; /* Font size remains the same */
    height: 180px; /* Increased height */
    width: 60%; /* Adjusted width */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center content vertically */
    align-items: flex-end; /* Align content to the right */
`;

const Recommendations = () => {
    return (
        <RecommendationsContainer>
            <h2>Recommendations</h2>
            <RecommendationRow>
                <RecommendationItem>
                    <h3>Recommendation 1</h3>
                    <p>Details about recommendation 1.</p>
                </RecommendationItem>
                <RecommendationItem>
                    <h3>Recommendation 2</h3>
                    <p>Details about recommendation 2.</p>
                </RecommendationItem>
            </RecommendationRow>
        </RecommendationsContainer>
    );
};

export default Recommendations;
