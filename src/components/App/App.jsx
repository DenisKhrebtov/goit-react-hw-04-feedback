import { useState, useEffect } from 'react';
import { Wrapper } from './App.styled';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const onSetVoice = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    let totalSum = good + neutral + bad;
    setTotal(totalSum);

    setPositive(Math.round((good / totalSum) * 100) || 0);
  }, [good, neutral, bad]);

  const keyOptions = ['good', 'neutral', 'bad'];

  return (
    <Wrapper>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={keyOptions} onLeaveFeedback={onSetVoice} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrapper>
  );
}
