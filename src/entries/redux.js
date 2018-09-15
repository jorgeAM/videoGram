import { createStore } from 'redux';

const form = document.getElementById('form');

const handleSubmit = (ev) => {
  ev.preventDefault();
  const data = new FormData(form);
  const title = data.get('title');
  store.dispatch({
    type: 'ADD_SONG',
    payload: {
      title,
    },
  });
};

form.addEventListener('submit', handleSubmit);

const initialState = [
  { title: 'No Brainer' },
  { title: 'I wanna be sedated' },
];

/*REDUCER*/
const myReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.payload];
      break;
    default:
      return state;
  }
};

/*STORE*/
const store = createStore(
  myReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const playlist = document.getElementById('playlist');
const songs = store.getState();

songs.forEach((song) => {
  const template = document.createElement('p');
  template.textContent = song.title;
  playlist.append(template);
});
