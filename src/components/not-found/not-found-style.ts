type NotFoundTitleType = {
  textAlign: 'left' | 'right' | 'center';
  fontSize: string;
  margin: string;
}

type NotFoundLinkType = {
  display: string;
  textAlign: 'left' | 'right' | 'center';
  color: string;
  fontSize: string;
}

export const notFoundTitle: NotFoundTitleType = {
  textAlign: 'center',
  fontSize: '70px',
  margin: '200px',
};

export const notFoundLink: NotFoundLinkType = {
  display: 'block',
  textAlign: 'center',
  color: 'blue',
  fontSize: '30px',
};
