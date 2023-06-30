//action values
const ADD_ITEM = 'todos/ADD_ITEM'
const UPDATE_ITEM = 'todos/UPDATE_ITEM'
const DELETE_ITEM = 'todos/DELETE_ITEM'

//action creators (변경하기 위해 담는 틀)
export const addItem = (payload) => {
    console.log('additem작동중', payload)
    return {
        type: ADD_ITEM,
        payload,
    }
}
export const updateItem = (payload) => {
    return {
        type: UPDATE_ITEM,
        payload,
    }
}
export const deleteItem = (payload) => {
    return {
        type: DELETE_ITEM,
        payload,
    }
}


//initial state (초기상태값)

const initialState = [
    {
        id: 1,
        title: '고양이 밥주기',
        body: '글 내용 글 test test내용 테스트 테스트!',
        isDone: false,
    },
    {
        id: 2,
        title: '사슴 밥주기',
        body: '글 내용 글 내용 🫠 test test 테스트!',
        isDone: true,
    },
    {
        id: 3,
        title: '사자 밥주기',
        body: '글 내용 test 글 🌧️ 테스트 테스트!',
        isDone: false,
    },
]


//reducer

const reducer = (state = initialState, action) => {
    console.log('reducer작동중')
    switch (action.type) {
        case ADD_ITEM:
            console.log('add작동');
            console.log(state)
            return [...state, action.payload];
        case UPDATE_ITEM:
            console.log('update작동')
            return state.map(todo => {
                if (todo.id !== action.payload.id) return todo;
                return {
                    ...todo,
                    isDone: !todo.isDone
                };
            });
        case DELETE_ITEM:
            console.log('delete작동중');
            return state.filter(todo => todo.id !== action.payload.id)

        default:
            return state;
    }
}

export default reducer