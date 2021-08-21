import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

export default function Registration() {
  return (
    <div>
      <FormControl isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder="EMail" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder="Password" />
      </FormControl>
    </div>
  );
}
