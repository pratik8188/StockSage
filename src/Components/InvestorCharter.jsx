import React from 'react';
import styled from 'styled-components';

const InvestorCharter = () => {
    return (
        <CharterContainer>
            <h2>Investor Charter</h2>
            <CharterContent>
                <p>
                    Our vision is to invest with knowledge and safety. Our mission is to ensure every investor
                    can invest in the right products based on their needs, manage and monitor these investments
                    to achieve their goals, and access reports to enjoy financial wellness. As a Research Analyst,
                    we publish reports based on our research activities, providing independent and unbiased views
                    on securities. We offer recommendations with full disclosure of our financial interests and
                    conduct annual audits. Our services include onboarding clients, making necessary disclosures,
                    distributing research reports and recommendations fairly, and maintaining confidentiality
                    until reports are publicly available.

                    For grievances, investors should first approach the concerned research analyst to resolve
                    issues within 30 days. If unresolved, complaints can be lodged with SEBI via the SCORES portal
                    for centralized web-based redressal and status tracking. Physical complaints can be sent to the
                    Office of Investor Assistance and Education, SEBI Bhavan, Mumbai. Investors should always deal
                    with SEBI-registered Research Analysts, ensuring they have a valid registration certificate and
                    checking the SEBI registration number. Refer to the SEBI website for a list of registered analysts,
                    and pay attention to disclosures in research reports before investing. Payments should be made
                    through banking channels with signed receipts. Before buying securities or applying for public
                    offers, verify research recommendations, and ask relevant questions to clarify doubts. Inform
                    SEBI of any analysts offering assured returns. Do not provide funds for investment to the analyst,
                    fall for advertisements or market rumors, get attracted to limited-period discounts or incentive gifts,
                    or share login credentials and passwords with the Research Analyst. <br />

                    <h6>
                        <br />
                    Gaurav Kulkarni. <br />
                    SEBI registered Research Analyst. <br />
                    SEBI Registration Number: INH000009311. Mobile Number: 9970664299
                    </h6>
                </p>
            </CharterContent>
        </CharterContainer>
    );
};

const CharterContainer = styled.div`
    padding: 2rem;
    text-align: center;
`;

const CharterContent = styled.div`
    margin-top: 1rem;
    text-align: left;
`;

export default InvestorCharter;
