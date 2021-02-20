export function AppReducer(state,action) {
   switch(action.type){
       default:
           return state;
       case "ADD_TRANSACTION":
           return [...state,action.payload];
       case "DELETE_TRANSACTION":
           return state.filter((element)=>element.id!==action.payload);
   }
}

