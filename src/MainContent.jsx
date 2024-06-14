import React, { useState } from "react";

import { Tabs, Tab } from 'react-bootstrap';
import RaceTimePage from './pages/RaceTimePage';

const MainContent = () => {

  const [tabKey, setTabKey] = useState('tab1');

  return (
      <div className="container mt-5">
        <Tabs
          id="tabarea"
          activeKey={tabKey}
          onSelect={(k) => setTabKey(k)}
        >
          <Tab eventKey="tab1" title="Regatta Management">
            <div className="p-3">
            </div>
          </Tab>
          <Tab eventKey="tab2" title="Race Configuration">
            <div className="p-3">
            </div>
          </Tab>
          <Tab eventKey="tab3" title="Race Times">
            <div className="p-3">
              <RaceTimePage/>
            </div>
          </Tab>
          <Tab eventKey="tab4" title="Race Scoring">
            <div className="p-4">
            </div>
          </Tab>

        </Tabs>
      </div>
    );
}

export default MainContent;