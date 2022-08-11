import { StyledStatistics } from './Statistics/Statistics.styled';
import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export default class Widget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = event => {
    this.setState(prevState => {
      return { [event.target.id]: (prevState[event.target.id] += 1) };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            btnTitles={Object.keys(this.state)}
            method={this.onBtnClick}
          />
        </Section>
        <Section className title="Statistics">
          {Object.values(this.state).every(el => el === 0) ? (
            <Notification message="There is no feedback" />
          ) : (
            <StyledStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={Number.parseInt(
                this.countPositiveFeedbackPercentage()
              )}
            />
          )}
        </Section>
      </>
    );
  }
}
