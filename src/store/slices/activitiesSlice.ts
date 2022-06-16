import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActivityPlate } from '../../types/activities';
import { updateLocalStorageActivities } from '../../api/storageHandler';

export interface ActivitiesState {
  value: ActivityPlate[]
}

const initialState: ActivitiesState = {
  value: [
    {
      name: 'PARACHUTING',
      description: 'Quam justo, pretium donec risus quisque habitasse a eu sed. Viverra maecenas odio dui interdum ullamcorper quis ullamcorper rhoncus.',
      price: 70,
      currency: 'CHF',
      src: './assets/images/parachuting-min.png',
      alt: 'parachuting person in the sky',
      isClicked: false,
    },
    {
      name: 'CANOEING',
      description: 'Risus vivamus ultrices vel adipiscing leo vel velit. Tortor suspendisse egestas tempor commodo, nec morbi eget. Neque amet viverra eleifend turpis est.',
      price: 58,
      currency: 'CHF',
      src: './assets/images/canoeing-min.png',
      alt: 'canoeing person in the lake',
      isClicked: false,
    },
    {
      name: 'HORSE RIDE',
      description: 'Fusce curabitur nec aliquam sollicitudin tempor. Et morbi feugiat convallis id dictum lorem sit viverra. Neque erat massa enim morbi egestas at nulla aliquam.',
      price: 27,
      currency: 'CHF',
      src: './assets/images/horse_ride-min.png',
      alt: 'two people on a horse ride in the forest',
      isClicked: false,
    },
    {
      name: 'BUGGY TRIP',
      description: 'Sit etiam at donec ac adipiscing amet non non, suscipit. Eget quam ac vivamus enim cursus libero praesent malesuada. Et in odio venenatis arcu ut.',
      price: 53,
      currency: 'CHF',
      src: './assets/images/buggy_trip-min.png',
      alt: 'buggy standing on the hill',
      isClicked: false,
    },
    {
      name: 'BBQ PARTY',
      description: 'Sed placerat sed sed cum eget facilisis. Ac purus velit tempus enim odio proin. Morbi pellentesque arcu, in nunc, sollicitudin. Odio eleifend iaculis.',
      price: 19,
      currency: 'CHF',
      src: './assets/images/bbq_party-min.png',
      alt: 'people making bbq',
      isClicked: false,
    },
    {
      name: 'SAILING',
      description: 'Eu mattis odio convallis ut sed neque, sed mattis sed. At volutpat, est facilisi aenean in sapien ultrices vitae. Varius sodales amet venenatis bibendum molestie.',
      price: 67,
      currency: 'CHF',
      src: './assets/images/sailing-min.png',
      alt: 'sailing boat in the sea',
      isClicked: false,
    },
    {
      name: 'BIRD WATCHING',
      description: 'Ipsum ullamcorper malesuada nulla sed turpis ultricies. Vulputate aenean urna, a at et vitae est. Vestibulum hendrerit urna non libero sed. Sed eu vestibulum.',
      price: 13,
      currency: 'CHF',
      src: './assets/images/bird_watching-min.png',
      alt: 'binnacle lying on a book about birds',
      isClicked: false,
    },
    {
      name: 'HIKE WITH GUIDE',
      description: 'Ante pellentesque facilisis nibh quis eget. Odio libero, sed et consequat ipsum. Elementum eget nullam at et ornare eget venenatis consectetur augue.',
      price: 22,
      currency: 'CHF',
      src: './assets/images/hike_with_guide-min.png',
      alt: 'hiking person in mountains next to mountain lake',
      isClicked: false,
    },
    {
      name: 'BIKING',
      description: 'Euismod viverra mi faucibus purus erat varius ipsum gravida est. Lacus id enim mauris, mattis ipsum, euismod. Vitae malesuada facilisis purus pharetra. Ut vitae.',
      price: 18,
      currency: 'CHF',
      src: './assets/images/biking-min.png',
      alt: 'person biking through the forest path',
      isClicked: false,
    },
    {
      name: 'BONFIRE EVENING',
      description: 'Diam, est, sem nec rhoncus tincidunt. Massa commodo risus aliquam mollis ultrices ornare id. Elementum iaculis elit, amet placerat aliquam. Habitasse.',
      price: 0,
      currency: 'CHF',
      src: './assets/images/bonfire_evening-min.png',
      alt: 'people sitting next to bonfire',
      isClicked: false,
    },
  ],
};

export const ActivitiesSlice = createSlice({
  name: 'chosenActivities',
  initialState,
  reducers: {
    toggleIsClicked: (state, action: PayloadAction<ActivityPlate>) => {
      const currState = [...state.value];
      state.value = currState.map((activity) => {
        if (activity.name === action.payload.name) {
          activity.isClicked = !activity.isClicked;
          return activity;
        }
        return activity;
      });
      updateLocalStorageActivities(state.value);
    },
    updateActivitiesFromLocalStorage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleIsClicked, updateActivitiesFromLocalStorage } = ActivitiesSlice.actions;
export default ActivitiesSlice.reducer;
