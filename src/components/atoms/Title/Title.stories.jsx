import React from 'react';
import Title from '.';

export default {
  title: 'Atoms/Title',
  component: Title,
};

export const Default = () => (<Title>Heading text</Title>);

export const Styled = () => (<Title style={{ color: 'red' }}>Heading text</Title>);
