import React from 'react';
import Text from '.';

export default {
  title: 'Atoms/Text',
  component: Text,
};

export const Default = () => (<Text>Arbitrary text</Text>);

export const Styled = () => (<Text style={{ color: 'red' }}>Arbitrary text</Text>);
