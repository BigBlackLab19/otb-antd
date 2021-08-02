import { DeleteFilled } from '@ant-design/icons';
import {
  Card, Row, Col, Button,
} from 'antd';
import last from 'lodash.last';
import React from 'react';
import styled from 'styled-components';

function TaskDisplay(props) {
  const {
    task, handleOnDelete, taskList, isPlayed,
  } = props;
  const { title, duration } = task;
  const isLast = last(taskList).id === task.id;
  const deleteButton = isLast && !isPlayed && (
    <DeleteButton onClick={handleOnDelete}>
      <DeleteFilled />
    </DeleteButton>
  );

  return (
    <ParentContainer>
      <CardContainer>
        <Row>
          <Column span={12}>{title}</Column>
          <SelectMinutesColumn span={10}>
            <breakOption />
            <MinutesLabel>
              {' '}
              {duration}
              {' '}
              minutes
            </MinutesLabel>
          </SelectMinutesColumn>
          <Col>{deleteButton}</Col>
        </Row>
      </CardContainer>
    </ParentContainer>
  );
}

const ParentContainer = styled.div`
  padding-bottom: 0.5em;
`;

const CardContainer = styled(Card)`
  height: 64px;
  padding-top: 4px;
  background-color: #73c8fb;
  border: none;
`;

const Column = styled(Col)`
  padding-left: 0.2em;
  display: flex;
  justify-content: center;
`;

const SelectMinutesColumn = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MinutesLabel = styled.span`
  padding-left: 0.5em;
`;

const DeleteButton = styled(Button)`
  border-color: #000;
  color: #000;
  background-color: transparent;
`;

export default TaskDisplay;
