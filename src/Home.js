import React from 'react';
import './main.css';
import contentData from './cms/content-strings.json';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

export default function Example() {
  return (
    <div className="home-div fade-in-left">
      <Accordion preExpanded={['b']}>
        {contentData.sections.map(section => (
          <AccordionItem key={section.id} uuid={section.id} className="item">
            <AccordionItemHeading className="heading">
              <AccordionItemButton className="button">
                <span className="title">{section.title}</span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="panel">
              {section.content && <p className="about-p">{section.content}</p>}
              {section.skills && (
                <div className="skills">
                  {section.skills.map(skill => (
                    <p key={skill.name}>{skill.name}</p>
                  ))}
                </div>
              )}
              {section.experiences && (
                <div className="experiences">
                  {section.experiences.map((exp, index) => (
                    <div key={index} className="experience">
                      <h3>{exp.role} - {exp.company}</h3>
                      <p><b>{exp.startDate} to {exp.endDate}</b> | {exp.location}</p>
                      <p>{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
