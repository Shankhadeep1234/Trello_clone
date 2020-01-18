const initialState = [
  {
    id: 0,
    title: "Last Episode",
    cards: [
      {
        id: 0,
        text: "We created a static text and a static card"
      },
      {
        id: 1,
        text: "We created another with a mix of material UI and React+Redux"
      }
    ]
  },
  {
    id: 1,
    title: "This Episode",
    cards: [
      {
        id: 0,
        text: "We will create our first reducer"
      },
      {
        id: 1,
        text: "And render many cards on our list with static data"
      },
      {
        id: 2,
        text: "Also we will also make some critical changes"
      }
    ]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
