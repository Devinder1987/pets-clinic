import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import heroData from './carouselData.json';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const card = {
  width: '80vw',
  position: 'absolute',
  bottom: 20,
  right: 20,
  padding: 20,
  borderRadius: 5
};
const useStyles = makeStyles(theme => ({
  dark: {
    ...card,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    img: {
      height: 250
    },
    [theme.breakpoints.up('md')]: {
      width: '45%',
      img: {
        height: 350
      }
    }
  },
  light: {
    ...card,
    color: 'black',
    backgroundColor: 'rgba(255,255,255, 0.5)',
    [theme.breakpoints.up('md')]: {
      width: '45%',
      img: {
        height: 350
      }
    }
  },
  button: {
    marginTop: 20
  }
}));
export default function CarouselContainer(handleOpen) {
  const classes = useStyles();
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={false}
      showStatus={false}
      showThumbs={false}
      onChange={() => {}}
      onClickItem={() => {}}
      onClickThumb={() => {}}
    >
      {heroData.hero.map(item => {
        return (
          <div key={item.header}>
            <picture>
              <source
                media="(min-width: 960px)"
                srcset={item.desktopImagePath}
              />
              <img src={item.imagePath} alt={item.header} width="100%" />
            </picture>
            {item.text && (
              <div className={classes.dark}>
                <Typography variant="h5" component="h2">
                  {item.text}
                </Typography>
                {item.cta && (
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    href={item.cta.ctaUrl}
                  >
                    {item.cta.ctaLabel}
                  </Button>
                )}
              </div>
            )}
          </div>
        );
      })}
    </Carousel>
  );
}
