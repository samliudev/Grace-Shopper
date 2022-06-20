import React, { useState, useEffect } from 'react';
import { Modal, Box, Button, makeStyles } from '@material-ui/core';
import PokemonCard from './PokemonCard';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SinglePokemonView = ({ pokemon }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper} align="center">
      <h2 id="simple-modal-title">{pokemon.pokemon_name.toUpperCase()}</h2>
      <img height="500" src={pokemon.imageUrl} alt="" />
      <p id="simple-modal-description">{pokemon.description}</p>
      <p style={{ fontWeight: 600 }}>{`$${(pokemon.price / 100).toFixed(2)}`}</p>
    </div>
  );

  return (
    <>
      <Box padding={1} bgcolor="aliceBlue">
        <Button onClick={handleOpen}>
          <PokemonCard pokemon={pokemon} />
        </Button>
        <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ position: 'absolute', border: '2px solid #000' }}>{body}</Box>
        </Modal>
      </Box>
    </>
  );
};

export default SinglePokemonView;
