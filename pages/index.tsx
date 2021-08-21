import { Button } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Registration from '../components/Registration';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Registration />
      <br />
      <Button size="xl" variant="with-shadow">
        Поехали
      </Button>
    </div>
  );
};

export default Home;
