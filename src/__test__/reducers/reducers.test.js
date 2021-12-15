import reducer from "../../reducers";
import UserMock from "../../__mocks__/UserMock";

describe("Reducers", () => {
  test("Return initial State", () => {
    const initialState = {
      usersReducer: {
        users: [],
        totalPages: 0,
        loading: false,
        error: "",
      },
    };
    expect(reducer({}, "")).toEqual(initialState);
  });
  test('Set page number', () =>{
    const initialState = {
        usersReducer: {
          users: [],
          totalPages: 0,
          loading: false,
          error: "",
        },
      };
      const payload = 2;
      const action = {
          type: 'set_pages_number',
          payload
      }
      const expected = {
        usersReducer: {
          users: [],
          totalPages: 2,
          loading: false,
          error: "",
        }
        }
        expect(reducer(initialState,action)).toEqual(expected);
  })
});
