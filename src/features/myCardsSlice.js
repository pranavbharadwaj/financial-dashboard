import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock API function to fetch card data
const fetchCardsAPI = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          cardNumber: "1234567812345678",
          cardHolder: "John Doe",
          validThru: "12/25",
          balance: "$5,000",
        },
        {
          cardNumber: "9876543210987654",
          cardHolder: "Jane Smith",
          validThru: "11/24",
          balance: "$2,400",
        },
      ]);
    }, 1000)
  );

// Async thunk to fetch cards
export const fetchCards = createAsyncThunk("myCards/fetchCards", async () => {
  const response = await fetchCardsAPI();
  return response;
});

const myCardsSlice = createSlice({
  name: "myCards",
  initialState: {
    cards: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default myCardsSlice.reducer;
