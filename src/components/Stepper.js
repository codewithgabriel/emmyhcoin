import React, { useState } from "react";
import styled from '@emotion/styled'
import { CDBStepper, CDBStep } from "cdbreact";
import StepperHeader from './StepperHeader';
import SignInFormStep from "./SignInFormStep";
// import createaccount from '../imgs/img4.png';
import SelectExchange from "./SelectExchange";
import Transfer from "./Transfer";


const Stepper = () => {
  const [active, setActive] = useState(1);

  const handleNextPrevClick = a => setActive(a);
  return (
    <div className="col-12" style={{ padding: 0 , height: 'auto'}}  data-aos="fade-down">
      <StepperHeader />
      <CDBStepper style={{padding: 50}}>
        <CDBStep
          id={1}
          icon="user-alt"
          name="Create your Account"
          handleClick={() => handleNextPrevClick(1)}
          active={active}
          component={<Step1 handleNextPrevClick={handleNextPrevClick} />}
          style={{color: "#02ccff"}}
        />
        <CDBStep
          id={2}
          icon="info-circle"
          name="Exchange Your Cryto To NGN"
          handleClick={() => handleNextPrevClick(2)}
          active={active}
          component={<Step2 handleNextPrevClick={handleNextPrevClick} />}
        />
        
        <CDBStep
          id={3}
          icon="check"
          name="Finish"
          handleClick={() => handleNextPrevClick(3)}
          active={active}
          component={<Step3 handleNextPrevClick={handleNextPrevClick} />}
        />
      </CDBStepper>

    </div>
  );
};

export default Stepper;

const Step3 = ({ handleNextPrevClick }) => {
  return (
    <StepContainer md="12">
      <div style={{ width: '100%', padding: '30px 10px', height: 'auto' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 'auto',
            borderRadius: '10px',
          }}
        >
          <FlexColumnContainer>
            <div
              style={{
                textAlign: 'center',
                padding: '20px 0 10px 0',
                color: '#939393',
                fontSize: '30px',
                fontWeight: 'bold',
              }}
            >
              Step Three
            </div>
            <FlexColumnContainer width="100%">
              <Transfer handleNextPrevClick={handleNextPrevClick} />
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};


const Step2 = ({ handleNextPrevClick }) => {
  return (
    <StepContainer md="12">
      <div style={{ width: '100%', padding: 0, height: '100%' }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '100%',
            borderRadius: '10px',
          }}
        >
          <FlexColumnContainer>
            <div
              style={{
                textAlign: 'center',
                padding: '0',
                color: '#939393',
                fontSize: '30px',
                fontWeight: 'bold',
              }}
            >
              Step Two
            </div>
            <FlexColumnContainer style={{height: 'auto' , widht: '100%'}}>  
              <SelectExchange  handleNextPrevClick={handleNextPrevClick} />
              
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};

const Step1 = ({ handleNextPrevClick }) => {
  return (
    <StepContainer>
      <div style={{ width: '100%', padding: 0, height: 'auto' }}>
        <div
          style={{
            margin: '0 auto',
          }}
        >
          <FlexColumnContainer>
            <div
              style={{
                textAlign: 'center',
                padding:0,
                color: '#939393',
                fontSize: '30px',
                fontWeight: 'bold',
                height: 'auto'
              }}
            >
              Step One
            </div>
            <FlexColumnContainer width="100%">
              <div className="col-12">
          
                <div style={{ background: 'transparent' , padding: 0 , margin: 0}} className="col-12">

                  <div className="col-12"> 
                      <SignInFormStep/>
                  </div>
                </div>

              </div>
            </FlexColumnContainer>
          </FlexColumnContainer>
        </div>
      </div>
    </StepContainer>
  );
};

const FlexColumnContainer = styled('div')`
  padding: 0px;
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  box-sizing: border-box;
`;

const StepContainer = styled('div')`
  width: 100%;
  height: 100%;
`;

