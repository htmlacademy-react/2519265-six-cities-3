type errorUploadContainerType = {
  width: string;
  margin: string;
  textAlign: 'left' | 'center' |'right' | 'justify' | 'start' | 'end';
};

export const errorUploadContainer: errorUploadContainerType = {
  width: '100%',
  margin: '100px auto',
  textAlign: 'center',
};

export const errorUploadTitle = {
  fontSize: '100px',
};

type errorUploadTextType = {
  color: string;
  backgroundColor: string;
  padding: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  fontStyle: string;
  transform: string;
  borderRadius: string;
  border: string;
  transition: string;
};

export const errorUploadText: errorUploadTextType = {
  color: '#fff',
  backgroundColor: '#4481c3',
  padding: '9px 21px 6px 11px',
  fontSize: '19px',
  lineHeight: '1.211',
  fontWeight: '700',
  fontStyle: 'oblique',
  transform: 'skew(-15deg)',
  borderRadius: '3px',
  border: 'none',
  transition: 'background .3s, color .3s, text-shadow .3s',
};
