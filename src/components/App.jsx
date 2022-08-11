import { StyledStatistics } from './Statistics/Statistics.styled';
import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export default function Widget() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onBtnClick = event => {
    switch (event.target.id) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          btnTitles={['good', 'neutral', 'bad']}
          method={onBtnClick}
        />
      </Section>
      <Section className title="Statistics">
        {[good, neutral, bad].every(el => el === 0) ? (
          <Notification message="There is no feedback" />
        ) : (
          <StyledStatistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={Number.parseInt(
              countPositiveFeedbackPercentage()
            )}
          />
        )}
      </Section>
    </>
  );
}
