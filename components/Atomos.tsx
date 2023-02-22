import { Button, Card, Typography } from '@material-ui/core';

interface AtomosProps {
  image: string;
  title: string;
  subtitle: string;
  website: string;
}

const Atomos = (props: AtomosProps) => {
  const { image, title, subtitle, website } = props;

  return (
    <Card>
      <img src={image} alt={title} />

      <Typography variant="h5" component="h2">
        {title}
      </Typography>

      <Typography variant="subtitle1" component="p">
        {subtitle}
      </Typography>

      <Button href={website} target="_blank">
        Visitar sitio web
      </Button>
    </Card>
  );
};
export default Atomos;
