type ErrorType = {
  position: 'fixed' | 'absolute' | 'relative' | 'static';
  padding: string;
  backgroundColor: string;
  color: string;
}

export const errorStyle:ErrorType = {
  position: 'absolute',
  padding: '20px',
  backgroundColor: 'red',
  color: 'white',
};
