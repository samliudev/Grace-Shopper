import React from 'react';
import { fetchProducts } from '../store/products';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Paper, Typography, ButtonBase, CardMedia, CardContent, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxHeight: 200,
    minHeight: 200,
    maxWidth: 325,
    minWidth: 325,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  image: {
    minWidth: 150,
    maxWidth: 200,
    minHeight: 200,
    maxHeight: 200,
    backgroundSize: 'contain',
  },
  price: {
    fontWeight: 600,
  },
  type: {
    fontSize: 12,
  },
  qty: {
    fontSize: 14,
  },
}));

export default function PokemonCard({ pokemon }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} align="left">
      <CardMedia className={classes.image} image={pokemon.imageUrl} />
      <div className={classes.details}>
        <CardContent className={classes.content} align="left">
          <Typography variant="subtitle2">{pokemon.pokemon_name}</Typography>
          <Typography className={classes.type}>{pokemon.type}</Typography>
          <Typography className={classes.price} variant="body2">{`$${(pokemon.price / 100).toFixed(2)}`}</Typography>
          <Typography className={classes.qty}>QTY: {pokemon.quantity}</Typography>
        </CardContent>
      </div>
    </Card>
  );
}
