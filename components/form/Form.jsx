import { useRef, useState } from 'react';
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
import { createToast } from '../toast/create-toast.js';

const Form = () => {
  const [data, setData] = useState([]);
  const tokenInput = useRef();
  const seriesInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = '' || tokenInput.current.value.toString().trim();
    const series = seriesInput.current.value.toString().trim();
    const data = await retrieveChartData(series, token);
    console.log(data);

    if (!data.error) {
      setData(data);
      return createToast({
        title: 'Éxito',
        description: '¡Los datos se descargaron correctamente!',
        status: 'success',
        duration: 3000,
      });
    } else {
      return createToast({
        title: 'Error',
        description: data.error.mensaje + ' ' + data.error.detalle,
        status: 'error',
        duration: 5000,
      });
    }
  };

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
