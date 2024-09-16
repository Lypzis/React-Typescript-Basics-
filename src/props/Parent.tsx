import { Child } from './Child';

const Parent = () => {
  return (
    <Child color='red' onClick={() => console.log('I have been clicked')}>
      abcde
    </Child>
  );
};

export default Parent;
