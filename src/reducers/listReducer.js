const initialState =[
    {
        title: "Last Episode",
        id:0,
        cards:[
            {
                id: 0,
                text:'We created a static list and static card'
            },
            {
                id:1,
                text:'We used a mix between material UI React and components'
            }
        ]
    },
    {
        title: "This Episode",
        id:1,
        cards:[
            {
                id: 0,
                text:'We will create our first reducer'
            },
            {
                id:1,
                text:'and render many cards on our list with static data'
            },
            {
                id:2,
                text:'We will also make little changes'
            }
        ]
    }
]

const listReducer =(state = initialState,action) =>{
    switch(action.type){
        default:
            return state;
    }
}

export default listReducer;