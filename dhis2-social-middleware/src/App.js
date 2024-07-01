import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';

function App() {
  const [reportId, setReportId] = useState('');
  const [telegramId, setTelegramId] = useState('');
  const [whatsappId, setWhatsappId] = useState('');
  const [format, setFormat] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/webhook', { reportId, telegramId, whatsappId, format });
      alert('Webhook configured successfully');
    } catch (error) {
      console.error('Error configuring webhook:', error);
      alert('Failed to configure webhook');
    }
  };

  return (
    <ChakraProvider>
      <Box maxWidth="600px" margin="0 auto" padding="20px">
        <Heading as="h1" size="xl" textAlign="center" mb="8">
          DHIS2 Middleware Configuration
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="reportId" mb="4">
            <FormLabel>Report ID</FormLabel>
            <Input type="text" value={reportId} onChange={(e) => setReportId(e.target.value)} />
          </FormControl>
          <FormControl id="telegramId" mb="4">
            <FormLabel>Telegram ID</FormLabel>
            <Input type="text" value={telegramId} onChange={(e) => setTelegramId(e.target.value)} />
          </FormControl>
          <FormControl id="whatsappId" mb="4">
            <FormLabel>WhatsApp ID</FormLabel>
            <Input type="text" value={whatsappId} onChange={(e) => setWhatsappId(e.target.value)} />
          </FormControl>
          <FormControl id="format" mb="4">
            <FormLabel>Format (csv, pdf, or both)</FormLabel>
            <Input type="text" value={format} onChange={(e) => setFormat(e.target.value)} />
          </FormControl>
          <Button colorScheme="blue" type="submit">
            Configure Webhook
          </Button>
        </form>
      </Box>
    </ChakraProvider>
  );
}

export default App;
