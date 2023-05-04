import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          missions.map((elem) => (
            <MissionCard
              key={ elem.name }
              name={ elem.name }
              year={ elem.year }
              destination={ elem.destination }
            />
          ))
        }
      </div>
    );
  }
}

export default Missions;
