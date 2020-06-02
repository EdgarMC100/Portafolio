import React from 'react';
import H2Styled from '../Styled/H2Styled';
import H3Styled from '../Styled/H3Styled';
import PStyled from '../Styled/PStyled';
const Education = props =>(
    <div className="Education">
        <H2Styled name="Education"></H2Styled>
        <div className="Education-container">
            {props.data.map((edu,index) => (
                <div className="Education-item" key={'Edu-${index}'}>
                        <H3Styled>{edu.degree} {edu.institution}
                            <span>{edu.startDate}-{edu.endDate}</span>
                        </H3Styled>
                        <PStyled name={edu.description}></PStyled>
                </div>
            ))}
        </div>
    </div>
);

export default Education;