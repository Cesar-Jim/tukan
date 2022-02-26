import { useContext, useEffect, useRef, useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Button,
  useToast,
} from '@chakra-ui/react';
import { retrieveChartData } from '../../utils/data-utilities-.js';
import { createToast } from '../../utils/create-toast.js';

import AppContext from '../../context/context.js';

const Form = () => {
  const tokenInput = useRef();
  const seriesInput = useRef();
  const { data, fetchDataApi, setErrorInState, error } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = '' || tokenInput.current.value.toString().trim();
    const series = seriesInput.current.value.toString().trim();

    await fetchDataApi(series, token);
  };

  useEffect(() => {
    if (error) {
      return createToast({
        title: 'Error',
        description: error?.mensaje + ' ' + error?.detalle + ' ' + error?.url,
        status: 'error',
        duration: 5000,
      });
    }

    if (data) {
      return createToast({
        title: 'Éxito',
        description: 'Datos descargados correctamente.',
        status: 'success',
        duration: 3000,
      });
    }
  }, [error, data]);

  return (
    <Flex
      className="form-container"
      margin="0 auto"
      width={['300px', '300px', '480px', '740px']}
      flexDir="column"
    >
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="token">Token</FormLabel>
          <Input
            id="token"
            type="token"
            ref={tokenInput}
            required
            fontSize={['.6rem', '.7rem', '.8rem', '1rem']}
          />
          <FormHelperText>Please type your Banxico token.</FormHelperText>
          <FormLabel htmlFor="series" mt="2rem">
            Series
          </FormLabel>
          <Input
            id="series"
            type="series"
            ref={seriesInput}
            required
            fontSize={['.6rem', '.7rem', '.8rem', '1rem']}
          />
          <FormHelperText>
            Please type a series ID (example: SF61745,SP68257).
          </FormHelperText>
        </FormControl>
        <Button type="submit" mt="3rem" width="100px" colorScheme="twitter">
          Fetch
        </Button>
      </form>
    </Flex>
  );
};
export default Form;
