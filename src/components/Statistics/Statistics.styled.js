import styled from 'styled-components';
import Statistics from './Statistics';

export const StyledStatistics = styled(Statistics)`
  & ul {
    list-style: none;
    text-align: left;
    text-shadow: 0px 1px 4px #9380f0;
  }

  & li {
    line-height: 2em;
  }
`;
